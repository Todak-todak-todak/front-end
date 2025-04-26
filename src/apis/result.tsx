import api from './api';

export interface ResultRequestBody {
  accidentType: string;
  averageSalary: number;
  disabilityType?: string;
  severeType?: string;
  familyNumber?: string;
}

export interface SaveResultRequestBody {
  chatResultId: number;
  calculatorId: number;
}

export const getResult = async () => {
  // 분석결과 초기 페이지 api
  const response = await api.get('/chat/3'); //나중에 {chatResultId} 들어가야함. 임시 매핑
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

export const saveResult = async (body: SaveResultRequestBody) => {
  const response = await api.post('/report/save', body);
  return response.data;
};
