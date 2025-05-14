const GOOGLE_TRANSLATE_URL =
  'https://translation.googleapis.com/language/translate/v2';

export const translateText = async (
  text: string,
  targetLang: string
): Promise<string> => {
  try {
    const response = await fetch(
      `${GOOGLE_TRANSLATE_URL}?key=${
        import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY
      }`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: text,
          target: targetLang,
          format: 'text',
        }),
      }
    );

    const data = await response.json();

    return data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Google Translate API 오류:', error);
    return text;
  }
};
