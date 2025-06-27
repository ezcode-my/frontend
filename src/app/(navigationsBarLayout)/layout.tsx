import { NavigationBar } from '@/widgets/navigation-bar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full">
      <NavigationBar />
      <div className="w-full h-full">{children}</div>
    </div>
  );
}
