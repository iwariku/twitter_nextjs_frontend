'use server';

import { cookies } from 'next/headers';
import { parse } from 'cookie';
import { redirect } from 'next/navigation';

export const SignUp = async (formData: FormData) => {
  const email = formData.get('email');
  const password = formData.get('password');

  const response = await fetch(`${process.env.API_BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    console.error('新規登録に失敗しました');
    redirect('/signup');
  }

  redirect('/login');
};

export const Login = async (formData: FormData) => {
  const email = formData.get('email');
  const password = formData.get('password');

  const response = await fetch(`${process.env.API_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    console.error('ログインに失敗しました。');
    redirect('/login');
  }

  const cookieHeader = response.headers.get('set-cookie');
  if (cookieHeader) {
    await SetSessionIdCookie(cookieHeader);
  }

  redirect('/home');
};

export const SetSessionIdCookie = async (cookieHeader: string) => {
  const parsedCookies = parse(cookieHeader);
  const sessionId = parsedCookies.session_id;

  if (sessionId) {
    const cookieStore = await cookies();
    cookieStore.set('session_id', sessionId, {
      httpOnly: true,
      maxAge: 86400,
      path: '/',
    });
  }
};

export const getSessionId = async () => {
  const cookieStore = await cookies();
  return cookieStore.get('session_id')?.value;
};
