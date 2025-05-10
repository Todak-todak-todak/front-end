// utils/translateResponse.ts
import { translatePapago } from '@/apis/translatePapago';
import { getPapagoLang } from './getPapagoLang';

export async function translateResponse(data: any): Promise<any> {
  const lang = localStorage.getItem('lang') || 'ko';
  if (lang === 'ko') return data; // 한국어는 번역 안 함

  const targetLang = getPapagoLang(lang);

  const deepTranslate = async (obj: any): Promise<any> => {
    if (typeof obj === 'string') {
      return await translatePapago(obj, targetLang);
    }

    if (Array.isArray(obj)) {
      return await Promise.all(obj.map(deepTranslate));
    }

    if (typeof obj === 'object' && obj !== null) {
      const entries = await Promise.all(
        Object.entries(obj).map(async ([key, value]) => [
          key,
          await deepTranslate(value),
        ])
      );
      return Object.fromEntries(entries);
    }

    return obj;
  };

  return await deepTranslate(data);
}
