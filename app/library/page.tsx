import React from "react";
import Category from "../library/components/Category";
import PagePadding from "@/components/PagePadding";
import PlayListCarousel from "@/components/PlayListCarousel";
import { dummyPlaylistArray } from "@/lib/dummyData";
import { getRandomElementFromArray } from "@/lib/utils";
import PlayListCard from "@/components/PlayListCard";

const page = () => {
  return (
    <PagePadding>
      <div className="mt-9"></div>
      <Category />
      <div className="mt-12"></div>
      <section className="grid grid-cols-3 gap-6 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
                <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
                <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
                <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
                <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
                <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
                <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
                <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
                <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
                <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
                <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
                <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
                <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />

      </section>
      <div className="mt-12"></div>

    </PagePadding>
  );
};

export default page;
