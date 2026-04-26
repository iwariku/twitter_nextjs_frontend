import { CardLayout } from '@/components/elements/CardLayout';
import { User } from '../types/type';
import Link from 'next/link';
import FollowButton from './FollowButton';

type PropsType = {
  user: User;
};

const UserCard = ({ user }: PropsType) => {
  return (
    <CardLayout href={`/users/${user.id}`}>
      <div className="flex items-center justify-between gap-4 w-full">
        <div className="flex flex-col min-w-0">
          {' '}
          <div className="flex items-center gap-2">
            <Link
              href={`/users/${user.id}`}
              className="font-bold hover:underline text-black text-[15px] relative z-20 pointer-events-auto truncate"
            >
              User ID: {user.id}
            </Link>
          </div>
        </div>

        <div className="relative z-20 pointer-events-auto ">
          <FollowButton
            userId={user.id}
            currentFollowStatus={user.is_followed}
          />
        </div>
      </div>
    </CardLayout>
  );
};

export default UserCard;
