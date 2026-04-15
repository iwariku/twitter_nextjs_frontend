import { Tweet } from '../types/types';
import TweetCard from './TweetCard';

const TweetList = ({ tweets }: { tweets: Tweet[] }) => {
  return (
    <>
      <div className="divide-y divide-gray-100">
        {tweets.map((tweet: Tweet) => (
          <TweetCard tweet={tweet} key={tweet.id} />
        ))}
      </div>
    </>
  );
};

export default TweetList;
