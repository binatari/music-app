import Playlists from "@/components/others/Playlists";
import TrackListContainer from "@/components/others/TrackListContainer";
import { fetchTopTracks } from "@/utils/fetchers";
import TopArtistsContainer from "@/components/others/TopArtistsContainer";
import Hero from "@/components/home/Hero";

export default async function Home() {
  const tracks = await fetchTopTracks({ limit: 10 });

  return (
    <div>
    <Hero/>
  <div className="flex justify-between flex-wrap mt-10">
      <div className="w-1/2">
        <TrackListContainer header="Trending right now" tracks={tracks} />
      </div>
      <div className="w-1/2">
        <TopArtistsContainer limit={3} />
        <Playlists />
      </div>
    </div>
    </div>
  
  );
}