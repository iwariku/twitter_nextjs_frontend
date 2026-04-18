export type User = {
  id: string;
  user_name: string;
  self_introduction: string;
  date_of_birth: string;
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
