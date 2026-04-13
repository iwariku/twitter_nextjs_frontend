import React from 'react';
import { getSessionId } from '../../../features/auth/actions/actions';
import Sidebar from '@/components/layouts/Sidebar';

type Tweet = {
  id: number;
  content: string;
  user_id: number;
  created_at: string;
};

const HomePage = async () => {
  const sessionId = await getSessionId();

  const response = await fetch(`${process.env.API_BASE_URL}/api/tweets`, {
    method: 'GET',
    headers: {
      Cookie: `session_id=${sessionId}`,
    },
    cache: 'no-store',
  });

  const data = await response.json();
  const tweets = data.tweets || [];

  return (
    <div className="flex min-h-screen bg-white max-w-[1300px] mx-auto text-black">
      <Sidebar />

      <main className="flex-1 min-h-screen border-r border-gray-100">
        <div className="sticky top-0 bg-white/80 backdrop-blur-sm p-4 border-b border-gray-100 z-10">
          <h2 className="text-xl font-bold">ホーム画面</h2>
        </div>

        <div className="divide-y divide-gray-100">
          {tweets.map((tweet: Tweet) => (
            <div
              key={tweet.id}
              className="p-4 hover:bg-gray-50/50 transition cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="font-bold text-[15px] hover:underline">
                  User ID: {tweet.user_id}
                </span>
              </div>

              <p className="text-[15px] leading-6 mt-1 whitespace-pre-wrap text-gray-900">
                {tweet.content}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
