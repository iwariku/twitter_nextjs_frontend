'use client';

import Link from 'next/link';

const AddUserButton = () => {
  return (
    <Link
      href={'/dm-groups/add-user'}
      className="bg-black text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-gray-800 transition"
    >
      ユーザー追加
    </Link>
  );
};

export default AddUserButton;
