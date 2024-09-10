import React from "react";
import Image from "next/image";
import UserIcon from "./UserIcon";
import PagePadding from "./PagePadding";
import { FaChromecast } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Header = ({ children }) => {
  return (
    <header className="relative h-full w-full overflow-y-auto">
      <section className="absolute top-0 w-full">
        <div className="relative h-[400px] w-full">
          <Image
            alt="mediaItem"
            className="object-cover"
            fill
            src="https://images.unsplash.com/photo-1717361275129-76ec3c9668d1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="absolute top-0 h-[400px] w-full bg-black opacity-40"></div>
          <div className="absolute top-0 h-[400px] w-full bg-gradient-to-t from-black"></div>
        </div>
      </section>
      <section className="sticky">
        <PagePadding>
          <div className="flex flex-row items-center justify-between">
            <article className="bt-[rgba(0,0,0,0.14)] flex h-[42px] min-w-[480px] flex-row items-center gap-[16px] rounded-2xl px-[16px]">
              <div>
                <FiSearch size={24} />
              </div>
              <input
                className="h-full w-full bg-transparent"
                type="text"
                placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
              />
            </article>
            <article>
              <FaChromecast size={26} />
              <UserIcon />
            </article>
          </div>
        </PagePadding>
      </section>
      <section className="absolute">{children}</section>
    </header>
  );
};

export default Header;
