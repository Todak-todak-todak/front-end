export interface CompleteUserProfilePayload {
  userName: string;
  userRegisterNm: string;
  userPhoneNm: string;
  userGender: 'MALE' | 'FEMALE';
  userLanguage: string;
  userAddress: string;
  industryName: string;
}

export interface UserProfile {
  userPk: string;
  userName: string;
  userRegisterNm: string;
  userPhoneNm: string;
  userGender: 'MALE' | 'FEMALE';
  userLanguage: string;
  userAddress: string;
  industryName: string;
}

export interface GetUserProfileResponse {
  data: UserProfile;
  error: string | null;
}
