import { getSessionId } from '@/features/auth/actions/actions';
import { PaginatedFollowList, User } from '../types/type';

export const getUser = async (userId: string): Promise<User> => {
  const sessionId = await getSessionId();

  const response = await fetch(
    `${process.env.API_BASE_URL}/api/users/${userId}`,
    {
      method: 'GET',
      headers: {
        Cookie: `session_id=${sessionId}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error(`APIリクエストに失敗しました: ${response.status}`);
  }

  const user = await response.json();
  return user;
};

export const getFollowings = async (
  userId: string,
  limit: number,
  offset: number,
): Promise<PaginatedFollowList> => {
  const sessionId = await getSessionId();

  const response = await fetch(
    `${process.env.API_BASE_URL}/api/users/${userId}/followings?limit=${limit}&offset=${offset}`,
    {
      method: 'GET',
      headers: {
        Cookie: `session_id=${sessionId}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error(`APIリクエストに失敗しました: ${response.status}`);
  }

  const users = await response.json();
  return users;
};

export const getFollowers = async (
  userId: string,
  limit: number,
  offset: number,
): Promise<PaginatedFollowList> => {
  const sessionId = await getSessionId();

  const response = await fetch(
    `${process.env.API_BASE_URL}/api/users/${userId}/followers?limit=${limit}&offset=${offset}`,
    {
      method: 'GET',
      headers: {
        Cookie: `session_id=${sessionId}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error(`APIリクエストに失敗しました: ${response.status}`);
  }

  const users = await response.json();
  return users;
};

// ユーザーに紐づくツイートを表示する関数
export const getTweetByUser = async () => {};
