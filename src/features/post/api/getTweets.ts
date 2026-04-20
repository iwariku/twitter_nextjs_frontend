import { getSessionId } from '../../auth/actions/actions';
import { PaginatedTweets, Tweet } from '../types/types';

export const getTweets = async (
  limit: number,
  offset: number,
): Promise<PaginatedTweets> => {
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

  const tweets = await response.json();
  return tweets;
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

export const getTweetsByUserId = async (
  userId: string,
  limit: number,
  offset: number,
): Promise<PaginatedTweets> => {
  const sessionId = await getSessionId();

  const response = await fetch(
    `${process.env.API_BASE_URL}/api/users/${userId}/tweets?limit=${limit}&offset=${offset}`,
    {
      method: 'GET',
      headers: {
        Cookie: `session_id=${sessionId}`,
      },
      cache: 'no-store',
    },
  );

  if (!response.ok) {
    throw new Error(`ユーザーツイート取得に失敗しました: ${response.status}`);
  }

  const tweets = await response.json();
  return tweets;
};
