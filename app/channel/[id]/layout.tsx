import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  console.log(children);
  return (
    <div>
      layout 먼저
      {children}
    </div>
  );
};

export default layout;
