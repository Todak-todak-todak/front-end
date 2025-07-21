import { useMutation } from '@tanstack/react-query';
import { authService } from './auth.service';

export const useLogout = () => {
  return useMutation({
    mutationFn: authService.logoutUser,
  });
};
