import ApiHelper from '@/api/client/api';
import { API_URL } from '@/api/constants/api.constants';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import Cookies from 'js-cookie';
import { useUserStore } from '@/entities/user/model/store';
import { useQueryClient } from '@tanstack/react-query';

export default function useWithDraw() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { setUser } = useUserStore();

  /** 회원 탈퇴 클릭 */
  const handleWithDrawClick = async () => {
    router.push('/');
    const res = await ApiHelper.delete(API_URL.AUTH.WITHDRAW);
    if (res.data.status === 200) {
      queryClient.removeQueries({ queryKey: ['my-info'] });
      queryClient.removeQueries({ queryKey: ['my-ranking'] });
      queryClient.removeQueries({ queryKey: ['my-review'] });

      setUser(null);
      localStorage.clear();

      Cookies.remove('refreshToken');
      Cookies.remove('accessToken');

      toast.success('회원 탈퇴가 완료되었습니다.');
      router.replace('/');
      // queryClient.invalidateQueries({ queryKey: ['my-info'] });
      // queryClient.invalidateQueries({ queryKey: ['my-ranking'] });
      // queryClient.invalidateQueries({ queryKey: ['my-review'] });
    } else {
      toast.error('회원 탈퇴에 실패했습니다. 잠시후 다시 시도해주세요.');
    }
  };

  return {
    handleWithDrawClick,
  };
}
