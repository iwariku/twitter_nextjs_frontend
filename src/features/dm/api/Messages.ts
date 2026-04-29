import { getSessionId } from '@/features/auth/actions/actions';
import { Messages } from '../types/types';

export const getMessages = async (groupId: string): Promise<Messages> => {
  const sessionId = await getSessionId();

  const response = await fetch(
    `${process.env.API_BASE_URL}/api/dm/groups/${groupId}/messages`,
    {
      method: 'GET',
      headers: {
        Cookie: `session_id=${sessionId}`,
      },
      cache: 'no-store',
    },
  );

  if (!response.ok) {
    throw new Error(`メッセージの取得に失敗しました: ${response.status}`);
  }

  const messages = await response.json();
  return messages;
};
