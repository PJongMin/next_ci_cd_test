import Header from "@/components/Header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full">
      <Header>{children}</Header>
    </div>
  );
};

export default layout;
