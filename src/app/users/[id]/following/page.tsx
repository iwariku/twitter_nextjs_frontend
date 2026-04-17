import PageTitle from '@/components/layouts/PageTitle';
import { getFollowings } from '@/features/user/api/getUser';
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
          <Link
            href={`/users/${user.id}`}
            key={user.id}
            className={
              'block p-4 transition hover:bg-gray-50/50 cursor-pointer'
            }
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                className={"font-bold hover:underline text-black  'text-[15px]"}
              >
                User ID: {user.id}
              </span>
            </div>

            <p
              className={
                'whitespace-pre-wrap text-gray-900 text-lg leading-relaxed'
              }
            ></p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default FollowingPage;
