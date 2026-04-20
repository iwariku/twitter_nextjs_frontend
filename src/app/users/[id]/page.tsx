import PageTitle from '@/components/layouts/PageTitle';
import PaginationFooter from '@/components/layouts/PaginationFooter';
import { getTweetsByUserId } from '@/features/post/api/getTweets';
import TweetList from '@/features/post/components/TweetList';
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

      <div>
        <FollowButton userId={userId} currentFollowStatus={user.is_followed} />
        <div>
          <Link
            href={`/users/${userId}/following`}
            className="hover:underline flex gap-1"
          >
            <span>フォロー中</span>
            <span>{user.following_count}</span>
          </Link>

          <Link
            href={`/users/${userId}/follower`}
            className="hover:underline flex gap-1"
          >
            <span>フォロワー</span>
            <span>{user.follower_count}</span>
          </Link>
        </div>
      </div>

      <TweetList tweets={tweetsByUser} />
      <PaginationFooter
        targetPath={`/users/${userId}`}
        offset={currentOffset}
        count={count}
      />
    </>
  );
};

export default UserProfilePage;
