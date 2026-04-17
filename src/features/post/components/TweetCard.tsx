import Link from 'next/link';
import { Tweet } from '../types/types';

type PropsType = {
  tweet: Tweet;
  isDetail?: boolean;
};

const TweetCard = ({ tweet, isDetail = false }: PropsType) => {
  return (
    <Link
      href={`/post/${tweet.id}`}
      className={'block p-4 transition hover:bg-gray-50/50 cursor-pointer'}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className={"font-bold hover:underline text-black  'text-[15px]"}>
          User ID: {tweet.user_id}
        </span>
      </div>

      {/* 詳細の時は、文字サイズを大きくする*/}
      <p
        className={`whitespace-pre-wrap text-gray-900 ${isDetail ? 'text-lg leading-relaxed' : 'text-[15px] leading-6 mt-1'}`}
      >
        {tweet.content}
      </p>
    </Link>
  );
};

export default TweetCard;
