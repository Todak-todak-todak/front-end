import { FormProvider } from 'react-hook-form';
import Header from '@/components/common/header/Header';
import Button from '@/components/common/button/Button';
import AddProfileForm from '@/components/feature/add/AddProfileForm';
import { useAddProfileForm } from '@/hooks/useAddProfileForm';
import { useTranslation } from 'react-i18next';
import { addProfileSchema } from '@/schemas/addProfileSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AddProfileFormValues } from '@/schemas/addProfileSchema';

const Add = () => {
  const { t } = useTranslation();
  const { isPending, onSubmit } = useAddProfileForm();
  const methods = useForm<AddProfileFormValues>({
    resolver: zodResolver(addProfileSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      registerNumber: '',
      phone: '',
      address: '',
      gender: undefined,
      industry: undefined,
    },
  });

  return (
    <div className="overflow-y-auto">
      <Header />
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="px-[30px] pb-[23px] flex flex-col justify-between"
        >
          <AddProfileForm />
          <div className="flex justify-center mt-8">
            <Button
              text={t('form.next')}
              disabled={!methods.formState.isValid || isPending}
              type="submit"
            />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Add;
