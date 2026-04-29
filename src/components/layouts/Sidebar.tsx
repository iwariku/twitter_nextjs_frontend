import { getLoggedUserId } from '@/features/user/api/user';
import Link from 'next/link';

const Sidebar = async () => {
  const { loggedUserId } = await getLoggedUserId();

  const menuItems = [
    { name: 'ホーム', href: '/home' },
    { name: 'チャット', href: '/dm-groups' },
    { name: 'ブックマーク', href: '/bookmarks' },
    { name: 'プロフィール', href: `/users/${loggedUserId}` },
    { name: '投稿', href: '/post' },
    { name: '退会', href: '/users/unsubscribe' },
  ];

  return (
    <aside className="w-20 xl:w-64 sticky top-0 h-screen flex flex-col p-2 border-r border-gray-100">
      <nav className="space-y-1 mt-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-4 p-3 text-xl hover:bg-gray-100 rounded-full transition w-fit xl:w-full text-black font-medium"
          >
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
