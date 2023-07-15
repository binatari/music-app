import { fetchTopArtists } from "@/utils/fetchers";
import React from "react";
import LinkCardItem from "../list-items/LinkCardItem";
import Carousel from "./Carousel";
import { compactNumber } from "@/utils/formatters";

const HeaderArtistsContainer = async () => {
  const artists = await fetchTopArtists({ limit: 10 });
  return (
    <div className="mt-6 md:mt-12">
      <Carousel header="Trending artists">
        {artists.map((artist) => {
          const { id, name, picture_medium, nb_album, nb_fan } = artist;
          const formattedFanNumber = compactNumber(nb_fan);

          return (
            <div className="min-w-[14em]">
    <LinkCardItem
              key={id}
              title={name}
              imgSrc={picture_medium}
              href={`/artist/${id}`}
              description={`${formattedFanNumber} Fans | ${nb_album} Albums`}
            />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default HeaderArtistsContainer;
