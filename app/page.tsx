"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  PlayCircle,
  Search,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { mockMovies, getImageUrl } from "@/lib/mock-data";
import type { Movie } from "@/types/movie";
import Navbar from "@/components/shared/navbar";
import FeaturedShow from "@/components/shared/featured-show";

export default function Page() {
  const featuredMovie =
    mockMovies[Math.floor(Math.random() * mockMovies.length)];
  const [, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 4 >= mockMovies.length ? 0 : prevIndex + 4
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 4 < 0 ? mockMovies.length - 4 : prevIndex - 4
    );
  };

  return (
    <div className="page-container">
      {/* Header */}
      <Navbar />

      <main className="container px-4 py-8">
        {/* Hero Section */}
        <FeaturedShow featuredMovie={featuredMovie} />

        {/* Popular Section */}
        <MovieSection title="Popular" movies={mockMovies.slice(0, 8)} />

        {/* Hot New Section */}
        <MovieSection title="Hot New" movies={mockMovies.slice(0, 8)} />
      </main>
    </div>
  );
}

function MovieSection({ title, movies }: { title: string; movies: Movie[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 4 >= movies.length ? 0 : prevIndex + 4
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 4 < 0 ? movies.length - 4 : prevIndex - 4
    );
  };

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex gap-2">
          <Button size="icon" variant="ghost" onClick={prevSlide}>
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button size="icon" variant="ghost" onClick={nextSlide}>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.slice(currentIndex, currentIndex + 4).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}

function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link href={`/watch/${movie.id}`} className="group">
      <div className="relative aspect-[2/3] rounded-lg overflow-hidden">
        <Image
          src={getImageUrl(movie.poster_path) || "/placeholder.svg"}
          alt={movie.title}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-black/60 px-2 py-1 rounded-md text-sm font-medium flex items-center gap-1">
          <Star className="w-3 h-3 fill-yellow-400 stroke-yellow-400" />
          {movie.vote_average.toFixed(1)}
        </div>
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <PlayCircle className="w-12 h-12" />
        </div>
      </div>
      <h3 className="mt-2 text-sm font-medium truncate">{movie.title}</h3>
      <p className="text-xs text-gray-400">
        {new Date(movie.release_date).getFullYear()}
      </p>
    </Link>
  );
}
