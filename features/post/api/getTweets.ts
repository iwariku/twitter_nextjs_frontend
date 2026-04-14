import { getSessionId } from '../../auth/actions/actions';

export const getTweets = async (limit: number = 10, offset: number = 0) => {
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
    return [];
  }

  const { tweets } = await response.json();
  return tweets || [];
};
