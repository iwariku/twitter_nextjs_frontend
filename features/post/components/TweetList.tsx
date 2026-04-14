import { Tweet } from '../types/types';

const TweetList = ({ tweets }: { tweets: Tweet[] }) => {
  return (
    <>
      <div className="sticky top-0 bg-white/80 backdrop-blur-sm p-4 border-b border-gray-100 z-10">
        <h2 className="text-xl font-bold">ホーム画面</h2>
      </div>

      <div className="divide-y divide-gray-100">
        {tweets.map((tweet: Tweet) => (
          <div
            key={tweet.id}
            className="p-4 hover:bg-gray-50/50 transition cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="font-bold text-[15px] hover:underline">
                User ID: {tweet.userId}
              </span>
            </div>

            <p className="text-[15px] leading-6 mt-1 whitespace-pre-wrap text-gray-900">
              {tweet.content}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default TweetList;
