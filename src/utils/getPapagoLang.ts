export function getPapagoLang(userLang: string): 'en' | 'vi' | 'zh-CN' {
  switch (userLang) {
    case 'en':
      return 'en';
    case 'vi':
      return 'vi';
    case 'zh':
    case 'zh-CN':
      return 'zh-CN';
    default:
      return 'en';
  }
}
