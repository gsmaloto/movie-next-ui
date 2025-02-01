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
import ShowCard from "@/components/shared/show-card";

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
          <ShowCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
