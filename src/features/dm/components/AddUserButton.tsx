'use client';

import Link from 'next/link';

const AddUserButton = () => {
  return (
    <>
      <Link href={'/dm-groups/add-user'} className="bg-blue-500">
        ユーザー追加
      </Link>
    </>
  );
};

export default AddUserButton;
