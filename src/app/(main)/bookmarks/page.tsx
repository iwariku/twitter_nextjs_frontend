import DataList from '@/components/elements/DataList';
import PageTitle from '@/components/layouts/PageTitle';
import PaginationFooter from '@/components/layouts/PaginationFooter';
import { getBookmarkedTweetsByUserID } from '@/features/post/api/getTweets';
import TweetCard from '@/features/post/components/TweetCard';
import { PAGINATION_LIMIT, parseOffset } from '@/utils/pagination';

type PropsType = {
  searchParams: Promise<{ offset?: string }>;
};

const LIMIT = PAGINATION_LIMIT;

const BookmarkedTweetPage = async ({ searchParams }: PropsType) => {
  const query = await searchParams;

  const currentOffset = parseOffset(query);

  const { tweets: bookmarkedTweets, count } = await getBookmarkedTweetsByUserID(
    LIMIT,
    currentOffset,
  );

  return (
    <>
      <PageTitle title="ブックマークしたツイート一覧" />
      <DataList items={bookmarkedTweets}>
        {(item) => <TweetCard tweet={item} />}
      </DataList>
      <PaginationFooter
        targetPath="/bookmarks"
        offset={currentOffset}
        count={count}
      />
    </>
  );
};

export default BookmarkedTweetPage;
