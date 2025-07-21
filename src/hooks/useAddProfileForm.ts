import { useForm } from 'react-hook-form';
import { useCompleteUserProfile } from '@/apis/user/user.query';
import { mapFormToPayload } from '@/utils/mapFormToPayload';
import { AddProfileFormValues } from '@/types/formTypes';

export const useAddProfileForm = () => {
  const methods = useForm<AddProfileFormValues>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      registerNumber: '',
      phone: '',
      address: '',
      gender: null,
      industry: null,
    },
  });

  const { mutate, isPending } = useCompleteUserProfile();

  const onSubmit = (data: AddProfileFormValues) => {
    const payload = mapFormToPayload(data);
    mutate(payload);
  };

  return { methods, isPending, onSubmit };
};
