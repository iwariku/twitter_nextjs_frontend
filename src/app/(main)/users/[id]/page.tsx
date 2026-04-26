import DataList from '@/components/elements/DataList';
import PageTitle from '@/components/layouts/PageTitle';
import PaginationFooter from '@/components/layouts/PaginationFooter';
import { getTweetsByUserId } from '@/features/post/api/getTweets';
import TweetCard from '@/features/post/components/TweetCard';
import { getUser } from '@/features/user/api/user';
import FollowButton from '@/features/user/components/FollowButton';
import { PAGINATION_LIMIT, parseOffset } from '@/utils/pagination';
import Link from 'next/link';

type PropsType = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ offset?: string }>;
};

const LIMIT = PAGINATION_LIMIT;

const UserProfilePage = async ({ params, searchParams }: PropsType) => {
  const { id: userId } = await params;
  const query = await searchParams;

  const currentOffset = parseOffset(query);

  const user = await getUser(userId);
  const { tweets: tweetsByUser, count } = await getTweetsByUserId(
    userId,
    LIMIT,
    currentOffset,
  );

  return (
    <>
      <PageTitle title="ユーザー詳細" />

      <div className="px-4 py-3 border-b border-gray-100">
        <div className="flex justify-between items-start mb-4">
          {/* ユーザー名 */}
          <div>
            <h2 className="text-xl font-bold text-black leading-tight">
              {user.user_name}
            </h2>
          </div>

          <FollowButton
            userId={userId}
            currentFollowStatus={user.is_followed}
          />
        </div>

        {/* 自己紹介 */}
        <div className="mb-3">
          <p className="text-black whitespace-pre-wrap">
            {user.self_introduction}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3 text-gray-500 text-sm">
          {user.date_of_birth && (
            <div className="flex items-center gap-1">
              <span>
                {new Date(user.date_of_birth).toLocaleDateString('ja-JP')}
              </span>
            </div>
          )}
        </div>

        <div className="flex gap-4 text-sm">
          <Link
            href={`/users/${userId}/following`}
            className="hover:underline flex gap-1"
          >
            <span className="font-bold text-black">{user.following_count}</span>
            <span className="text-gray-500">フォロー中</span>
          </Link>

          <Link
            href={`/users/${userId}/follower`}
            className="hover:underline flex gap-1"
          >
            <span className="font-bold text-black">{user.follower_count}</span>
            <span className="text-gray-500">フォロワー</span>
          </Link>
        </div>
      </div>

      <DataList items={tweetsByUser}>
        {(item) => <TweetCard tweet={item} />}
      </DataList>

      <PaginationFooter
        targetPath={`/users/${userId}`}
        offset={currentOffset}
        count={count}
      />
    </>
  );
};

export default UserProfilePage;
