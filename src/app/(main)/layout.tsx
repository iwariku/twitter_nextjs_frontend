import Sidebar from '@/components/layouts/Sidebar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen max-w-[1000px] mx-auto">
      <Sidebar />
      <main className="flex-1 flex flex-col border-r border-gray-100">
        {children}
      </main>
    </div>
  );
}
