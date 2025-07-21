import { useQuery, useMutation } from '@tanstack/react-query';
import { userService } from './user.service';
import { useNavigate } from 'react-router-dom';

// 추가 정보 기입
export const useCompleteUserProfile = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: userService.completeUserProfile,
    onSuccess: () => {
      navigate('/home');
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

// 내 정보 불러오기
export const useGetUserProfile = () => {
  return useQuery({
    queryKey: ['userProfile'],
    queryFn: userService.fetchUserProfile,
  });
};

// 내 정보 수정하기
export const useEditUserProfile = () => {
  return useMutation({
    mutationFn: userService.updateUserProfile,
  });
};
