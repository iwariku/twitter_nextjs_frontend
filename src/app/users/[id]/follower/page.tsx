import PageTitle from '@/components/layouts/PageTitle';
import Pagination from '@/components/layouts/Pagination';
import { getFollowers } from '@/features/user/api/user';
import FollowButton from '@/features/user/components/FollowButton';
import { User } from '@/features/user/types/type';
import Link from 'next/link';

type PropsType = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ offset?: string }>;
};

const FollowerPage = async ({ params, searchParams }: PropsType) => {
  const { id } = await params;

  // ページネーション
  const LIMIT = 10;
  const { offset } = await searchParams;
  const parsedOffset = Number(offset) || 0;
  // offsetは0であることを証明するため。負の値になることはない
  const currentOffset = Math.max(0, parsedOffset);

  // follow_listだと抽象的な変数名になるため、コンポーネント名と合わせて具体性を持たせる変数名を採用
  const { follow_list: followerList, count } = await getFollowers(
    id,
    LIMIT,
    currentOffset,
  );

  return (
    <>
      <PageTitle title="フォロワー一覧" />

      <div className="divide-y divide-gray-100">
        {followerList.map((user: User) => (
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

      <Pagination
        targetPath={`/users/${id}/follower`}
        LIMIT={LIMIT}
        offset={currentOffset}
        count={count}
      />
    </>
  );
};

export default FollowerPage;
