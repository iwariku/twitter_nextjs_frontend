type PropsType = {
  title: string;
};

const PageTitle = ({ title }: PropsType) => {
  return (
    <div className="sticky top-0 bg-white/80 backdrop-blur-sm p-4 border-b border-gray-100  z-30">
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
  );
};

export default PageTitle;
