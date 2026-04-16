'use client';

import { useState } from 'react';
import { CreateFollow, DeleteFollow } from '../actions/follow';

type PropsType = {
  userId: string;
  initialIsFollowed: boolean;
};

const FollowButton = ({ userId, initialIsFollowed }: PropsType) => {
  // 初期値になるis_followdはboole型
  const [isFollow, setIsFollow] = useState(initialIsFollowed);

  const handleFollow = async () => {
    const nextState = !isFollow; // 次の状態を計算しておく
    setIsFollow(nextState);

    if (nextState) {
      console.log('これからフォローします');
      await CreateFollow(userId);
    } else {
      console.log('これからフォロー解除します');
      await DeleteFollow(userId);
    }
  };

  return (
    <button onClick={handleFollow}>
      {isFollow ? 'フォロー解除' : 'フォロー'}
    </button>
  );
};

export default FollowButton;
