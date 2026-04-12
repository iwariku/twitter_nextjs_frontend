import Form from 'next/form';
import React from 'react';
import { CreatePost } from '../../../features/post/actions/actions';

const Post = () => {
  return (
    <div className="min-h-screen bg-gray-600 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-[600px] min-h-[600px] rounded-2xl p-8 flex flex-col items-center">
        <div className="mb-8"></div>

        <h1 className="text-3xl font-bold mb-10 text-black">投稿</h1>

        <Form action={CreatePost} className="w-full max-w-[300px] space-y-6">
          <div className="space-y-4">
            <textarea
              name="content"
              placeholder="投稿内容を入力してください"
              required
              className="w-full h-[300px] p-4 text-xl border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-sky-500 text-black"
            />
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-black text-white rounded-full font-bold hover:bg-zinc-800 transition duration-200"
          >
            投稿
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Post;
