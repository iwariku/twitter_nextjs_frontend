import { getSessionId } from '../../auth/actions/actions';

export const getTweets = async () => {
  const sessionId = await getSessionId();

  const response = await fetch(`${process.env.API_BASE_URL}/api/tweets`, {
    method: 'GET',
    headers: {
      Cookie: `session_id=${sessionId}`,
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    return [];
  }

  const { tweets } = await response.json();
  return tweets || [];
};
