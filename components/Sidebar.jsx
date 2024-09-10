import React from "react";
import Logo from "./elements/Logo";
import Navigator from "./elements/Navigator";

const Sidebar = ({ children }) => {
  return (
    <div className="flex h-full flex-row">
      <nav className="hidden w-[240px] border-r-[1px] border-neutral-600 lg:block">
        <div className="p-[24px]">
          <Logo />
        </div>
        <div>
          <Navigator />
        </div>
      </nav>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Sidebar;
