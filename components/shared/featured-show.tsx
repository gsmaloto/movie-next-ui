import { Star } from "lucide-react";
import Link from "next/link";

import { PlayCircle } from "lucide-react";

import { Button } from "../ui/button";
import { getImageUrl } from "@/lib/data/mock-data";
import { Movie } from "@/types/movie";
import Image from "next/image";

export default function FeaturedShow({
  featuredMovie,
}: {
  featuredMovie: Movie;
}) {
  return (
    <div className="relative h-[50vh] md:h-[70vh] rounded-xl overflow-hidden mb-8">
      <Image
        src={getImageUrl(featuredMovie?.backdrop_path ?? "/placeholder.svg")}
        alt={featuredMovie?.title ?? "Featured Movie"}
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1d29] to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 md:p-10 space-y-2 md:space-y-4 max-w-2xl">
        <h1 className="text-2xl md:text-4xl font-bold">
          {featuredMovie.title}
        </h1>
        <p className="text-sm md:text-base text-gray-300 line-clamp-2 md:line-clamp-3">
          {featuredMovie.overview}
        </p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
            <span>{featuredMovie.vote_average.toFixed(1)}</span>
          </div>
          <span className="text-gray-400">
            {new Date(featuredMovie.release_date).getFullYear()}
          </span>
        </div>
        <Link href={`/watch/${featuredMovie.id}`}>
          <Button className="bg-green-500 hover:bg-green-600">
            <PlayCircle className="w-4 h-4 mr-2" />
            Watch now
          </Button>
        </Link>
      </div>
    </div>
  );
}
