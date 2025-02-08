import { PlayCircle } from "lucide-react";
import { Star } from "lucide-react";
import { getImageUrl } from "@/lib/data/mock-data";
import Image from "next/image";
import Link from "next/link";

type TvShowCardProps = {
  id: number;
  name: string;
  posterPath: string;
  voteAverage: number;
  releaseDate: string;
  mediaType: string;
  firstAirDate: string;
};

export default function TvShowCard(props: TvShowCardProps) {
  return (
    <Link href={`/watch/${props.id}`} className="group">
      <div className="relative aspect-[2/3] rounded-lg overflow-hidden">
        <Image
          src={
            props.posterPath
              ? getImageUrl(props.posterPath)
              : "/placeholder.svg"
          }
          alt={props.name}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-black/60 px-2 py-1 rounded-md text-sm font-medium flex items-center gap-1">
          <Star className="w-3 h-3 fill-yellow-400 stroke-yellow-400" />
          {props.voteAverage}
        </div>

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <PlayCircle className="w-12 h-12" />
        </div>
      </div>
      <h3 className="mt-2 text-sm font-medium truncate">{props.name}</h3>
      <p className="text-xs text-gray-400">
        {new Date(props.firstAirDate).getFullYear()}
      </p>
    </Link>
  );
}
