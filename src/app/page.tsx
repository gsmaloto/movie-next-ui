"use client";
import { mockMovies } from "@/lib/data/mock-data";
import Navbar from "@/components/shared/navbar";
import FeaturedShow from "@/components/shared/featured-show";
import { nowPlaying } from "@/lib/data/now-playing";
import { upcoming } from "@/lib/data/upcoming";
import { topRated } from "@/lib/data/top-rated";
import { popular } from "@/lib/data/popular";
import MovieSection from "@/components/shared/show-section";

export default function Page() {
  const featuredMovie = mockMovies[1];

  return (
    <div className="page-container">
      {/* Header */}
      <Navbar />

      <main className="container px-4 py-8">
        {/* Hero Section */}
        <FeaturedShow featuredMovie={featuredMovie} />

        {/* Now Playing Section */}
        <MovieSection title="Now Playing" shows={nowPlaying.results} />

        {/* Popular Section */}
        <MovieSection title="Popular" shows={popular.results} />

        {/* Hot New Section */}
        <MovieSection title="Upcoming" shows={upcoming.results} />

        {/* Top Rated Section */}
        <MovieSection title="Top Rated" shows={topRated.results} />
      </main>
    </div>
  );
}
