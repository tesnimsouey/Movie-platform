import { getPopularMovies } from "@/lib/tmdb";
import MovieCard from "@/components/MovieCard";

export default async function Home() {
  const data = await getPopularMovies();

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">
      <h1 className="mb-6 text-2xl font-semibold">Popular Movies</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {data.results.map((movie: any) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}