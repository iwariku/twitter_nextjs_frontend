import { getTweet } from '@/features/post/api/getTweets';

type PropsType = {
  params: Promise<{ id: string }>;
};

const TweetDetail = async ({ params }: PropsType) => {
  const { id } = await params;

  const tweet = await getTweet(id);

  return (
    <div>
      <h1>ツイート詳細画面</h1>
      <h1>{tweet.content}</h1>
    </div>
  );
};

export default TweetDetail;
