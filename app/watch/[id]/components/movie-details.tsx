import ShowDetail from "@/components/shared/show-detail";
import TrailerModal from "@/components/shared/trailer-modal";
import { Badge } from "@/components/ui/badge";
import { movieVideos } from "@/lib/data/movie-videos";
import {
  MovieDetailsType,
  ProductionCountry,
  SpokenLanguage,
} from "@/types/movie-details";
import { MovieVideo } from "@/types/movie-video";
import { Star } from "lucide-react";

export default function MovieDetails(props: {
  movieDetails: MovieDetailsType;
}) {
  const { movieDetails } = props;

  const posterPath = movieDetails?.poster_path
    ? `https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`
    : "https://www.popcorn.app/assets/app/images/placeholder-movieimage.png";

  const rating = movieDetails?.vote_average || 0;
  const maxRating = 10;

  const trailerKey = movieVideos?.results?.find(
    (video: MovieVideo) => video.type === "Trailer"
  )?.key;

  const trailerUrl = `https://www.youtube.com/embed/${trailerKey}`;
  console.log(trailerUrl);

  const movieData = [
    {
      label: "Runtime",
      value: `${movieDetails?.runtime} min`,
    },
    {
      label: "Release Date",
      value: movieDetails?.release_date,
    },
    {
      label: "Popularity",
      value: movieDetails?.popularity,
    },
    {
      label: "Language",
      value: movieDetails?.original_language,
    },
    {
      label: "Tagline",
      value: movieDetails?.tagline,
    },
    {
      label: "Status",
      value: movieDetails?.status,
    },
    {
      label: "Budget",
      value: movieDetails?.budget?.toLocaleString(),
    },
    {
      label: "Revenue",
      value: movieDetails?.revenue?.toLocaleString(),
    },
    {
      label: "Production Countries",
      value: movieDetails?.production_countries
        .map((country: ProductionCountry) => country.name)
        .join(", "),
    },
    {
      label: "Spoken Languages",
      value: movieDetails?.spoken_languages
        .map((lang: SpokenLanguage) => lang.english_name)
        .join(", "),
    },
  ];

  return (
    <div className="mt-8 flex flex-col md:flex-row gap-8">
      {/* Poster Image */}
      <div className="flex flex-col items-center">
        <img
          src={posterPath}
          alt={movieDetails?.title}
          className="w-64 object-cover rounded-lg shadow-lg border border-gray-700"
          loading="lazy"
        />
        <TrailerModal trailerUrl={trailerUrl} />
        {/* Rating Progress Bar with Icon */}
        <div className="w-full mt-4">
          <label className="text-lg text-gray-400 font-semibold mb-2 flex items-center gap-2">
            <Star fill="yellow" size={32} strokeWidth={0} /> {rating.toFixed(1)}{" "}
            / {movieDetails?.vote_count} voted
          </label>
          <progress
            className="w-full h-2 bg-gray-700"
            value={rating}
            max={maxRating}
          ></progress>
        </div>
      </div>

      {/* Movie Info */}
      <div className="md:col-span-2 flex flex-col space-y-6">
        <h1 className="text-4xl font-bold text-gray-200">
          {movieDetails?.title}
        </h1>

        {/* Genres */}
        {movieDetails?.genres && (
          <div className="flex flex-wrap gap-3 mt-4">
            {movieDetails?.genres.map((genre) => (
              <Badge key={genre.id}>{genre.name}</Badge>
            ))}
          </div>
        )}

        <p className="text-gray-300 text-lg leading-relaxed">
          {movieDetails?.overview}
        </p>

        {/* Additional Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
          {movieData.map((item) => (
            <ShowDetail
              key={item.label}
              label={item.label}
              value={item.value}
            />
          ))}
        </div>
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
  );
}
