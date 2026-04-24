import PageTitle from '@/components/layouts/PageTitle';
import { getGroups } from '@/features/dm/api/Groups';
import CreateGroupButton from '@/features/dm/components/CreateGroupButton';
import { Group } from '@/features/dm/types/types';
import Link from 'next/link';

const DMGroupsPage = async () => {
  const { groups } = await getGroups();
  console.log(groups);

  return (
    <>
      <PageTitle title="グループ一覧" />
      <CreateGroupButton />
      <div className="divide-y divide-gray-100">
        {groups.map((group: Group) => (
          <div
            key={group.id}
            className="relative border-b border-gray-100 transition hover:bg-gray-50/50 group"
          >
            <Link
              href={`/dm-groups/${group.id}`}
              className="absolute inset-0 z-0 w-full h-full"
            />

            <div className="relative p-4 z-10 pointer-events-none">
              <div className="flex items-center gap-2 mb-2">{group.name}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DMGroupsPage;
