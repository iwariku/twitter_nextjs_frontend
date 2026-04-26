import PageTitle from '@/components/layouts/PageTitle';
import { createMessage } from '@/features/dm/actions/actions';
import { getMessages } from '@/features/dm/api/Messages';
import Form from 'next/form';

type PropsType = {
  params: Promise<{ id: string }>;
};

const MessagePage = async ({ params }: PropsType) => {
  const { id } = await params;

  const { messages } = await getMessages(id);
  console.log(messages);

  // bindする
  // FormコンポーネントにはfromDataのみを引数に取るという性質があるため、idを先に紐づけておく
  // このようにしておかないと、引数違いのエラーが発生する。
  const createMessageSetedId = createMessage.bind(null, id);

  return (
    <>
      <PageTitle title="メッセージ一覧" />
      <div className="divide-y divide-gray-100">
        {messages.map((message) => (
          <div
            key={message.id}
            className="relative border-b border-gray-100 transition hover:bg-gray-50/50 group"
          >
            <div className="relative p-4 z-10 pointer-events-none">
              <div>{message.user_id}</div>

              <div className="flex items-center gap-2 mb-2">
                {message.message}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Form action={createMessageSetedId}>
        <input
          type="text"
          name="message"
          placeholder="メッセージを入力してください"
          required
          className="w-full h-12 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition text-black"
        />

        <button
          type="submit"
          className="w-full h-12 bg-black text-white rounded-full font-bold hover:bg-zinc-800 transition duration-200"
        >
          送信
        </button>
      </Form>
    </>
  );
};

export default MessagePage;
