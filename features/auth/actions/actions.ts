'use server';

import { redirect } from 'next/navigation';

export const SignUp = async (formData: FormData) => {
  const email = formData.get('email');
  const password = formData.get('password');
  redirect('/login');
};

export const Login = async (formData: FormData) => {
  const email = formData.get('email');
  const password = formData.get('password');
  redirect('/home');
};
