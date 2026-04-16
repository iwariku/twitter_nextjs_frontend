import { getUser } from '@/features/user/api/getUser';
import FollowButton from '@/features/user/components/FollowButton';

type PropsType = {
  params: Promise<{ id: string }>;
};

const UserProfilePage = async ({ params }: PropsType) => {
  const { id } = await params;

  const user = await getUser(id);

  return (
    <div>
      <FollowButton userId={id} initialIsFollowed={user.is_followed} />
      <p>フォロー中 {user.following_count}</p>
      <p>フォロワー {user.follower_count}</p>
    </div>
  );
};

export default UserProfilePage;
