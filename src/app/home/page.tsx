import Sidebar from '@/components/layouts/Sidebar';
import { getTweets } from '../../../features/post/api/getTweets';
import Pagination from '@/components/layouts/Pagination';
import TweetList from '../../../features/post/components/TweetList';

type PropsType = {
  searchParams: Promise<{ offset?: string }>;
};

const HomePage = async ({ searchParams }: PropsType) => {
  const { offset } = await searchParams;
  const currentOffset = Number(offset) || 0;
  const LIMIT = 10;

  const { tweets, count } = await getTweets(LIMIT, currentOffset);

  return (
    <div className="flex min-h-screen bg-white max-w-[1300px] mx-auto text-black">
      <Sidebar />

      <div className="flex-1 flex flex-col border-r border-gray-100">
        <TweetList tweets={tweets} />

        <Pagination
          LIMIT={LIMIT}
          offset={currentOffset}
          count={count}
          tweetsLength={tweets.length}
        />
      </div>
    </div>
  );
};

export default HomePage;
