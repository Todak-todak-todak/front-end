import { Gender } from '@/constants/gender';

export interface CompleteUserProfilePayload {
  userName: string;
  userRegisterNm: string;
  userPhoneNm: string;
  userGender: Gender;
  userLanguage: string;
  userAddress: string;
  industryName: string;
}

export interface UserProfile {
  userPk: string;
  userName: string;
  userRegisterNm: string;
  userPhoneNm: string;
  userGender: Gender;
  userLanguage: string;
  userAddress: string;
  industryName: string;
}

export interface GetUserProfileResponse {
  data: UserProfile;
  error: string | null;
}
