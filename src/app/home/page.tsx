import React from 'react';
import Sidebar from '@/components/layouts/Sidebar';
import TweetCard from '../../../features/post/components/TweetCard';
import { getTweets } from '../../../features/post/api/getTweets';

const HomePage = async () => {
  const tweets = await getTweets();

  return (
    <div className="flex min-h-screen bg-white max-w-[1300px] mx-auto text-black">
      <Sidebar />
      <TweetCard tweets={tweets} />
    </div>
  );
};

export default HomePage;
