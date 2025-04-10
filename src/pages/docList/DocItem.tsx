import { DocItem } from './InfoList';

export const jehaejaInfo: DocItem[] = [
  { label: '이름', value: '김성헌' },
  { label: '외국인등록번호', value: '111111-111111' },
  { label: '연락처', value: '010-1111-1111' },
  { label: '성별', value: '남자' },
  { label: '근로자유형', value: '근로자' },
  {
    label: '거주지',
    value: (
      <>
        서울특별시 광진구 <br /> 화양동 10-29
      </>
    ),
  },
];

export const companyInfo: DocItem[] = [
  { label: '사업장관리번호', value: '김성헌' },
  { label: '주소', value: '11111-111111' },
  { label: '연락처', value: '010-1111-1111' },
  { label: '사업주명', value: '남자' },
  { label: '사업장명', value: '근로자' },
  {
    label: '주소',
    value: (
      <>
        서울특별시 광진구 <br /> 화양동 10-29
      </>
    ),
  },
];

export const injuryInfo: DocItem[] = [
  { label: '유형', value: '업무상 사고' },
  { label: '발생일시', value: '25.02.21' },
  { label: '다친 부위', value: '010-1111-1111' },
  { label: '의료기관', value: '서울병원' },
  { label: '치료 구분', value: '통원' },
  {
    label: '재해발생 경위',
    value: (
      <>
        서울특별시 광진구 <br /> 화양동 10-29
      </>
    ),
  },
];
