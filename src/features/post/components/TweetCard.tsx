import Link from 'next/link';
import { Tweet } from '../types/types';
import LikeButton from './LikeButton';

type PropsType = {
  tweet: Tweet;
  isDetail?: boolean;
};

const TweetCard = ({ tweet, isDetail = false }: PropsType) => {
  return (
    <div className="relative border-b border-gray-100 transition hover:bg-gray-50/50 group">
      <Link
        href={`/post/${tweet.id}`}
        className="absolute inset-0 z-0 w-full h-full"
        aria-label="ツイート詳細を見る"
      />

      <div className="relative p-4 z-10 pointer-events-none">
        <div className="flex items-center gap-2 mb-2">
          <Link
            href={`/users/${tweet.user_id}`}
            className="font-bold hover:underline text-black text-[15px] relative z-20 pointer-events-auto"
          >
            User ID: {tweet.user_id}
          </Link>
        </div>

        <p
          className={`whitespace-pre-wrap text-gray-900 ${
            isDetail ? 'text-lg leading-relaxed' : 'text-[15px] leading-6 mt-1'
          }`}
        >
          {tweet.content}
        </p>

        {/* いいね、リツイート、ブックマーク */}
        <LikeButton tweetId={tweet.id} currentLikeStatus={tweet.is_liked} />
        <span> {tweet.like_count}</span>
      </div>
    </div>
  );
};

export default TweetCard;
