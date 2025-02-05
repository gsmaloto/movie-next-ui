import ShowCard from "./show-card";
import { Movie } from "@/types/movie";

export default function MovieSection({
  title,
  movies,
}: {
  title: string;
  movies: Movie[];
}) {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <div
        className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div
          className="flex gap-4"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {movies.map((movie) => (
            <div key={movie.id} className="flex-none w-1/4 snap-center">
              <ShowCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
