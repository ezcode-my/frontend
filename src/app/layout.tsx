import './globals.css';
import QueryProvider from '@/lib/QueryProvider';
import { Toaster } from 'sonner';
import AuthProvider from '@/lib/AuthProvider';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { Metadata } from 'next';
import { headers } from 'next/headers';
import { detectDeviceType } from '@/shared/util/detectDeviceType';
import MobileBlockUI from '@/shared/ui/moblieBlockUI/MoblieBlockUI';
import ConditionalNavigationBar from '@/features/auth/ui/ConditionalNavigationBar';

export const metadata: Metadata = {
  title: {
    default: 'EZ-CODE - 코딩 테스트 플랫폼',
    template: '%s | EZ-CODE',
  },
  description: 'EZ-CODE 코딩 테스트 플랫폼',
  metadataBase: new URL('https://ezcode.my'),
  openGraph: {
    type: 'website',
    url: 'https://ezcode.my',
    title: 'EZ-CODE - 코딩 테스트 플랫폼',
    description: 'EZ-CODE - 코딩 테스트 플랫폼',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const ua = headersList.get('user-agent') ?? '';
  const device = detectDeviceType(ua);
  if (device === 'mobile')
    return (
      <html>
        <body>
          <MobileBlockUI />
        </body>
      </html>
    );
  const session = await getServerSession(authOptions);

  return (
    <html lang="ko">
      <body className="flex justify-center w-full h-full">
        <QueryProvider>
          <AuthProvider session={session}>
            <ConditionalNavigationBar>{children}</ConditionalNavigationBar>
            <Toaster />
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
