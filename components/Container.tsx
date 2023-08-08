const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1300px] mx-auto py-0 px-[20px] tab:px-[40px]">
      {children}
    </div>
  );
};

export default Container;
