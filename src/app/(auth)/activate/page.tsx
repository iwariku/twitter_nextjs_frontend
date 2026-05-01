import { executeActivation } from '@/features/auth/api/activation';
import Link from 'next/link';

type PropsType = {
  searchParams: Promise<{ token: string }>;
};

const ActivationPage = async ({ searchParams }: PropsType) => {
  const { token } = await searchParams;

  await executeActivation(token);

  return (
    <div className="min-h-screen bg-gray-600 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-[600px] min-h-[400px] rounded-2xl p-8 flex flex-col items-center justify-center">
        <p className="text-lg text-gray-800 text-center mb-8 leading-relaxed">
          アカウントが有効になりました。
          <br />
          ログインが可能な状態です。
        </p>

        <Link
          href="/login"
          className="w-full max-w-[300px] h-12 flex items-center justify-center bg-black text-white rounded-full font-bold hover:bg-zinc-800 transition duration-200"
        >
          ログインページへ移動
        </Link>
      </div>
    </div>
  );
};

export default ActivationPage;
