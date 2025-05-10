const API_KEY = import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY;

export async function translateGoogle(
  text: string,
  targetLang: 'en' | 'vi' | 'zh-CN'
): Promise<string> {
  try {
    const response = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: text,
          source: 'ko',
          target: targetLang,
          format: 'text',
        }),
      }
    );

    const result = await response.json();

    return result.data.translations[0].translatedText;
  } catch (error) {
    console.error('Google 번역 실패:', error);
    return text;
  }
}
