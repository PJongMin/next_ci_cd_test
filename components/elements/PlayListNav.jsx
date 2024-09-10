"use client";
import React from "react";
import { IoMdPlayCircle } from "react-icons/io";

const PlayListNav = ({ playlist }) => {
  const { id, owner, playlistName, songList } = playlist;
  const onClickPlay = () => {
    //TODO PlayMusic
  };
  return (
    <li className="group mx-3 flex h-[56px] flex-row items-center justify-between rounded-lg px-4 hover:bg-neutral-700">
      <div>
        <div className="text-[14px]">{playlistName}</div>
        <div className="text-[12px] text-neutral-500">{owner}</div>
      </div>
      <div>
        <div
          onClick={onClickPlay}
          className="hidden cursor-pointer group-hover:block"
        >
          <IoMdPlayCircle size={30} />
        </div>
      </div>
    </li>
  );
};

export default PlayListNav;
