"use client";
import { mockMovies } from "@/lib/data/mock-data";
import Navbar from "@/components/shared/navbar";
import FeaturedShow from "@/components/shared/featured-show";
import { nowPlaying } from "@/lib/data/now-playing";
import { upcoming } from "@/lib/data/upcoming";
import { topRated } from "@/lib/data/top-rated";
import { popular } from "@/lib/data/popular";
import MovieSection from "@/components/shared/show-section";
import { Movie } from "@/types/movie";

export default function Page() {
  const featuredMovie = mockMovies[1];

  const filteredNowPlaying = nowPlaying.results.map((show) => ({
    id: show?.id,
    title: show?.title,
    posterPath: show?.poster_path,
    voteAverage: show?.vote_average,
    releaseDate: show?.release_date,
    mediaType: "movie",
  }));

  const filteredPopular = popular.results.map((show) => ({
    id: show?.id,
    title: show?.title,
    posterPath: show?.poster_path,
    voteAverage: show?.vote_average,
    releaseDate: show?.release_date,
    mediaType: "movie",
  }));

  const filteredUpcoming = upcoming.results.map((show) => ({
    id: show?.id,
    title: show?.title,
    posterPath: show?.poster_path,
    voteAverage: show?.vote_average,
    releaseDate: show?.release_date,
    mediaType: "movie",
  }));

  const filteredTopRated = topRated.results.map((show) => ({
    id: show?.id,
    title: show?.title,
    posterPath: show?.poster_path,
    voteAverage: show?.vote_average,
    releaseDate: show?.release_date,
    mediaType: "movie",
  }));

  return (
    <div className="page-container">
      {/* Header */}
      <Navbar />

      <main className="container px-4 py-8">
        {/* Hero Section */}
        <FeaturedShow featuredMovie={featuredMovie as Movie} />

        {/* Now Playing Section */}
        <MovieSection title="Now Playing" shows={filteredNowPlaying} />

        {/* Popular Section */}
        <MovieSection title="Popular" shows={filteredPopular} />

        {/* Hot New Section */}
        <MovieSection title="Upcoming" shows={filteredUpcoming} />

        {/* Top Rated Section */}
        <MovieSection title="Top Rated" shows={filteredTopRated} />
      </main>
    </div>
  );
}
