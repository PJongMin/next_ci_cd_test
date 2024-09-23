import { TopSong } from "@/types";
import React from "react";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import { AiOutlineCaretDown } from "react-icons/ai";
import { AiOutlineCaretUp } from "react-icons/ai";

interface SongCardProps {
  song: TopSong;
}

const SongCard: React.FC<SongCardProps> = ({ song }) => {
  return (
    <article className="flex h-[48px] w-[400px] flex-row gap-4">
      <div className="relative h-[48px] w-[48px]">
        <Image src={song.imageSrc} alt="img" fill className="object-cover" />
      </div>
      <div className="flex flex-row items-center gap-4">
        {song.rank === song.prevRank ? (
          <FaCircle size={8} />
        ) : song.rank > song.prevRank ? (
          <AiOutlineCaretUp color="#3CA63F" />
        ) : (
          <AiOutlineCaretDown color="#FF0000" />
        )}
      </div>
    </article>
  );
};

export default SongCard;
