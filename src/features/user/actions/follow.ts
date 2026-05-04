'use server';

import { getSessionId } from '@/features/auth/actions/actions';
import { revalidatePath } from 'next/cache';

export const CreateFollow = async (userId: string) => {
  const sessionId = await getSessionId();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/${userId}/follow`,
    {
      method: 'POST',
      headers: {
        Cookie: `session_id=${sessionId}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error(`フォローに失敗しました: ${response.status}`);
  }

  revalidatePath(`/users/${userId}`, 'layout');
};

export const DeleteFollow = async (userId: string) => {
  const sessionId = await getSessionId();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/${userId}/follow`,
    {
      method: 'DELETE',
      headers: {
        Cookie: `session_id=${sessionId}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error(`フォロー解除に失敗しました: ${response.status}`);
  }

  revalidatePath(`/users/${userId}`, 'layout');
};
