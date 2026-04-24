'use client';

import Link from 'next/link';

const CreateGroupFormButton = () => {
  return (
    <>
      <Link href={'/dm-groups/create'} className="bg-amber-200">
        グループ作成
      </Link>
    </>
  );
};

export default CreateGroupFormButton;
