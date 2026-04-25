import PageTitle from '@/components/layouts/PageTitle';
import { getMessages } from '@/features/dm/api/Messages';

type PropsType = {
  params: Promise<{ id: string }>;
};

const MessagePage = async ({ params }: PropsType) => {
  const { id } = await params;

  const { messages } = await getMessages(id);

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
              <div className="flex items-center gap-2 mb-2">
                {message.message}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MessagePage;
