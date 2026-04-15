import PageTitle from '@/components/layouts/PageTitle';
import { getTweet } from '@/features/post/api/getTweets';

type PropsType = {
  params: Promise<{ id: string }>;
};

const TweetDetailPage = async ({ params }: PropsType) => {
  const { id } = await params;

  const tweet = await getTweet(id);

  return (
    <>
      <PageTitle title="ツイート詳細" />

      <div className="divide-y border-b border-gray-100">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold text-[15px]">
              User ID: {tweet.user_id}
            </span>
          </div>

          <p className="text-[15px] leading-6 whitespace-pre-wrap text-gray-900">
            {tweet.content}
          </p>
        </div>
      </div>
    </>
  );
};

export default TweetDetailPage;
