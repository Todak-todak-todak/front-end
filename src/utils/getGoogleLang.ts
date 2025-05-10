export function getGoogleLang(code: string): 'en' | 'vi' | 'zh-CN' {
  switch (code) {
    case 'en':
      return 'en';
    case 'vi':
      return 'vi';
    case 'zh':
    case 'zh-CN':
      return 'zh-CN';
    default:
      return 'ko';
  }
}
