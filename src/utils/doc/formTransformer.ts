import { CustomFormData } from '@/types/formTypes';

export const transPayload = (formData: CustomFormData) => {
  const payload = {
    docType: formData.workerInfo.employmentType,
    docCompanyNm: formData.businessInfo.name,
    docCompanyAddress: formData.businessInfo.address,
    docCompanyPhoneNm: formData.businessInfo.phone,
    docOwnerName: formData.businessInfo.name,
    docBusinessName: formData.businessInfo.businessName,
    disaster: formData.accidentInfo.type,
    docDisasterDate: formData.accidentInfo.date,
    docReason: formData.accidentInfo.details,
    docInjury: formData.treatmentInfo.bodyPart,
    docHospital: formData.treatmentInfo.hospital,
    therapy: formData.treatmentInfo.category,
  };
  return payload;
};
