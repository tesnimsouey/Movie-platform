import Link from "next/link";
import Image from "next/image";
import { posterUrl } from "@/lib/tmdb";

type Movie = {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
};

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link
      href={`/movies/${movie.id}`}
      className="group block overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 transition hover:border-zinc-600"
    >
      <div className="relative aspect-[2/3] w-full">
        <Image
          src={posterUrl(movie.poster_path)}
          alt={movie.title}
          fill
          className="object-cover transition group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 20vw"
        />
      </div>
      <div className="p-2">
        <p className="truncate text-sm font-medium text-white">{movie.title}</p>
        <p className="text-xs text-zinc-400">⭐ {movie.vote_average.toFixed(1)}</p>
      </div>
    </Link>
  );
}