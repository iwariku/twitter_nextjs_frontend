import Form from 'next/form';
import React from 'react';
import { Login } from '../../features/auth/actions/actions';
import Image from 'next/image';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-600 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-[600px] min-h-[600px] rounded-2xl p-8 flex flex-col items-center">
        <div className="mb-8">
          <Image src="/logo-black.png" alt="X Logo" width={40} height={40} />
        </div>

        <h1 className="text-3xl font-bold mb-10 text-black">ログイン</h1>

        <Form action={Login} className="w-full max-w-[300px] space-y-6">
          <div className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="メールアドレス"
              required
              className="w-full h-12 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition text-black"
            />
            <input
              type="password"
              name="password"
              placeholder="パスワード"
              required
              className="w-full h-12 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition text-black"
            />
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-black text-white rounded-full font-bold hover:bg-zinc-800 transition duration-200"
          >
            ログイン
          </button>

          <div className="text-sm text-center text-gray-600 mt-4">
            アカウントをお持ちでない場合は
            <Link href="/signup" className="text-sky-500 hover:underline">
              新規登録
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
