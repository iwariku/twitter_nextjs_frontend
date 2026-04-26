import { CardLayout } from '@/components/elements/CardLayout';
import { Group } from '../types/types';

type PropsType = {
  group: Group;
};

const GroupCard = ({ group }: PropsType) => {
  return (
    <CardLayout href={`/dm-groups/${group.id}`}>
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <div className="font-bold text-black text-[15px] relative z-20 pointer-events-auto">
            グループ名: {group.name}
          </div>
        </div>
      </div>
    </CardLayout>
  );
};

export default GroupCard;
