import { DocItem } from './InfoList';

export const jehaejaInfo: DocItem[] = [
  { label: 'docDetail.label.name', value: '김성헌' },
  { label: 'docDetail.label.id', value: '111111-111111' },
  { label: 'docDetail.label.phone', value: '010-1111-1111' },
  { label: 'docDetail.label.gender', value: '남자' },
  { label: 'docDetail.label.workerType', value: '근로자' },
  {
    label: 'docDetail.label.address',
    value: (
      <>
        서울특별시 광진구 <br /> 화양동 10-29
      </>
    ),
  },
];

export const companyInfo: DocItem[] = [
  { label: 'docDetail.label.companyId', value: '김성헌' },
  { label: 'docDetail.label.address', value: '11111-111111' },
  { label: 'docDetail.label.phone', value: '010-1111-1111' },
  { label: 'docDetail.label.ceo', value: '남자' },
  { label: 'docDetail.label.companyName', value: '근로자' },
  {
    label: 'docDetail.label.address',
    value: (
      <>
        서울특별시 광진구 <br /> 화양동 10-29
      </>
    ),
  },
];

export const injuryInfo: DocItem[] = [
  { label: 'docDetail.label.type', value: '업무상 사고' },
  { label: 'docDetail.label.date', value: '25.02.21' },
  { label: 'docDetail.label.part', value: '왼쪽 손가락' },
  { label: 'docDetail.label.hospital', value: '서울병원' },
  { label: 'docDetail.label.treatmentType', value: '통원' },
  {
    label: 'docDetail.label.detail',
    value: (
      <>
        서울특별시 광진구 <br /> 화양동 10-29
      </>
    ),
  },
];
