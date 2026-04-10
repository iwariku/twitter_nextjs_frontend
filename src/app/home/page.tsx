import React from 'react';
import { authGuard } from '../../../features/auth/actions/actions';

const HomePage = async () => {
  await authGuard();

  return (
    <div>
      <h1>ホーム画面</h1>
    </div>
  );
};

export default HomePage;
