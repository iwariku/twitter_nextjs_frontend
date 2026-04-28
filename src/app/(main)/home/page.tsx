import { getTweets } from '../../../features/post/api/getTweets';
import Pagination from '@/components/layouts/PaginationFooter';
import PageTitle from '@/components/layouts/PageTitle';
import { PAGINATION_LIMIT, parseOffset } from '@/utils/pagination';
import DataList from '@/components/elements/DataList';
import TweetCard from '@/features/post/components/TweetCard';

type PropsType = {
  searchParams: Promise<{ offset?: string }>;
};

const LIMIT = PAGINATION_LIMIT;

const HomePage = async ({ searchParams }: PropsType) => {
  const query = await searchParams;

  const currentOffset = parseOffset(query);

  const { tweets, count } = await getTweets(LIMIT, currentOffset);

  return (
    <>
      <PageTitle title="ホーム画面" />
      <DataList items={tweets}>{(item) => <TweetCard tweet={item} />}</DataList>
      <Pagination targetPath="/home" offset={currentOffset} count={count} />
    </>
  );
};

export default HomePage;
