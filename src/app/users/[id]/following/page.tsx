import PageTitle from '@/components/layouts/PageTitle';
import { getFollowings } from '@/features/user/api/user';
import FollowButton from '@/features/user/components/FollowButton';
import { User } from '@/features/user/types/type';
import Link from 'next/link';

type PropsType = {
  params: Promise<{ id: string }>;
};

const FollowingPage = async ({ params }: PropsType) => {
  const { id } = await params;

  // follow_listだと抽象的な変数名になるため、コンポーネント名と合わせて具体性を持たせる変数名を採用
  const { follow_list: followingList } = await getFollowings(id);

  return (
    <>
      <PageTitle title="フォロー一覧" />

      <div className="divide-y divide-gray-100">
        {followingList.map((user: User) => (
          <div // 1. Link ではなく div で囲む（ホバー範囲を作るため）
            key={user.id}
            className="flex items-center justify-between p-4 transition hover:bg-gray-50/50 group relative"
          >
            {/* 2. ユーザー情報部分を Link にする（左側） */}
            <Link href={`/users/${user.id}`} className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-bold hover:underline text-black text-[15px]">
                  User ID: {user.id}
                </span>
              </div>
            </Link>

            <div className="relative z-10">
              <FollowButton
                userId={user.id}
                currentFollowStatus={user.is_followed}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FollowingPage;
