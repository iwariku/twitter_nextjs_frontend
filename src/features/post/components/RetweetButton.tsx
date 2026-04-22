'use client';

import { useState } from 'react';
import { createRetweet, deleteRetweet } from '../actions/actions';
import { FaRetweet } from 'react-icons/fa';

type PropsType = {
  tweetId: string;
  currentRetweetStatus: boolean;
};

const RetweetButton = ({ tweetId, currentRetweetStatus }: PropsType) => {
  const [isRetweeted, setIsRetweet] = useState(currentRetweetStatus);

  const handleRetweet = async () => {
    const previousState = isRetweeted;
    setIsRetweet(!previousState);

    try {
      if (previousState) {
        await deleteRetweet(tweetId);
      } else {
        await createRetweet(tweetId);
      }
    } catch (error) {
      setIsRetweet(previousState);
      console.error('エラーが発生しました。直前の状態に戻します', error);
    }
  };

  return (
    <button onClick={handleRetweet} className="pointer-events-auto">
      {isRetweeted ? <FaRetweet color="green" /> : <FaRetweet />}
    </button>
  );
};

export default RetweetButton;
