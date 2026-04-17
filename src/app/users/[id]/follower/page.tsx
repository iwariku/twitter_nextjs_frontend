import PageTitle from '@/components/layouts/PageTitle';
import { getFollowers } from '@/features/user/api/getUser';
import { User } from '@/features/user/types/type';
import Link from 'next/link';

type PropsType = {
  params: Promise<{ id: string }>;
};

const FollowerPage = async ({ params }: PropsType) => {
  const { id } = await params;

  const { follow_list } = await getFollowers(id);

  return (
    <>
      <PageTitle title="フォロワー一覧" />

      <div className="divide-y divide-gray-100">
        {follow_list.map((user: User) => (
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

export default FollowerPage;
