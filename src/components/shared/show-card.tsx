import { PlayCircle, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getImageUrl } from "@/lib/data/mock-data";
import Image from "next/image";
import Link from "next/link";

export type MediaShowCardProps = {
  id: number;
  title: string;
  posterPath: string;
  voteAverage: number;
  releaseDate: string;
  mediaType: string;
};

export default function MediaShowCard({
  media,
}: {
  media: MediaShowCardProps;
}) {
  return (
    <Link href={`/watch/${media.id}`} className="group">
      <div className="relative aspect-[2/3] rounded-lg overflow-hidden">
        <Image
          src={
            media.posterPath
              ? getImageUrl(media.posterPath)
              : "/poster_placeholder.svg"
          }
          alt={media.title}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-black/60 px-2 py-1 rounded-md text-sm font-medium flex items-center gap-1">
          <Star className="w-3 h-3 fill-yellow-400 stroke-yellow-400" />
          {media.voteAverage.toFixed(1)}
        </div>

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <PlayCircle className="w-12 h-12" />
        </div>
      </div>
      <h3 className="mt-2 text-sm font-medium truncate">{media.title}</h3>
      <p className="text-xs text-gray-400">
        {new Date(media.releaseDate).getFullYear()}
      </p>
      <MediaTypeBadge mediaType={media.mediaType} />
    </Link>
  );
}

function MediaTypeBadge({ mediaType }: { mediaType: string }) {
  const mediaColor = {
    movie: "bg-blue-500",
    tv: "bg-red-500",
  };
  return (
    <Badge className={mediaColor[mediaType as keyof typeof mediaColor]}>
      {mediaType.toUpperCase()}
    </Badge>
  );
}
