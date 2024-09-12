"use client";
import React from "react";
import Category from "./components/Category";
import PagePadding from "@/components/PagePadding";
import PlayListCarousel from "@/components/PlayListCarousel";
import { dummyPlaylistArray, getPlaylistById } from "@/lib/dummyData";
import UserIcon from "@/components/UserIcon";

const page = async () => {
  const dummyPlaylistArray1 = [...dummyPlaylistArray];
  const dummyPlaylistArray2 = [await getPlaylistById(1)];
  const dummyPlaylistArray3 = [await getPlaylistById(2)];
  const dummyPlaylistArray4 = [await getPlaylistById(3)];
  const env = process.env;
  const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
  const apiKey = process.env.API_KEY;
  const enviroment = process.env.NEXT_PUBLIC_ENVIRONMENT;

  console.log(`process.env: ${env}`);
  console.log(`process.env.NEXT_PUBLIC_API_ENDPOINT: ${apiEndpoint}`);
  console.log(`process.env.API_KEY: ${apiKey}`);
  console.log(`process.env.NEXT_PUBLIC_ENVIRONMENT ${enviroment}`);

  return (
    <PagePadding>
      <div></div>
      <div className="min-h-[600px]">
        <div className="mt-9"></div>
        <Category />
        <div className="mt-12"></div>
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray1]}
          Thumbnail={
            <div className="h-[56px] w-[56px]">
              <UserIcon size={"lg"} />
            </div>
          }
          title="다시 듣기"
          subTitle="도도"
        />
        <div className="mt-20"></div>
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray2]}
          title="케이시 - Full Bloom"
          subTitle="새로운 앨범"
        />
        <div className="mt-20"></div>
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray3]}
          title="커뮤니티 제공"
        />
        <div className="mt-20"></div>
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray4]}
          title="커버 및 리믹스"
        />
      </div>
    </PagePadding>
  );
};

export default page;
