import Navbar from "@/components/shared/navbar";
import VideoPlayer from "@/components/shared/video-player";
import MovieDetails from "./components/movie-details";
import BgImageOverlay from "@/components/shared/bg-image-overlay";

const fetchMovieDetails = async (id: string) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
    cache: "no-store",
  };

  const res = await fetch(url, options);
  if (!res.ok) throw new Error("Failed to fetch movie details");
  return res.json();
};

export default async function WatchPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const movieDetails = await fetchMovieDetails(id);

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <BgImageOverlay
        srcUrl={`https://image.tmdb.org/t/p/w1280${movieDetails?.backdrop_path}`}
        alt={movieDetails?.title}
      />

      <div className="relative container px-6 py-12 mx-auto max-w-6xl">
        <VideoPlayer
          srcUrl={`https://vidsrc.cc/v2/embed/movie/${id}?autoPlay=false`}
        />

        <MovieDetails movieDetails={movieDetails} />
      </div>
    </main>
  );
}
