import DataList from '@/components/elements/DataList';
import PageTitle from '@/components/layouts/PageTitle';
import Pagination from '@/components/layouts/PaginationFooter';
import { getFollowers } from '@/features/user/api/user';
import UserCard from '@/features/user/components/UserCard';
import { PAGINATION_LIMIT, parseOffset } from '@/utils/pagination';

type PropsType = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ offset?: string }>;
};

const LIMIT = PAGINATION_LIMIT;

const FollowerPage = async ({ params, searchParams }: PropsType) => {
  const { id } = await params;
  const query = await searchParams;

  const currentOffset = parseOffset(query);

  // follow_listだと抽象的な変数名になるため、コンポーネント名と合わせて具体性を持たせる別の変数名を定義
  const { follow_list: followerList, count } = await getFollowers(
    id,
    LIMIT,
    currentOffset,
  );

  return (
    <>
      <PageTitle title="フォロワー一覧" />

      <DataList items={followerList}>
        {(item) => <UserCard user={item} />}
      </DataList>

      <Pagination
        targetPath={`/users/${id}/follower`}
        offset={currentOffset}
        count={count}
      />
    </>
  );
};

export default FollowerPage;
