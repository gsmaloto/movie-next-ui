import Navbar from "@/components/shared/navbar";
import { movieDetails } from "@/lib/data/movie-details";
import VideoPlayer from "@/components/shared/video-player";
import MovieDetails from "./components/movie-details";
import BgImageOverlay from "@/components/shared/bg-image-overlay";

export default function WatchPage({ params }: { params: { id: string } }) {
  const { id } = params;

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
