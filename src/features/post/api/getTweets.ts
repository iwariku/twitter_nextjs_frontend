import { getSessionId } from '../../auth/actions/actions';
import { Tweet } from '../types/types';

export const getTweets = async (limit: number, offset: number) => {
  const sessionId = await getSessionId();

  const response = await fetch(
    `${process.env.API_BASE_URL}/api/tweets?limit=${limit}&offset=${offset}`,
    {
      method: 'GET',
      headers: {
        Cookie: `session_id=${sessionId}`,
      },
      cache: 'no-store',
    },
  );

  if (!response.ok) {
    throw new Error(`APIリクエストに失敗しました: ${response.status}`);
  }

  const { tweets, count } = await response.json();
  return {
    tweets: tweets || [],
    count: count || 0,
  };
};

export const getTweet = async (id: string): Promise<Tweet> => {
  const sessionId = await getSessionId();

  const response = await fetch(`${process.env.API_BASE_URL}/api/tweets/${id}`, {
    method: 'GET',
    headers: {
      Cookie: `session_id=${sessionId}`,
    },
  });

  if (!response.ok) {
    throw new Error(`APIリクエストに失敗しました: ${response.status}`);
  }

  const tweet = await response.json();
  return tweet;
};
