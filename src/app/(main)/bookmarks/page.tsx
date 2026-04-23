import PageTitle from '@/components/layouts/PageTitle';
import PaginationFooter from '@/components/layouts/PaginationFooter';
import { getBookmarkedTweetsByUserID } from '@/features/post/api/getTweets';
import TweetList from '@/features/post/components/TweetList';
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
      <TweetList tweets={bookmarkedTweets} />
      <PaginationFooter
        targetPath="/bookmarks"
        offset={currentOffset}
        count={count}
      />
    </>
  );
};

export default BookmarkedTweetPage;
