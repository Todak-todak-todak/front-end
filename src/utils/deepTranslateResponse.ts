import { translateText } from './translateText';

const deepTranslate = async (obj: any, targetLang: string): Promise<any> => {
  if (typeof obj === 'string') {
    return translateText(obj, targetLang);
  }

  if (Array.isArray(obj)) {
    return Promise.all(obj.map((item) => deepTranslate(item, targetLang)));
  }

  if (typeof obj === 'object' && obj !== null) {
    const translated: Record<string, any> = {};
    for (const key in obj) {
      translated[key] = await deepTranslate(obj[key], targetLang);
    }
    return translated;
  }

  return obj;
};

export const deepTranslateResponse = async (
  responseData: any
): Promise<any> => {
  const userLang = localStorage.getItem('lang') || 'ko'; // 기본 언어 설정
  if (userLang === 'ko') return responseData; // 한국어는 번역 생략

  return await deepTranslate(responseData, userLang);
};
