import { useEffect, useState } from "react";
import Gallery from "../Gallery/Gallery";
import type { Movie } from "../../types";
import { getSimilarMovies } from "../../services/movieApi";
import { useParams } from "react-router";

const SimilarMovies = () => {
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([]);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      if (!id) return;
      const response = await getSimilarMovies(id);
      setSimilarMovies(response.results);
    })();
  }, [id]);
  return (
    <div>
      <Gallery
        data={similarMovies}
        heading="You might also like:"
        type="carousel"
      />
    </div>
  );
};

export default SimilarMovies;
