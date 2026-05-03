import { getSessionId } from '@/features/auth/actions/actions';
import { Groups } from '../types/types';

export const getGroups = async (): Promise<Groups> => {
  const sessionId = await getSessionId();

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/dm/groups`, {
    method: 'GET',
    headers: {
      Cookie: `session_id=${sessionId}`,
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`グループ一覧の取得に失敗しました: ${response.status}`);
  }

  const groups = await response.json();
  return groups;
};
