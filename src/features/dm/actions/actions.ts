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
    body: JSON.stringify({ name: groupName }),
  });

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

  const addGroupId = Number(formData.get('group_id'));

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

  if (!response.ok) {
    throw new Error(`メンバーの追加に失敗しました: ${response.status}`);
  }

  revalidatePath('/dm-groups', 'layout');
  redirect('/dm-groups');
};

export const createMessage = async (groupId: string, formData: FormData) => {
  const sessionId = await getSessionId();

  const message = formData.get('message');

  const response = await fetch(
    `${process.env.API_BASE_URL}/api/dm/groups/${groupId}/message`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `session_id=${sessionId}`,
      },
      body: JSON.stringify({ message }),
    },
  );

  if (!response.ok) {
    throw new Error(`メッセージ送信に失敗しました: ${response.status}`);
  }

  revalidatePath('/dm-groups', 'layout');
  redirect(`/dm-groups/${groupId}`);
};
