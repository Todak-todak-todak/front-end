export function mapLangToKoreanLabel(code: string): string {
  switch (code) {
    case 'ko':
      return '한국어';
    case 'en':
      return '영어';
    case 'vi':
      return '베트남어';
    case 'zh':
    case 'zh-CN':
      return '중국어';
    default:
      return '한국어';
  }
}

export function mapIndustryLabelToKorean(label: string): string {
  const map: Record<string, string> = {
    // 영어
    Manufacturing: '제조업',
    Construction: '건설업',
    Etc: '기타',

    // 베트남어
    'Sản xuất': '제조업',
    'Xây dựng': '건설업',
    'Vân vân': '기타',

    // 중국어 등 추가할 수 있음
    制造业: '제조업',
    建筑业: '건설업',
    等等: '기타',
  };

  return map[label] || label;
}
