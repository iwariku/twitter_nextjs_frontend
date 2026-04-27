import Form from 'next/form';
import { unsubscribe } from '../actions/unsubscribe';

const UnsubscribeForm = () => {
  return (
    <div className="min-h-screen bg-gray-600 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-[600px] min-h-[600px] rounded-2xl p-8 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-10 text-black">退会フォーム</h1>

        <Form action={unsubscribe} className="w-full max-w-[300px] space-y-6">
          <button
            type="submit"
            className="w-full h-12 bg-black text-white rounded-full font-bold hover:bg-zinc-800 transition duration-200"
          >
            退会
          </button>
        </Form>
      </div>
    </div>
  );
};

export default UnsubscribeForm;
