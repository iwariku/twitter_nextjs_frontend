import Form from 'next/form';
import { SignUp } from '../../../features/auth/actions/actions';

const SignUpPage = () => {
  return (
    <Form action={SignUp}>
      <h1>新規登録</h1>
      <input type="email" name="email" placeholder="メールアドレス" required />
      <input
        type="password"
        name="password"
        placeholder="パスワード"
        required
      />
      <button type="submit">新規登録</button>
    </Form>
  );
};

export default SignUpPage;
