'use client';

import { useState } from 'react';
import { CreateFollow, DeleteFollow } from '../actions/follow';

type PropsType = {
  userId: string;
  currentFollowStatus: boolean;
};

const FollowButton = ({ userId, currentFollowStatus }: PropsType) => {
  const [isFollow, setIsFollow] = useState(currentFollowStatus);

  const executeFollow = async () => {
    setIsFollow(true);
    await CreateFollow(userId);
  };

  const executeUnfollow = async () => {
    setIsFollow(false);
    await DeleteFollow(userId);
  };

  const handleFollow = async () => {
    if (isFollow) {
      await executeUnfollow();
    } else {
      await executeFollow();
    }
  };

  return (
    <button onClick={handleFollow}>
      {isFollow ? 'フォロー解除' : 'フォロー'}
    </button>
  );
};

export default FollowButton;
