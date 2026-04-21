'use client';

import { useState } from 'react';
import { createLike, deleteLike } from '../actions/actions';
import { FcLike } from 'react-icons/fc';
import { PiHeart } from 'react-icons/pi';

// いいね、リツイート、ブックマークでも同じ引数であればまとめて定義するのがいいけど、どこに使用type/props.tsみたいなのを作る？
type PropsType = {
  tweetId: string;
  currentLikeStatus: boolean;
};

const LikeButton = ({ tweetId, currentLikeStatus }: PropsType) => {
  const [isLiked, setIsLike] = useState(currentLikeStatus);

  const handleLike = async () => {
    const previousState = isLiked;
    setIsLike(!previousState);

    try {
      if (previousState) {
        await deleteLike(tweetId);
      } else {
        await createLike(tweetId);
      }
    } catch (error) {
      setIsLike(previousState);
      console.error('エラーが発生しました。直前の状態に戻します', error);
    }
  };

  return (
    <button onClick={handleLike} className="pointer-events-auto">
      {isLiked ? <FcLike /> : <PiHeart />}
    </button>
  );
};

export default LikeButton;
