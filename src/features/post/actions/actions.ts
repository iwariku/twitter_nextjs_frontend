'use server';

import { redirect } from 'next/navigation';
import { getSessionId } from '../../auth/actions/actions';
import { revalidatePath } from 'next/cache';

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

export const createLike = async (tweetId: string) => {
  const sessionId = await getSessionId();

  const response = await fetch(
    `${process.env.API_BASE_URL}/api/tweets/${tweetId}/like`,
    {
      method: 'POST',
      headers: {
        Cookie: `session_id=${sessionId}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error(`いいねに失敗しました: ${response.status}`);
  }

  revalidatePath('/', 'layout');
};

export const deleteLike = async (tweetId: string) => {
  const sessionId = await getSessionId();

  const response = await fetch(
    `${process.env.API_BASE_URL}/api/tweets/${tweetId}/like`,
    {
      method: 'DELETE',
      headers: {
        Cookie: `session_id=${sessionId}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error(`いいね解除に失敗しました: ${response.status}`);
  }

  revalidatePath('/', 'layout');
};

export const createRetweet = async (tweetId: string) => {
  const sessionId = await getSessionId();

  const response = await fetch(
    `${process.env.API_BASE_URL}/api/tweets/${tweetId}/retweet`,
    {
      method: 'POST',
      headers: {
        Cookie: `session_id=${sessionId}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error(`リツイートに失敗しました: ${response.status}`);
  }

  revalidatePath('/', 'layout');
};

export const deleteRetweet = async (tweetId: string) => {
  const sessionId = await getSessionId();

  const response = await fetch(
    `${process.env.API_BASE_URL}/api/tweets/${tweetId}/retweet`,
    {
      method: 'DELETE',
      headers: {
        Cookie: `session_id=${sessionId}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error(`リツイートに失敗しました: ${response.status}`);
  }

  revalidatePath('/', 'layout');
};

export const createBookmark = async (tweetId: string) => {
  const sessionId = await getSessionId();

  const response = await fetch(
    `${process.env.API_BASE_URL}/api/tweets/${tweetId}/bookmark`,
    {
      method: 'POST',
      headers: {
        Cookie: `session_id=${sessionId}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error(`ブックマークに失敗しました: ${response.status}`);
  }

  revalidatePath('/', 'layout');
};

export const deleteBookmark = async (tweetId: string) => {
  const sessionId = await getSessionId();

  const response = await fetch(
    `${process.env.API_BASE_URL}/api/tweets/${tweetId}/bookmark`,
    {
      method: 'DELETE',
      headers: {
        Cookie: `session_id=${sessionId}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error(`ブックマーク解除に失敗しました: ${response.status}`);
  }

  revalidatePath('/', 'layout');
};
