"use client";
import React, { useMemo } from "react";
import { GoHome } from "react-icons/go";
import { FiPlus, FiMusic, FiCompass } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { dummyPlaylistArray } from "@/lib/dummyData";
import PlayListNav from "./PlayListNav";

const Navigator = () => {
  const pathName = usePathname();
  console.log(">>pathName", pathName);
  const routes = useMemo(() => {
    return [
      {
        icon: <GoHome size={24} />,
        label: "홈",
        isActive: pathName === "/",
        href: "/",
      },
      {
        icon: <FiCompass size={24} />,
        label: "둘러보기",
        isActive: pathName === "/explore",
        href: "/explore",
      },
      {
        icon: <FiMusic size={24} />,
        label: "보관함",
        isActive: pathName === "/library",
        href: "/library",
      },
    ];
  }, [pathName]);
  return (
    <div>
      <section className="flex flex-col gap-2 p-4">
        {routes.map((route) => {
          return (
            <Link key={route.label} href={route.href}>
              <div
                className={cn(
                  "flex flex-row items-center gap-4 rounded-lg p-2 text-[16px] hover:bg-neutral-700",
                  route.isActive && "bg-neutral-800",
                )}
              >
                {route.icon}
                <span>{route.label}</span>
              </div>
            </Link>
          );
        })}
      </section>
      <section className="px-6">
        <div className="h-[1px] w-full bg-neutral-700"></div>
      </section>
      <section className="px-6">
        <div className="my-6 flex cursor-pointer flex-row items-center justify-center gap-2 rounded-3xl bg-neutral-800 p-2 font-[200] hover:bg-neutral-700">
          <FiPlus size={24}></FiPlus>
          <span>새 재생목록</span>
        </div>
      </section>
      <section>
        <ul className="flex flex-col">
          {dummyPlaylistArray.map((playlist) => {
            return <PlayListNav key={playlist.id} playlist={playlist} />;
          })}
        </ul>
      </section>
    </div>
  );
};

export default Navigator;
