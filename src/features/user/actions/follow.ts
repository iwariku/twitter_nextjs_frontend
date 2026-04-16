'use server';

import { getSessionId } from '@/features/auth/actions/actions';
import { revalidatePath } from 'next/cache';

export const CreateFollow = async (userId: string) => {
  console.log('CreateFollowアクションが実行されました。ID:', userId);
  const sessionId = await getSessionId();
  const url = `${process.env.API_BASE_URL}/api/users/${userId}/follow`;
  console.log('リクエスト送信先:', url);

  const response = await fetch(
    `${process.env.API_BASE_URL}/api/users/${userId}/follow`,
    {
      method: 'POST',
      headers: {
        Cookie: `session_id=${sessionId}`,
      },
    },
  );

  revalidatePath('/users/[id]', 'page');
};

export const DeleteFollow = async (userId: string) => {
  const sessionId = await getSessionId();

  // true/falseを取得

  const response = await fetch(
    `${process.env.API_BASE_URL}/api/users/${userId}/follow`,
    {
      method: 'DELETE',
      headers: {
        Cookie: `session_id=${sessionId}`,
      },
    },
  );

  revalidatePath('/users/[id]', 'page');
};
