import { useCallback } from "react";
import Gallery from "../Gallery/Gallery";
import type { MovieResponse } from "../../types";
import { getSimilarMovies } from "../../services/movieApi";
import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";

const SimilarMovies = () => {
  const { id } = useParams();

  const fetchSimilarMovies = useCallback(() => {
    if (!id) {
      throw new Error("Movie ID is missing!");
    }
    return getSimilarMovies(id);
  }, [id]);

  const {
    data: similarMovies,
    loading,
    error,
  } = useFetch<MovieResponse>(fetchSimilarMovies, true);

  return (
    <div>
      <Gallery
        data={similarMovies?.results ?? []}
        heading="You might also like:"
        loading={loading}
        error={error}
        type="carousel"
      />
    </div>
  );
};

export default SimilarMovies;
