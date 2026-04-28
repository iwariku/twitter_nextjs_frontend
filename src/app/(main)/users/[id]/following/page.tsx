import DataList from '@/components/elements/DataList';
import PageTitle from '@/components/layouts/PageTitle';
import PaginationFooter from '@/components/layouts/PaginationFooter';
import { getFollowings } from '@/features/user/api/user';
import UserCard from '@/features/user/components/UserCard';
import { PAGINATION_LIMIT, parseOffset } from '@/utils/pagination';

type PropsType = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ offset?: string }>;
};

const LIMIT = PAGINATION_LIMIT;

const FollowingPage = async ({ params, searchParams }: PropsType) => {
  const { id } = await params;
  const query = await searchParams;

  const currentOffset = parseOffset(query);

  // follow_listだと抽象的な変数名になるため、コンポーネント名と合わせて具体性を持たせる別の変数名を定義
  const { follow_list: followingList, count } = await getFollowings(
    id,
    LIMIT,
    currentOffset,
  );

  return (
    <>
      <PageTitle title="フォロー一覧" />

      <DataList items={followingList}>
        {(item) => <UserCard user={item} />}
      </DataList>

      <PaginationFooter
        targetPath={`/users/${id}/following`}
        offset={currentOffset}
        count={count}
      />
    </>
  );
};

export default FollowingPage;
