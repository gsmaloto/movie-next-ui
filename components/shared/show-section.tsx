import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ShowCard from "./show-card";
import { Movie } from "@/types/movie";

export default function MovieSection({ title, movies }: { title: string; movies: Movie[] }) {
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