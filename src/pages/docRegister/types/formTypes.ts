export interface ConsentInfo {
  personalAgreement: boolean;
  agencyAgreement: boolean;
}

export interface WorkerInfo {
  name: string;
  ssn: string;
  address: string;
  phone: string;
  gender: '남' | '여';
  employmentType: string;
}

export interface BusinessInfo {
  businessNumber: string;
  address: string;
  phone: string;
  name: string;
  businessName: string;
}

export interface AccidentInfo {
  type: string;
  date: string;
  details: string;
}

export interface TreatmentInfo {
  bodyPart: string;
  hospital: string;
  category: '입원' | '통원';
}

export interface CustomFormData {
  consent: ConsentInfo;
  workerInfo: WorkerInfo;
  businessInfo: BusinessInfo;
  accidentInfo: AccidentInfo;
  treatmentInfo: TreatmentInfo;
}
