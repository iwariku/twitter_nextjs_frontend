'use server';

import { getSessionId } from '@/features/auth/actions/actions';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const createGroup = async (formData: FormData) => {
  const sessionId = await getSessionId();

  const groupName = formData.get('name');

  const response = await fetch(`${process.env.API_BASE_URL}/api/dm/group`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Cookie: `session_id=${sessionId}`,
    },
    body: JSON.stringify({ Name: groupName }),
  });

  const testdata = await response.json();
  console.log(testdata);

  if (!response.ok) {
    throw new Error(`グループの作成に失敗しました: ${response.status}`);
  }

  revalidatePath('/dm-groups', 'layout');
  redirect('/dm-groups');
};
