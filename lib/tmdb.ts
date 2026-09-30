const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p";

async function tmdbFetch(endpoint: string) {
  const res = await fetch(`${TMDB_BASE_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      accept: "application/json",
    },
    next: { revalidate: 3600 }, // cache for 1 hour
  });

  if (!res.ok) {
    throw new Error(`TMDB request failed: ${res.status}`);
  }

  return res.json();
}

export function posterUrl(path: string | null, size: "w342" | "w500" = "w342") {
  if (!path) return "/no-poster.png"; // add a placeholder image to /public later
  return `${TMDB_IMAGE_BASE}/${size}${path}`;
}

export function getPopularMovies() {
  return tmdbFetch("/movie/popular");
}

export function searchMovies(query: string) {
  return tmdbFetch(`/search/movie?query=${encodeURIComponent(query)}`);
}

export function getMovieDetails(id: string) {
  return tmdbFetch(`/movie/${id}`);
}