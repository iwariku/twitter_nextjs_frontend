import DataList from '@/components/elements/DataList';
import PageTitle from '@/components/layouts/PageTitle';
import { getGroups } from '@/features/dm/api/Groups';
import AddUserButton from '@/features/dm/components/AddUserButton';
import CreateGroupButton from '@/features/dm/components/CreateGroupButton';
import GroupCard from '@/features/dm/components/GroupCard';

const DMGroupsPage = async () => {
  const { groups } = await getGroups();
  console.log(groups);

  return (
    <>
      <PageTitle title="グループ一覧" />
      <CreateGroupButton />
      <AddUserButton />

      <DataList items={groups}>{(item) => <GroupCard group={item} />}</DataList>
    </>
  );
};

export default DMGroupsPage;
