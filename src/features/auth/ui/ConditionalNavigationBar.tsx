'use client';
import NavigationBar from '@/widgets/NavigationBar/ui';
import { usePathname } from 'next/navigation';

export default function ConditionalNavigationBar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin') || false;
  const isEmailVerifyRoute = pathname?.startsWith('/email-verify') || false;

  if (isAdminRoute || isEmailVerifyRoute) {
    return children;
  }
  return (
    <div className="w-full h-full">
      <NavigationBar />
      <div className="w-full h-[calc(100vh-72px)] px-15">{children}</div>
    </div>
  );
}
