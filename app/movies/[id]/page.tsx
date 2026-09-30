import { getMovieDetails, posterUrl } from "@/lib/tmdb";
import Image from "next/image";

export default async function MovieDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movie = await getMovieDetails(id);

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 sm:flex-row">
        <div className="relative aspect-[2/3] w-full max-w-xs shrink-0">
          <Image
            src={posterUrl(movie.poster_path, "w500")}
            alt={movie.title}
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-semibold">{movie.title}</h1>
          <p className="mt-1 text-zinc-400">
            {movie.release_date?.slice(0, 4)} · {movie.runtime} min · ⭐{" "}
            {movie.vote_average.toFixed(1)}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {movie.genres?.map((g: any) => (
              <span
                key={g.id}
                className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
              >
                {g.name}
              </span>
            ))}
          </div>
          <p className="mt-6 leading-relaxed text-zinc-300">{movie.overview}</p>
        </div>
      </div>
    </main>
  );
}