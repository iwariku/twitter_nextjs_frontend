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
    <button
      onClick={handleFollow}
      className={`
        px-5 py-2 rounded-full font-bold transition-colors duration-200
        ${
          isFollow
            ? 'bg-white text-black border border-gray-300 hover:bg-red-50 hover:text-red-600 hover:border-red-200'
            : 'bg-black text-white hover:bg-gray-800'
        }
      `}
    >
      {isFollow ? 'フォロー解除' : 'フォロー'}
    </button>
  );
};

export default FollowButton;
