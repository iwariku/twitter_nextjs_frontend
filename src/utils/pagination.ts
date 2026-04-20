export const PAGINATION_LIMIT = 10;

export type PropsType = {
  offset?: string;
};

export const parseOffset = (query: PropsType) => {
  const rawOffset = query.offset;
  const castedOffset = Number(rawOffset) || 0;
  // offsetは0であることを証明するため。負の値になることはない
  const parsedOffset = Math.max(0, castedOffset);

  return parsedOffset;
};
