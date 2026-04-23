export type Group = {
  id: string;
  name: string;
};

export type Groups = {
  groups: Group[];
};

export type GroupMember = {
  id: string;
  user_id: string;
  dm_group_id: string;
};

export type Message = {
  id: string;
  user_id: string;
  dm_group_id: string;
  message: string;
};

export type Messages = {
  messages: Message[];
};
