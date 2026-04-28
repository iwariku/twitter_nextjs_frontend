import { Message } from '../types/types';

type PropsType = {
  message: Message;
};

const MessageCard = ({ message }: PropsType) => {
  return (
    <div className="divide-y divide-gray-100">
      <div className="relative border-b border-gray-100 transition hover:bg-gray-50/50 group">
        <div className="relative p-4 z-10 pointer-events-none">
          <div>User ID: {message.user_id}</div>

          <div className="flex items-center gap-2 mb-2">{message.message}</div>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
