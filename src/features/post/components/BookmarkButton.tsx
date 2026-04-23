'use client';

import { useState } from 'react';
import { createBookmark, deleteBookmark } from '../actions/actions';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

type PropsType = {
  tweetId: string;
  currentBookmarkStatus: boolean;
};

const BookmarkButton = ({ tweetId, currentBookmarkStatus }: PropsType) => {
  const [isBookmarked, setIsBookmark] = useState(currentBookmarkStatus);

  const handleBookmark = async () => {
    const previousState = isBookmarked;
    setIsBookmark(!previousState);

    try {
      if (previousState) {
        await deleteBookmark(tweetId);
      } else {
        await createBookmark(tweetId);
      }
    } catch (error) {
      setIsBookmark(previousState);
      console.error('エラーが発生しました。直前の状態に戻します', error);
    }
  };

  return (
    <>
      <button onClick={handleBookmark} className="pointer-events-auto">
        {isBookmarked ? <FaBookmark color="blue" /> : <FaRegBookmark />}
      </button>
    </>
  );
};

export default BookmarkButton;
