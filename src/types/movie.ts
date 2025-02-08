import { MediaShowCardProps } from "@/components/shared/show-card";

export type Movie = {
  id: number;
  title: string;
  name?: string;
  original_title: string;
  original_name?: string;
  overview: string;

  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  genre_ids: number[];
  adult: boolean;
  video: boolean;
  original_language: string;
  media_type?: string;
  first_air_date?: string;
} & MediaShowCardProps;
