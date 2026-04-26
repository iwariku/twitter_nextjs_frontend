'use client';

import Link from 'next/link';

const CreateGroupFormButton = () => {
  return (
    <Link
      href={'/dm-groups/create'}
      className="bg-black text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-gray-800 transition"
    >
      グループ作成
    </Link>
  );
};

export default CreateGroupFormButton;
