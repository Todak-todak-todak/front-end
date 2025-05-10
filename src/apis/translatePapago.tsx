import axios from 'axios';

const CLIENT_ID = import.meta.env.VITE_PAPAGO_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_PAPAGO_CLIENT_SECRET;

export async function translatePapago(
  text: string,
  targetLang: 'en' | 'vi' | 'zh-CN'
) {
  try {
    const res = await axios.post(
      'https://naveropenapi.apigw.ntruss.com/nmt/v1/translation',
      new URLSearchParams({
        source: 'ko',
        target: targetLang,
        text,
      }),
      {
        headers: {
          'X-NCP-APIGW-API-KEY-ID': CLIENT_ID,
          'X-NCP-APIGW-API-KEY': CLIENT_SECRET,
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
      }
    );
    return res.data.message.result.translatedText;
  } catch (error) {
    console.error('Papago 번역 실패:', error);
    return text;
  }
}
