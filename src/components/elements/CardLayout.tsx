import Link from 'next/link';

type PropsType = {
  children: React.ReactNode;
  href?: string;
};

export const CardLayout = ({ children, href }: PropsType) => {
  return (
    <div className="relative border-b border-gray-100 transition hover:bg-gray-50/50 group">
      {href && (
        <Link
          href={href}
          className="absolute inset-0 z-0 w-full h-full"
          aria-hidden="true"
        />
      )}

      <div className="relative p-4 z-10 pointer-events-none">{children}</div>
    </div>
  );
};
