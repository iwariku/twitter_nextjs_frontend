export type Tweet = {
  id: string;
  content: string;
  user_id: string;
  created_at: string;
};

export type PaginatedTweets = {
  tweets: Tweet[];
  limit: number;
  offset: number;
  count: number;
};
