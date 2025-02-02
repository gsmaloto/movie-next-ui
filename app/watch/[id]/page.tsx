import Navbar from "@/components/shared/navbar";
import { mockMovies } from "@/lib/data/mock-data";
import { movieDetails } from "@/lib/data/movie-details";

export default function WatchPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const posterPath = movieDetails?.poster_path
    ? `https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`
    : "https://www.popcorn.app/assets/app/images/placeholder-movieimage.png";

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      {/* Fixed Background Image with Overlay */}
      <div className="fixed inset-0 z-0 opacity-40">
        <img
          src={`https://image.tmdb.org/t/p/w1280${movieDetails?.backdrop_path}`}
          alt={movieDetails?.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div className="relative container px-6 py-12 mx-auto max-w-6xl">
        {/* Video Player */}
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl border border-gray-700">
          <iframe
            className="w-full h-full"
            src={`https://vidsrc.cc/v2/embed/movie/${id}?autoPlay=false`}
            allowFullScreen
          ></iframe>
        </div>

        {/* Movie Details Section */}
        <div className="mt-8 flex flex-col md:flex-row gap-8">
          {/* Poster Image */}
          <img
            src={posterPath}
            alt={movieDetails?.title}
            className="w-64 self-center object-cover rounded-lg shadow-lg border border-gray-700"
            loading="lazy"
          />

          {/* Movie Info */}
          <div className="md:col-span-2 flex flex-col space-y-6">
            <h1 className="text-4xl font-bold text-gray-200">
              {movieDetails?.title}
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              {movieDetails?.overview}
            </p>

            {/* Additional Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
              <p>
                <span className="font-semibold text-gray-400">Runtime:</span>{" "}
                {movieDetails?.runtime} min
              </p>
              <p>
                <span className="font-semibold text-gray-400">
                  Release Date:
                </span>{" "}
                {movieDetails?.release_date}
              </p>
              <p>
                <span className="font-semibold text-gray-400">Rating:</span>{" "}
                {movieDetails?.vote_average} ({movieDetails?.vote_count} votes)
              </p>
              <p>
                <span className="font-semibold text-gray-400">Popularity:</span>{" "}
                {movieDetails?.popularity}
              </p>
              <p>
                <span className="font-semibold text-gray-400">Language:</span>{" "}
                {movieDetails?.original_language}
              </p>
              <p>
                <span className="font-semibold text-gray-400">Tagline:</span>{" "}
                {movieDetails?.tagline || "N/A"}
              </p>
              <p>
                <span className="font-semibold text-gray-400">Status:</span>{" "}
                {movieDetails?.status}
              </p>
              <p>
                <span className="font-semibold text-gray-400">Budget:</span> $
                {movieDetails?.budget?.toLocaleString()}
              </p>
              <p>
                <span className="font-semibold text-gray-400">Revenue:</span> $
                {movieDetails?.revenue?.toLocaleString()}
              </p>
              <p>
                <span className="font-semibold text-gray-400">
                  Production Countries:
                </span>{" "}
                {movieDetails?.production_countries
                  ?.map((country) => country.name)
                  .join(", ") || "N/A"}
              </p>
              <p>
                <span className="font-semibold text-gray-400">
                  Spoken Languages:
                </span>{" "}
                {movieDetails?.spoken_languages
                  ?.map((lang) => lang.english_name)
                  .join(", ") || "N/A"}
              </p>
            </div>

            {/* Genres */}
            {movieDetails?.genres && (
              <div className="flex flex-wrap gap-3 mt-4">
                {movieDetails?.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="px-4 py-2 text-md font-medium bg-gray-800 rounded-lg"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            )}

            {/* Production Companies */}
            {movieDetails?.production_companies && (
              <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-200">
                  Production Companies
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                  {movieDetails.production_companies.map((company) => (
                    <div
                      key={company.id}
                      className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg shadow-md border border-gray-700"
                    >
                      <img
                        src={
                          company.logo_path
                            ? `https://image.tmdb.org/t/p/w200${company.logo_path}`
                            : "https://www.popcorn.app/assets/app/images/placeholder-movieimage.png"
                        }
                        alt={company.name}
                        className="w-20 h-20 object-contain rounded-md bg-white p-2"
                      />
                      <div>
                        <p className="text-lg font-semibold text-gray-300">
                          {company.name}
                        </p>
                        <p className="text-md text-gray-400">
                          {company.origin_country || "Unknown"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
