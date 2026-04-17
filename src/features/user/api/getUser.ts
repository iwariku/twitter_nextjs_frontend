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
): Promise<PaginatedFollowList> => {
  const sessionId = await getSessionId();

  const response = await fetch(
    `${process.env.API_BASE_URL}/api/users/${userId}/followings`,
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

  const users = response.json();
  return users;
};

export const getFollowers = async (
  userId: string,
): Promise<PaginatedFollowList> => {
  const sessionId = await getSessionId();

  const response = await fetch(
    `${process.env.API_BASE_URL}/api/users/${userId}/followers`,
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

  const users = response.json();
  return users;
};

// ユーザーに紐づくツイートを表示する関数
export const getTweetByUser = async () => {};
