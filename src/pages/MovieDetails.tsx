import { useParams } from "react-router";
import { getMovieDetails } from "../services/movieApi";
import { useCallback } from "react";
import type { MovieDetail } from "../types";
import HeroBanner from "../components/movieDetails/HeroBanner";
import SimilarMovies from "../components/movieDetails/SimilarMovies";
import MovieDetailsSkeleton from "../components/Skeletons/MovieDetailsSkeleton";
import AsyncState from "../components/AsyncState";
import useFetch from "../hooks/useFetch";

const MovieDetails = () => {
  const { id } = useParams();

  const fetchMovieDetails = useCallback(() => {
    if (!id) {
      throw new Error("Movie ID is missing!");
    }
    return getMovieDetails(id);
  }, [id]);

  const {
    data: movieDetails,
    loading,
    error,
  } = useFetch<MovieDetail>(fetchMovieDetails, true);

  // TODO: initial value for movieDetail?

  return (
    <AsyncState
      loading={loading}
      error={error}
      loadingComponent={<MovieDetailsSkeleton />}
    >
      <main className="min-h-screen bg-black text-white">
        {movieDetails ? (
          <>
            <HeroBanner
              id={movieDetails.id}
              background={movieDetails.backdrop_path}
              poster={movieDetails.poster_path}
              title={movieDetails.title}
              tagline={movieDetails.tagline}
              genres={movieDetails.genres}
              rating={movieDetails.vote_average}
              imdb_id={movieDetails.imdb_id}
              overview={movieDetails.overview}
              release_date={movieDetails.release_date?.substring(0, 4)}
            />

            <SimilarMovies />
          </>
        ) : (
          <MovieDetailsSkeleton />
        )}
      </main>
    </AsyncState>
  );
};

export default MovieDetails;
