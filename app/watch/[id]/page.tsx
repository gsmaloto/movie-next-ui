import Navbar from "@/components/shared/navbar";
import { mockMovies } from "@/lib/mock-data";

export default function WatchPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const showPlayed = mockMovies.find((show) => show.id === Number(id));

  // Genre mapping
  const genreMap: { [key: number]: string } = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    18: "Drama",
    14: "Fantasy",
    27: "Horror",
    10749: "Romance",
    53: "Thriller",
    878: "Sci-Fi",
  };

  const additionalDetails = {
    runtime: {
      label: "Runtime",
      value: showPlayed?.runtime,
    },
    release_date: {
      label: "Release Date",
      value: showPlayed?.release_date,
    },
    vote_average: {
      label: "Rating",
      value: showPlayed?.vote_average,
    },
    vote_count: {
      label: "Vote Count",
      value: showPlayed?.vote_count,
    },
    popularity: {
      label: "Popularity",
      value: showPlayed?.popularity,
    },
    original_language: {
      label: "Language",
      value: showPlayed?.original_language,
    },
  };

  return (
    <main className="relative min-h-screen bg-black text-white">
      <Navbar />
      {/* Fixed Background Image with Overlay */}
      <div className="fixed inset-0 z-0 opacity-30">
        <img
          src={`https://image.tmdb.org/t/p/w1280${showPlayed?.backdrop_path}`}
          alt={showPlayed?.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay */}
      </div>

      <div className="relative z-10 container px-4 py-8">
        {/* Video Player */}
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg border border-gray-800">
          <iframe
            className="w-full h-full"
            src={`https://vidsrc.cc/v2/embed/movie/${id}?autoPlay=false`}
            allowFullScreen
          ></iframe>
        </div>

        {/* Movie Details Section */}
        <div className="mt-6 flex flex-col md:flex-row gap-6">
          {/* Poster Image */}
          <img
            src={`https://image.tmdb.org/t/p/w500${showPlayed?.poster_path}`}
            alt={showPlayed?.title}
            className=" w-52 self-center object-cover rounded-lg shadow-lg border border-gray-700"
            loading="lazy"
          />

          {/* Movie Info */}
          <div className="md:col-span-2 flex flex-col space-y-4">
            {/* Title & Overview */}
            <h1 className="text-3xl font-bold">{showPlayed?.title}</h1>
            <p className="text-gray-300">{showPlayed?.overview}</p>

            {/* Additional Movie Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              {Object.entries(additionalDetails).map(([key, value]) => (
                <p key={key}>
                  <span className="font-bold text-white">{value.label}:</span>{" "}
                  {value.value || "N/A"}
                </p>
              ))}
            </div>

            {/* Genres */}
            {showPlayed?.genre_ids && (
              <div className="flex flex-wrap gap-2 mt-2">
                {showPlayed?.genre_ids.map((genreId) => (
                  <span
                    key={genreId}
                    className="px-3 py-1 text-sm font-medium bg-gray-700 rounded-lg"
                  >
                    {genreMap[genreId] || "Unknown"}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
