import { getUser } from '@/features/user/api/getUser';
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
      <FollowButton userId={id} initialIsFollowed={user.is_followed} />
      <Link href={`/users/${id}/following`}>
        フォロー中 {user.following_count}
      </Link>
      <Link href={`/users/${id}/follower`}>
        フォロワー {user.follower_count}
      </Link>
    </div>
  );
};

export default UserProfilePage;
