import { getSessionId } from '@/features/auth/actions/actions';

const TweetDetail = async ({ params }) => {
  const sessionId = await getSessionId();
  const { id } = await params;

  // ここを別で定義する場合は、getTweetという関数名にすればいい
  const response = await fetch(`${process.env.API_BASE_URL}/api/tweets/${id}`, {
    method: 'GET',
    headers: {
      Cookie: `session_id=${sessionId}`,
    },
  });

  const tweet = await response.json();

  return (
    <div>
      <h1>ツイート詳細画面</h1>
      <h1>{tweet.content}</h1>
    </div>
  );
};

export default TweetDetail;
