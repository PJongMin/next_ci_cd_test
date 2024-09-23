import { generateRandomHex } from "@/lib/utils";
import React from "react";

const GenreCard = ({ genre }) => {
  const hex = generateRandomHex();
  return (
    <div className="flex h-[48px] w-full cursor-pointer flex-row rounded-lg bg-neutral-800">
      <div
        className="h-full w-2 rounded-l-lg"
        style={{ backgroundColor: hex }}
      ></div>
      <div className="flex items-center justify-center px-4">{genre}</div>
    </div>
  );
};

export default GenreCard;
