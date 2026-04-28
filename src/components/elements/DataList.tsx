import { ReactNode } from 'react';

type PropsType<T> = {
  items: T[];
  children: (item: T) => ReactNode;
};

// T extendsはkeyにつけるidを証明するため
const DataList = <T extends { id: string | number }>({
  items,
  children,
}: PropsType<T>) => {
  return (
    <div className="divide-y divide-gray-100">
      {items.map((item) => (
        <div key={item.id}>{children(item)}</div>
      ))}
    </div>
  );
};

export default DataList;
