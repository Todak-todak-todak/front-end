import api from './api';

export interface ResultRequestBody {
  accidentType: string;
  averageSalary: number;
  disabilityType?: string;
  severeType?: string;
  familyType?: string;
}

export interface SaveResultBody {
  chatResultId: number;
  calculatorId: number;
}

export const getResult = async (chatResultId: number) => {
  // 분석결과 초기 페이지 api
  const response = await api.get(`/chat/${chatResultId}`);
  return response.data;
};

export const getDetailResult = async (reportId: number) => {
  const response = await api.get(`report/detail/${reportId}`);
  console.log(response.data);
  return response.data;
};

export const getAddress = async () => {
  // 유저 주소만 불러오기 api
  const response = await api.get('/user/address');
  return response.data;
};

export const postResult = async (body: ResultRequestBody) => {
  const response = await api.post('/calculator/new', body);
  return response.data;
};

//분석 결과 저장
export const saveResult = async (body: SaveResultBody) => {
  const response = await api.post('/report/save', body);
  console.log(response.data);
  return response.data;
};
