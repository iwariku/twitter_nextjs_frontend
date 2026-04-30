export const executeActivation = async (token: string) => {
  // クエリに特殊文字列が入っていてもAPIを叩けるようにするためURLSearchParamsを使用
  const activationParams = new URLSearchParams({ token: token });

  const response = await fetch(
    `${process.env.API_BASE_URL}/activate?${activationParams}`,
    {
      method: 'GET',
    },
  );

  if (!response.ok) {
    throw new Error(
      `ユーザーアクティベーションに失敗しました: ${response.status}`,
    );
  }
};
