import React from 'react';
import { getSessionId } from '../../../features/auth/actions/actions';

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
    <div className="text-black bg-white min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">ホーム画面</h1>

      <div className="space-y-4">
        {tweets.map((tweet: Tweet) => (
          <div key={tweet.id} className="border p-4 rounded-lg">
            <p className="text-gray-500 text-sm">User ID: {tweet.user_id}</p>
            <p className="text-lg">{tweet.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
