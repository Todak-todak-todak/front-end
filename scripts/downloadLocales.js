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
        '로컬 service-account-key.json 파일에서 키를 성공적으로 로드했습니다.'
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
} else {
  // 환경 변수에서 읽어오는 로직도 고려할 수 있지만, 현재 코드에서는 service-account-key.json만 처리
  console.error(
    '오류: 프로젝트 루트에 service-account-key.json 파일을 찾을 수 없습니다. Google Drive 연동을 위해 필요합니다.'
  );
  process.exit(1);
}

const GOOGLE_DRIVE_FOLDER_ID = '1bSB1PZlxMpFEUfqMej3TgECNiyG1eEH5';
const LOCAL_LOCALES_DIR = path.join(process.cwd(), 'src', 'i18n', 'locales');

// 재시도 관련 설정
const MAX_RETRIES = 3; // 최대 재시도 횟수
const INITIAL_RETRY_DELAY_MS = 1000; // 초기 재시도 지연 시간 (1초)

/**
 * 지정된 시간 동안 대기하는 함수
 * @param {number} ms - 대기할 시간 (밀리초)
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function downloadLocales() {
  console.log('Google Drive에서 번역 파일 다운로드를 시작합니다...');

  // 1. Google Drive API 인증 (서비스 계정 키 사용)
  let auth;
  let retryCount = 0;
  let authSuccess = false;

  while (retryCount < MAX_RETRIES && !authSuccess) {
    console.log(`인증 과정 시작... (시도: ${retryCount + 1}/${MAX_RETRIES})`);
    try {
      auth = new google.auth.JWT({
        email: CLIENT_EMAIL,
        key: PRIVATE_KEY.trim(), // trim()을 사용하여 혹시 모를 공백 제거
        scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      });

      await auth.authorize();
      console.log('인증 완료.');
      authSuccess = true;
    } catch (authError) {
      console.error(
        `인증 중 오류 발생 (시도 ${retryCount + 1}):`,
        authError.message
      );
      if (authError.message.includes('No key or keyFile set')) {
        console.error(
          '클라이언트 이메일 또는 개인 키의 유효성을 확인해주세요. Google Cloud Console에서 키를 재생성해 보세요.'
        );
        // 유효하지 않은 키는 재시도해도 소용없으므로 바로 종료하거나 더 명확한 경고 후 종료
        process.exit(1); // 이 경우엔 재시도 무의미, 명확히 잘못된 키이므로 종료
      }
      retryCount++;
      if (retryCount < MAX_RETRIES) {
        const delay = INITIAL_RETRY_DELAY_MS * Math.pow(2, retryCount - 1); // 지수 백오프
        console.log(`재시도 ${retryCount}회차, ${delay / 1000}초 후 재시도...`);
        await sleep(delay);
      }
    }
  }

  if (!authSuccess) {
    console.error(
      '경고: Google Drive 인증에 최종적으로 실패했습니다. 기존 로컬 번역 파일을 사용합니다.'
    );
    // 인증 실패 시, 스크립트가 오류 코드(1)로 종료되지 않고 정상 종료(0)되도록 변경
    return; // 다운로드 프로세스 중단
  }

  const drive = google.drive({ version: 'v3', auth });

  // 2. 로컬 locales 디렉토리 생성 (없으면)
  if (!fs.existsSync(LOCAL_LOCALES_DIR)) {
    fs.mkdirSync(LOCAL_LOCALES_DIR, { recursive: true });
    console.log(`로컬 폴더 생성: ${LOCAL_LOCALES_DIR}`);
  }

  // 3. Google Drive 폴더 내 JSON 파일 목록 가져오기 및 다운로드
  retryCount = 0;
  let downloadSuccess = false;

  while (retryCount < MAX_RETRIES && !downloadSuccess) {
    try {
      console.log(
        `Google Drive에서 파일 목록 가져오기 시도... (시도: ${
          retryCount + 1
        }/${MAX_RETRIES})`
      );
      const res = await drive.files.list({
        q: `'${GOOGLE_DRIVE_FOLDER_ID}' in parents and mimeType='application/json'`,
        fields: 'files(id, name, modifiedTime)', // modifiedTime도 함께 가져옴
      });
      console.log('Google Drive에서 파일 목록 가져오기 성공.');

      const files = res.data.files;
      if (files.length === 0) {
        console.log('지정된 폴더에 JSON 파일이 없습니다.');
        downloadSuccess = true; // 파일이 없는 것도 성공으로 간주 (더 이상 다운로드할 것이 없으므로)
        break;
      }

      console.log(`다운로드할 JSON 파일 ${files.length}개 발견.`);

      // 각 JSON 파일 다운로드
      for (const file of files) {
        const filePath = path.join(LOCAL_LOCALES_DIR, file.name);

        const remoteModifiedTime = new Date(file.modifiedTime); // 이미 목록에서 가져옴
        let shouldDownload = true;

        // 로컬 파일 존재 여부 확인
        if (fs.existsSync(filePath)) {
          const stats = fs.statSync(filePath);
          const localModifiedTime = stats.mtime;

          // 비교
          if (remoteModifiedTime <= localModifiedTime) {
            console.log(`${file.name} 은 변경되지 않았습니다. 다운로드 생략.`);
            shouldDownload = false;
          }
        }

        if (!shouldDownload) continue;

        console.log(`${file.name} 다운로드 중...`);
        const dest = fs.createWriteStream(filePath);

        await new Promise((resolve, reject) => {
          drive.files
            .get({ fileId: file.id, alt: 'media' }, { responseType: 'stream' })
            .then((response) => {
              response.data
                .on('end', () => {
                  console.log(`${file.name} 다운로드 완료.`);
                  resolve();
                })
                .on('error', (err) => {
                  console.error(`${file.name} 다운로드 실패:`, err);
                  reject(err);
                })
                .pipe(dest);
            })
            .catch(reject);
        });
      }
      console.log('모든 번역 파일 다운로드 완료!');
      downloadSuccess = true; // 모든 파일 다운로드 성공
    } catch (error) {
      console.error(
        `Google Drive API 호출 중 오류 발생 (시도 ${retryCount + 1}):`,
        error.message
      );
      console.error('API 키 권한 또는 드라이브 폴더 ID를 확인해주세요.');

      retryCount++;
      if (retryCount < MAX_RETRIES) {
        const delay = INITIAL_RETRY_DELAY_MS * Math.pow(2, retryCount - 1); // 지수 백오프
        console.log(`재시도 ${retryCount}회차, ${delay / 1000}초 후 재시도...`);
        await sleep(delay);
      }
    }
  }

  if (!downloadSuccess) {
    console.error(
      '치명적 경고: 번역 파일 다운로드에 최종적으로 실패했습니다. 기존 로컬 파일을 사용합니다.'
    );
    // 모든 재시도 후에도 실패하면 스크립트가 오류 코드(1)로 종료되지 않고 정상 종료(0)되도록 변경
  }
}

// 스크립트 실행 (함수 호출)
downloadLocales();
