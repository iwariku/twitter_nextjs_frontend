import Sidebar from '@/components/layouts/Sidebar';
import { getTweets } from '../../../features/post/api/getTweets';
import Pagination from '@/components/layouts/Pagination';
import TweetList from '../../../features/post/components/TweetList';

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
    <div className="flex min-h-screen bg-white max-w-[1300px] mx-auto text-black">
      <Sidebar />

      <div className="flex-1 flex flex-col border-r border-gray-100">
        <TweetList tweets={tweets} />

        <Pagination LIMIT={LIMIT} offset={currentOffset} count={count} />
      </div>
    </div>
  );
};

export default HomePage;
