import { searchMovies } from "@/lib/tmdb";
import MovieCard from "@/components/MovieCard";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  if (!q) {
    return (
      <main className="min-h-screen bg-black px-6 py-10 text-white">
        <p className="text-zinc-400">Type something in the search bar to begin.</p>
      </main>
    );
  }

  const data = await searchMovies(q);

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">
      <h1 className="mb-6 text-2xl font-semibold">
        Results for &quot;{q}&quot;
      </h1>
      {data.results.length === 0 ? (
        <p className="text-zinc-400">No movies found.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {data.results.map((movie: any) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </main>
  );
}