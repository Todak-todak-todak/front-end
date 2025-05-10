import { translateGoogle } from './translateGoogle';
import { getGoogleLang } from './getGoogleLang';

export async function translateResponse(data: any): Promise<any> {
  const langCode = localStorage.getItem('lang') || 'ko';
  if (langCode === 'ko') return data;

  const targetLang = getGoogleLang(langCode);

  const deepTranslate = async (obj: any): Promise<any> => {
    if (typeof obj === 'string') {
      return await translateGoogle(obj, targetLang);
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
