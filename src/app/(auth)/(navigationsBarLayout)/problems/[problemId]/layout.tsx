import TabsToggle from '@/features/discussions/disussions/ui/TabsToggle';

export default async function ProblemPageLayout({
  children,
  tabs,
  params,
}: Readonly<{
  children: React.ReactNode;
  tabs: React.ReactNode;
  params: Promise<{ problemId: string }>;
}>) {
  const problemId = (await params).problemId;

  return (
    <main className="flex pt-20 h-full">
      <menu className="flex-1 flex flex-col gap-[29px] pl-[81px] pr-[78px]">
        <TabsToggle problemId={problemId} />
        {tabs}
      </menu>
      <div className="flex-1 w-full h-full">{children}</div>
    </main>
  );
}
