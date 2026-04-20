export type Tweet = {
  id: number;
  content: string;
  user_id: number;
  created_at: string;
};

export type PaginatedTweets = {
  tweets: Tweet[];
  limit: number;
  offset: number;
  count: number;
};
