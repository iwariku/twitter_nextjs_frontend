'use server';

import { redirect } from 'next/navigation';
import { getSessionId } from '../../auth/actions/actions';

// ログインユーザー情報を取得
// 引数formDataからテキストの情報を取得
// method: POSTでテキストの内容を/postに送信

export const CreateTweet = async (formData: FormData) => {
  const sessionId = await getSessionId();
  const content = formData.get('content');

  const response = await fetch(`${process.env.API_BASE_URL}/post`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Cookie: `session_id=${sessionId}`,
    },
    body: JSON.stringify({ content }),
  });

  console.log(response.headers);

  if (!response.ok) {
    console.log('投稿に失敗しました');
  }

  redirect('/home');
};
