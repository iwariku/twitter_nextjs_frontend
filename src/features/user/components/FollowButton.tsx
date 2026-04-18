'use client';

import { useState } from 'react';
import { CreateFollow, DeleteFollow } from '../actions/follow';

type PropsType = {
  userId: string;
  currentFollowStatus: boolean;
};

const FollowButton = ({ userId, currentFollowStatus }: PropsType) => {
  const [isFollow, setIsFollow] = useState(currentFollowStatus);

  const handleFollow = async () => {
    // ボタンが押される「直前」の値を変数に保存
    const previousState = isFollow;

    // 画面表示を先に更新
    setIsFollow(!previousState);

    try {
      if (previousState) {
        await DeleteFollow(userId);
      } else {
        await CreateFollow(userId);
      }
    } catch (error) {
      // 失敗したら「直前の状態」に戻す
      setIsFollow(previousState);
      console.error('エラーが発生しました。直前の状態に戻します', error);
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
