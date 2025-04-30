export interface Education {
  educationPk: number;
  educationName: string;
  educationUrl: string;
}

export interface Warning {
  warningPk: number;
  warningName: string;
  warningDescription: string;
}

export interface Hospitals {
  hospitalName: string;
  hospitalAddress: string;
}

export interface Accidents {
  accidentPk: number;
  accidentName: string;
  accidentProbability: number;
}

export interface Injuries {
  injuryPk: number;
  injuryName: string;
  injuryProbability: number;
}

export interface InfoDetailData {
  industry: string;
  educations: Education[];
  warnings: Warning[];
  hospitals: Hospitals[];
  accidents: Accidents[];
  injuries: Injuries[];
}

export interface CounselProp {
  counselorPk: number;
  counselorName: string;
  counselorIntrodution: string;
}

export interface DeclarationProp {
  declarationPk: number;
  declarationName: string;
  declarationPhoneNm: string;
}
