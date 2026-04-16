import { getSessionId } from '@/features/auth/actions/actions';
import { User } from '../types/type';

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

// ユーザーに紐づくツイートを表示する関数
export const getTweetByUser = async () => {};
