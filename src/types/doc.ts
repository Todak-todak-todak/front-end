export interface DocRegisterParams {
  docType: string;
  docCompanyNm: string;
  docCompanyAddress: string;
  docCompanyPhoneNm: string;
  docOwnerName: string;
  docBusinessName: string;
  disaster: string;
  docDisasterDate: string;
  docReason: string;
  docInjury: string;
  docHospital: string;
  therapy: string;
}

//산재 리스트 타입
interface DocItem {
  docPk: number;
  disaster: string;
  docDisasterDate: string;
  docWhether: boolean;
}

export interface DocListResponse {
  data: DocItem[];
  error: string;
}

//산재 처리여부 타입
interface DocumentStatus {
  docPk: number;
  docType: string;
  docCompanyNm: string;
  docCompanyAddress: string;
  docCompanyPhoneNm: string;
  docOwnerName: string;
  docBusinessName: string;
  disaster: string;
  docDisasterDate: string;
  docReason: string;
  docInjury: string;
  docHospital: string;
  therapy: string;
  docWhether: boolean;
  userName: string;
  userRegisterNm: string;
  userGender: string;
  userLanguage: string;
  userAddress: string;
}

export interface DocumentStatusResponse {
  data: DocumentStatus;
  error: string;
}
