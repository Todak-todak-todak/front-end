import { google } from 'googleapis';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const localKeyPath = path.join(__dirname, '../service-account-key.json');

let CLIENT_EMAIL;
let PRIVATE_KEY;

// local service-account-key.json 파일 먼저 확인
if (fs.existsSync(localKeyPath)) {
  console.log('로컬 service-account-key.json 파일에서 키를 로드합니다.');
  try {
    const serviceAccountJson = JSON.parse(
      fs.readFileSync(localKeyPath, 'utf8')
    );
    if (serviceAccountJson.client_email && serviceAccountJson.private_key) {
      CLIENT_EMAIL = serviceAccountJson.client_email;
      PRIVATE_KEY = serviceAccountJson.private_key;
      console.log(
        '로컬 service-account-key.json 파일에서 키를 성공적으로 로드했습니다. '
      );
    } else {
      console.error(
        '오류: 로컬 service-account-key.json 파일의 형식이 올바르지 않습니다. client_email 또는 private_key가 누락되었습니다.'
      );
      process.exit(1);
    }
  } catch (err) {
    console.error(
      '오류: 로컬 service-account-key.json 파일을 읽거나 파싱하는 중 오류 발생:',
      err.message
    );
    process.exit(1);
  }
}

const GOOGLE_DRIVE_FOLDER_ID = '1bSB1PZlxMpFEUfqMej3TgECNiyG1eEH5';
const LOCAL_LOCALES_DIR = path.join(process.cwd(), 'src', 'i18n', 'locales');

async function downloadLocales() {
  console.log('Google Drive에서 번역 파일 다운로드를 시작합니다...');
  console.log('인증 과정 시작...');
  const serviceAccount = JSON.parse(
    fs.readFileSync('./service-account-key.json', 'utf-8')
  );
  const auth = new google.auth.JWT({
    email: serviceAccount.client_email,
    key: serviceAccount.private_key.trim(),
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  });

  try {
    await auth.authorize();
    console.log('인증 완료. ');
  } catch (authError) {
    console.error('클라이언트 이메일 또는 개인 키가 올바른지 확인해주세요.');
    process.exit(1);
  }

  const drive = google.drive({ version: 'v3', auth });

  try {
    console.log('Google Drive에서 파일 목록 가져오기 시도...');
    const res = await drive.files.list({
      q: `'${GOOGLE_DRIVE_FOLDER_ID}' in parents and mimeType='application/json'`,
      fields: 'files(id, name)',
    });
    console.log('Google Drive에서 파일 목록 가져오기 성공.');

    const files = res.data.files;
    if (files.length === 0) {
      console.log('지정된 폴더에 JSON 파일이 없습니다.');
      return;
    }

    console.log(`다운로드할 JSON 파일 ${files.length}개 발견.`);

    // 각 JSON 파일 다운로드
    for (const file of files) {
      const filePath = path.join(LOCAL_LOCALES_DIR, file.name);

      // Google Drive 파일의 metadata 가져오기 (modifiedTime)
      const fileMeta = await drive.files.get({
        fileId: file.id,
        fields: 'modifiedTime',
      });

      const remoteModifiedTime = new Date(fileMeta.data.modifiedTime);
      let shouldDownload = true;

      // 로컬 파일 존재 여부 확인
      if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        const localModifiedTime = stats.mtime;

        // 비교
        if (remoteModifiedTime <= localModifiedTime) {
          console.log(` ${file.name} 은 변경되지 않았습니다. 다운로드 생략.`);
          shouldDownload = false;
        }
      }

      if (!shouldDownload) continue;

      console.log(`⬇ ${file.name} 다운로드 중...`);
      const dest = fs.createWriteStream(filePath);

      await new Promise((resolve, reject) => {
        drive.files
          .get({ fileId: file.id, alt: 'media' }, { responseType: 'stream' })
          .then((response) => {
            response.data
              .on('end', () => {
                console.log(` ${file.name} 다운로드 완료.`);
                resolve();
              })
              .on('error', (err) => {
                console.error(` ${file.name} 다운로드 실패:`, err);
                reject(err);
              })
              .pipe(dest);
          })
          .catch(reject);
      });
    }

    console.log('모든 번역 파일 다운로드 완료!');
  } catch (error) {
    console.error('Google Drive API 호출 중 오류 발생:', error.message);
    console.error('API 키 권한 또는 드라이브 폴더 ID를 확인해주세요.');
    process.exit(1);
  }
}

//스크립트 실행 (함수 호출)
downloadLocales();
