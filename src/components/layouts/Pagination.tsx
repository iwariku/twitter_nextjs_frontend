import Link from 'next/link';

type PropsType = {
  LIMIT: number;
  offset: number;
  count: number;
};

const Pagination = ({ LIMIT, offset, count }: PropsType) => {
  const currentPage = Math.floor(offset / LIMIT) + 1;
  const maxPage = Math.ceil(count / LIMIT) || 1;

  const prevOffset = Math.max(0, offset - LIMIT);
  const nextOffset = offset + LIMIT;

  const isFirstPage = offset === 0;
  const isLastPage = offset + LIMIT >= count;

  return (
    <div className="p-6 border-t border-gray-100 flex items-center justify-center gap-6">
      <Link
        href={`/home?offset=${prevOffset}`}
        className={`px-4 py-2 border rounded-full ${isFirstPage ? 'pointer-events-none opacity-30' : ''}`}
      >
        前へ
      </Link>

      <div className="flex flex-col items-center">
        <span className="text-sm font-semibold">
          {currentPage} / {maxPage} ページ
        </span>
        <span className="text-xs text-gray-500">(全 {count} 件)</span>
      </div>

      <Link
        href={`/home?offset=${nextOffset}`}
        className={`px-4 py-2 border rounded-full ${isLastPage ? 'pointer-events-none opacity-30' : ''}`}
      >
        次へ
      </Link>
    </div>
  );
};

export default Pagination;
