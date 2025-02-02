import Navbar from "@/components/shared/navbar";
import { movieDetails } from "@/lib/data/movie-details";
import VideoPlayer from "@/components/shared/video-player";
import MovieDetails from "./components/movie-details";
import BgImageOverlay from "@/components/shared/bg-image-overlay";

export default function WatchPage({ params }: { params: { id: string } }) {
  const { id } = params;

  // const posterPath = movieDetails?.poster_path
  //   ? `https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`
  //   : "https://www.popcorn.app/assets/app/images/placeholder-movieimage.png";

  // const rating = movieDetails?.vote_average || 0;
  // const maxRating = 10;

  // const trailerKey = movieVideos?.results?.find(
  //   (video: any) => video.type === "Trailer"
  // )?.key;

  // const trailerUrl = `https://www.youtube.com/embed/${trailerKey}`;
  // console.log(trailerUrl);

  // const movieData = [
  //   {
  //     label: "Runtime",
  //     value: `${movieDetails?.runtime} min`,
  //   },
  //   {
  //     label: "Release Date",
  //     value: movieDetails?.release_date,
  //   },
  //   {
  //     label: "Popularity",
  //     value: movieDetails?.popularity,
  //   },
  //   {
  //     label: "Language",
  //     value: movieDetails?.original_language,
  //   },
  //   {
  //     label: "Tagline",
  //     value: movieDetails?.tagline,
  //   },
  //   {
  //     label: "Status",
  //     value: movieDetails?.status,
  //   },
  //   {
  //     label: "Budget",
  //     value: movieDetails?.budget?.toLocaleString(),
  //   },
  //   {
  //     label: "Revenue",
  //     value: movieDetails?.revenue?.toLocaleString(),
  //   },
  //   {
  //     label: "Production Countries",
  //     value: movieDetails?.production_countries
  //       .map((country) => country.name)
  //       .join(", "),
  //   },
  //   {
  //     label: "Spoken Languages",
  //     value: movieDetails?.spoken_languages
  //       .map((lang) => lang.english_name)
  //       .join(", "),
  //   },
  // ];

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
