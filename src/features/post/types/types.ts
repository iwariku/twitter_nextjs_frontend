export type Tweet = {
  id: string;
  user_id: string;
  content: string;
  like_count: number;
  is_liked: boolean;
};

export type PaginatedTweets = {
  tweets: Tweet[];
  limit: number;
  offset: number;
  count: number;
};
