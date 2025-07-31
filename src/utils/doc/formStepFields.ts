import { FieldPath } from 'react-hook-form';
import { CustomFormData } from '@/types/formTypes';

export const getFormStepFields = (
  step: number
): FieldPath<CustomFormData>[] => {
  switch (step) {
    case 0:
      return ['consent.personalAgreement', 'consent.agencyAgreement'];
    case 1:
      return [
        'workerInfo.name',
        'workerInfo.ssn',
        'workerInfo.address',
        'workerInfo.phone',
        'workerInfo.gender',
        'workerInfo.employmentType',
      ];
    case 2:
      return [
        'businessInfo.businessNumber',
        'businessInfo.address',
        'businessInfo.phone',
        'businessInfo.name',
        'businessInfo.businessName',
      ];
    case 3:
      return ['accidentInfo.type', 'accidentInfo.date', 'accidentInfo.details'];
    case 4:
      return [
        'treatmentInfo.bodyPart',
        'treatmentInfo.hospital',
        'treatmentInfo.category',
      ];
    default:
      return [];
  }
};
