export type User = {
  id: number;
  user_name: string;
  self_introduction: string;
  date_of_birth: Date;
  profile_image: string;
  following_count: number;
  follower_count: number;
  is_followed: boolean;
};

export type PaginatedFollowList = {
  follow_list: User[];
  limit: number;
  offset: number;
  count: number;
};
