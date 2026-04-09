import Form from 'next/form';
import React from 'react';
import { Login } from '../../../features/auth/actions/actions';

const LoginPage = () => {
  return (
    <Form action={Login}>
      <h1>ログイン</h1>
      <input type="email" name="email" placeholder="メールアドレス" required />
      <input
        type="password"
        name="password"
        placeholder="パスワード"
        required
      />
      <button type="submit">ログイン</button>
    </Form>
  );
};

export default LoginPage;
