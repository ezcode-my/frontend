'use client';
import { cn } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function EmailVerifyPage() {
  const searchParmas = useSearchParams();
  const router = useRouter();

  const status = searchParmas.get('status');
  const errorMessage = searchParmas.get('message');
  const titleText = status === 'success' ? '성공' : '실패';

  const contentText =
    status === 'success'
      ? '잠시후 홈페이지로 이동합니다.'
      : errorMessage
        ? errorMessage
        : '알 수 없는 오류가 발생했습니다, 다시 시도해 주세요.';

  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        router.replace('/');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-4">
      <h1 className={cn('text-2xl font-bold mb-4', status === 'success' && 'text-secondary')}>
        이메일 인증에 {titleText}했습니다.
      </h1>
      <p className={cn(status === 'success' && 'text-secondary')}>{contentText}</p>
    </div>
  );
}
