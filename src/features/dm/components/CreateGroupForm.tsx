import Form from 'next/form';
import { createGroup } from '../actions/actions';

const CreateGroupForm = () => {
  return (
    <div className="min-h-screen bg-gray-600 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-[600px] min-h-[600px] rounded-2xl p-8 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-10 text-black">グループ作成</h1>

        <Form action={createGroup} className="w-full max-w-[300px] space-y-6">
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="グループ名"
              required
              className="w-full h-12 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition text-black"
            />
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-black text-white rounded-full font-bold hover:bg-zinc-800 transition duration-200"
          >
            作成
          </button>
        </Form>
      </div>
    </div>
  );
};

export default CreateGroupForm;
