import React from 'react';
import Sidebar from '@/components/layouts/Sidebar';
import TweetCard from '../../../features/post/components/TweetCard';
import { getTweets } from '../../../features/post/api/getTweets';
import Link from 'next/link';

type PropsType = {
  searchParams: Promise<{ offset?: string }>;
};

const HomePage = async ({ searchParams }: PropsType) => {
  const { offset } = await searchParams;
  const currentOffset = Number(offset) || 0;
  const LIMIT = 10;

  // マイナスページに遷移しないようにMath.maxを使用する
  const prevOffset = Math.max(0, currentOffset - LIMIT);
  const nextOffset = currentOffset + LIMIT;

  const tweets = await getTweets(LIMIT, currentOffset);
  return (
    <div className="flex min-h-screen bg-white max-w-[1300px] mx-auto text-black">
      <Sidebar />
      <TweetCard tweets={tweets} />

      <Link
        href={`/home?offset=${prevOffset}`}
        className={`px-4 py-2 border rounded ${currentOffset === 0 ? 'pointer-events-none opacity-50' : ''}`}
      >
        前へ
      </Link>

      <Link
        href={`/home?offset=${nextOffset}`}
        className={`px-4 py-2 border rounded ${tweets.length < LIMIT ? 'pointer-events-none opacity-50' : ''}`}
      >
        次へ
      </Link>
    </div>
  );
};

export default HomePage;
