"use client";
import { TopSong } from "@/types";
import Image from "next/image";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { AiOutlineCaretDown } from "react-icons/ai";
import { AiOutlineCaretUp } from "react-icons/ai";
import { FiPlayCircle } from "react-icons/fi";
import { FiThumbsDown } from "react-icons/fi";
import { FiThumbsUp } from "react-icons/fi";
import { FiMoreVertical } from "react-icons/fi";
import IconButton from "./elements/IconButton";

interface SongCardProps {
  song: TopSong;
}

const SongCard: React.FC<SongCardProps> = ({ song }) => {
  return (
    <article className="group relative flex h-[48px] w-full flex-row items-center gap-4">
      <div className="relative h-[48px] w-[48px]">
        <Image src={song.imageSrc} alt="img" fill className="object-cover" />
        <section className="absolute top-0 hidden h-[48px] w-[48px] cursor-pointer items-center justify-center bg-black group-hover:flex">
          <FiPlayCircle size={20} />
        </section>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div>
          {song.rank === song.prevRank ? (
            <FaCircle size={10} />
          ) : song.rank > song.prevRank ? (
            <AiOutlineCaretUp size={10} color="#3CA63F" />
          ) : (
            <AiOutlineCaretDown size={10} color="#FF0000" />
          )}
        </div>
        <div>{song.rank + 1}</div>
      </div>
      <div>
        <div>{song.name}</div>
      </div>
      <section className="absolute right-0 top-0 hidden h-[48px] w-1/2 flex-row items-center justify-end bg-[rgba(0,0,0,0.7)] group-hover:flex">
        <IconButton icon={<FiThumbsDown size={20} />} />
        <IconButton icon={<FiThumbsUp size={20} />} />
        <IconButton icon={<FiMoreVertical size={20} />} />
      </section>
    </article>
  );
};

export default SongCard;
