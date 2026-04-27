'use client';

import { unsubscribe } from '../actions/unsubscribe';

const UnsubscribeButton = () => {
  return <button onClick={unsubscribe}>退会する</button>;
};

export default UnsubscribeButton;
