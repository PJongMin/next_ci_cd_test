"use client";
import { getRandomElementFromArray } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MdMoreVert } from "react-icons/md";
import { FiPlay } from "react-icons/fi";
import IconButton from "./elements/IconButton";

const PlayListCard = ({ playlist = {} } = {}) => {
  const { push } = useRouter();
  const { id, owner, playlistName, songList = [] } = playlist ?? {};
  const songListLen = songList?.length;
  const imageSrc = getRandomElementFromArray(songList)?.imageSrc;
  const onClickCard = () => {
    push(`/playlist?list=${id}`);
  };
  const onClickPlay = () => {
    //Todo play
  };
  return (
    <article className="group h-[240px] cursor-pointer">
      <section onClick={onClickCard} className="relative h-[136px]">
        <Image
          src={imageSrc}
          fill={true}
          alt="thumbnail"
          className="object-cover"
        />
        <div className="relative top-0 hidden h-[136px] w-full bg-gradient-to-b from-[rgba(0,0,0,0.7)] group-hover:block">
          <div className="absolute right-2 top-4">
            <IconButton icon={<MdMoreVert size={20} />} />
          </div>
          <div
            onClick={onClickPlay}
            className="absolute bottom-4 right-4 flex h-[45px] w-[45px] transform-gpu items-center justify-center rounded-full bg-[rgba(0,0,0,0.7)] pl-1.5 transition-transform hover:scale-110 hover:bg-[rgba(0,0,0,0.9)]"
          >
            <FiPlay size={20} color="red" />
          </div>
        </div>
      </section>
      <section className="mt-2">
        <div>{playlistName}</div>
        <div className="text-neutral-500">{`${owner} -  트랙 ${songListLen}개`}</div>
      </section>
    </article>
  );
};

export default PlayListCard;
