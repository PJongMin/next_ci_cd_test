import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  console.log(children);
  return <div>{children}</div>;
};

export default layout;
