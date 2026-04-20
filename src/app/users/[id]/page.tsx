import { getUser } from '@/features/user/api/user';
import FollowButton from '@/features/user/components/FollowButton';
import Link from 'next/link';

type PropsType = {
  params: Promise<{ id: string }>;
};

const UserProfilePage = async ({ params }: PropsType) => {
  const { id } = await params;

  const user = await getUser(id);

  return (
    <div>
      <FollowButton userId={id} currentFollowStatus={user.is_followed} />
      <div>
        <Link
          href={`/users/${id}/following`}
          className="hover:underline flex gap-1"
        >
          <span>フォロー中</span>
          <span>{user.following_count}</span>
        </Link>

        <Link
          href={`/users/${id}/follower`}
          className="hover:underline flex gap-1"
        >
          <span>フォロワー</span>
          <span>{user.follower_count}</span>
        </Link>
      </div>
    </div>
  );
};

export default UserProfilePage;
