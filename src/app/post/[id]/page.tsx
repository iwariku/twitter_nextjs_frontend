import PageTitle from '@/components/layouts/PageTitle';
import { getTweet } from '@/features/post/api/getTweets';
import TweetCard from '@/features/post/components/TweetCard';

type PropsType = {
  params: Promise<{ id: string }>;
};

const TweetDetailPage = async ({ params }: PropsType) => {
  const { id } = await params;

  const tweet = await getTweet(id);

  return (
    <>
      <PageTitle title="ツイート詳細" />
      <TweetCard tweet={tweet} isDetail={true} />
    </>
  );
};

export default TweetDetailPage;
