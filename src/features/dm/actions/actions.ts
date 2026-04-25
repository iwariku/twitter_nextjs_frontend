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

export const addUserToGroup = async (formData: FormData) => {
  const sessionId = await getSessionId();

  // ヒント：取得した値を数値に変換する
  const addUserId = Number(formData.get('user_id'));
  console.log(addUserId);
  console.log(typeof addUserId);

  const addGroupId = Number(formData.get('group_id'));
  console.log(addGroupId);
  console.log(typeof addGroupId);

  console.log(JSON.stringify({ user_id: addUserId, group_id: addGroupId }));

  const response = await fetch(
    `${process.env.API_BASE_URL}/api/dm/add-member`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `session_id=${sessionId}`,
      },
      body: JSON.stringify({ user_id: addUserId, group_id: addGroupId }),
    },
  );

  console.log(response);

  if (!response.ok) {
    throw new Error(`メンバーの追加に失敗しました: ${response.status}`);
  }

  revalidatePath('/dm-groups', 'layout');
  redirect('/dm-groups');
};
