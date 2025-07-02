import AuthProvider from "@/lib/AuthProvider";
import { NavigationBar } from "@/widgets/navigation-bar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <div className="w-full h-full">
        <NavigationBar />
        <div className="w-full h-full mt-[80px]">{children}</div>
      </div>
    </AuthProvider>
  );
}
