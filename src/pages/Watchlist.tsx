import Grid from "../components/Gallery/Grid";
import MovieCard from "../components/MovieCard";
import { getWatchlist } from "../utils/watchlist";

export default function Watchlist() {
  const movies = getWatchlist();
  return (
    <main className="min-h-screen bg-gray-950">
      <h1 className="px-4 py-8 text-3xl font-bold text-lime-200">
        My Watchlist
      </h1>

      <Grid
        data={movies}
        renderItem={(movie) => (
          <MovieCard
            id={movie.id}
            path={movie.poster_path}
            title={movie.title}
          />
        )}
      />
    </main>
  );
}
