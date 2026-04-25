import Form from 'next/form';
import { addUserToGroup } from '../actions/actions';

const AddUserForm = () => {
  return (
    <div className="min-h-screen bg-gray-600 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-[600px] min-h-[600px] rounded-2xl p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-10 text-black">ユーザー追加</h1>

        <Form
          action={addUserToGroup}
          className="w-full max-w-[300px] space-y-6"
        >
          <div className="space-y-4">
            <input
              type="text"
              name="user_id"
              placeholder="ユーザーID"
              required
              className="w-full h-12 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition text-black"
            />

            <input
              type="text"
              name="group_id"
              placeholder="グループID"
              required
              className="w-full h-12 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition text-black"
            />
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-black text-white rounded-full font-bold hover:bg-zinc-800 transition duration-200"
          >
            追加
          </button>
        </Form>
      </div>
    </div>
  );
};

export default AddUserForm;
