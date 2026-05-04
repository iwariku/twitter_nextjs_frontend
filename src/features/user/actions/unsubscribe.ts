'use server';

import { getSessionId } from '@/features/auth/actions/actions';
import { redirect } from 'next/navigation';

export const unsubscribe = async () => {
  const sessionId = await getSessionId();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/unsubscribe`,
    {
      method: 'DELETE',
      headers: {
        Cookie: `session_id=${sessionId}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error(`退会に失敗しました: ${response.status}`);
  }

  redirect('/login');
};
