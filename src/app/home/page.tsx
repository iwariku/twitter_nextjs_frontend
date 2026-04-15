import Sidebar from '@/components/layouts/Sidebar';
import { getTweets } from '../../features/post/api/getTweets';
import Pagination from '@/components/layouts/Pagination';
import TweetList from '../../features/post/components/TweetList';
import PageTitle from '@/components/layouts/PageTitle';

type PropsType = {
  searchParams: Promise<{ offset?: string }>;
};

const HomePage = async ({ searchParams }: PropsType) => {
  const LIMIT = 10;

  const { offset } = await searchParams;
  const parsedOffset = Number(offset) || 0;
  // offsetは0であることを証明するため。負の値になることはない
  const currentOffset = Math.max(0, parsedOffset);

  const { tweets, count } = await getTweets(LIMIT, currentOffset);

  return (
    <>
      <PageTitle title="ホーム画面" />
      <TweetList tweets={tweets} />
      <Pagination LIMIT={LIMIT} offset={currentOffset} count={count} />
    </>
  );
};

export default HomePage;
