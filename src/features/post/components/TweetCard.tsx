import Link from 'next/link';
import { Tweet } from '../types/types';
import LikeButton from './LikeButton';
import RetweetButton from './RetweetButton';
import BookmarkButton from './BookmarkButton';
import { CardLayout } from '@/components/elements/CardLayout';

type PropsType = {
  tweet: Tweet;
  isDetail?: boolean;
};

const TweetCard = ({ tweet, isDetail = false }: PropsType) => {
  return (
    <CardLayout href={`/post/${tweet.id}`}>
      <div className="flex flex-col">
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

        <div className="flex items-center gap-x-10 mt-3">
          <div className="flex items-center gap-1">
            <LikeButton tweetId={tweet.id} currentLikeStatus={tweet.is_liked} />
            <span className="text-sm"> {tweet.like_count}</span>
          </div>

          <div className="flex items-center gap-1">
            <RetweetButton
              tweetId={tweet.id}
              currentRetweetStatus={tweet.is_retweeted}
            />
            <span className="text-sm"> {tweet.retweet_count}</span>
          </div>

          <div className="flex items-center gap-1">
            <BookmarkButton
              tweetId={tweet.id}
              currentBookmarkStatus={tweet.is_bookmarked}
            />
          </div>
        </div>
      </div>
    </CardLayout>
  );
};

export default TweetCard;
