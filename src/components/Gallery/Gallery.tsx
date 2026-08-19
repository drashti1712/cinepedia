import MovieCard from "../MovieCard";
import type { Movie } from "../../types";
import Carousel from "./Carousel";
import Grid from "./Grid";
import AsyncState from "../AsyncState";
import CarouselSkeleton from "../Skeletons/CarouselSkeleton";
import MovieGridSkeleton from "../Skeletons/GridSkeleton";

interface GalleryProps {
  data: Movie[];
  heading: string;
  loading: boolean;
  error: string | null;
  type: "carousel" | "grid";
}

export default function Gallery({
  data,
  heading,
  loading,
  error,
  type,
}: GalleryProps) {
  const skeleton =
    type === "carousel" ? <CarouselSkeleton /> : <MovieGridSkeleton />;
  return (
    <div className="">
      <h2 className="text-2xl font-bold text-lime-200 px-4 md:px-10 lg:px-20 py-6 md:py-8">
        {heading}
      </h2>
      <AsyncState loading={loading} error={error} loadingComponent={skeleton}>
        {type === "carousel" ? (
          <Carousel
            data={data}
            renderItem={(movie: Movie) => (
              <MovieCard
                id={movie.id}
                path={movie.poster_path}
                title={movie.title}
              />
            )}
          />
        ) : (
          <Grid
            data={data}
            renderItem={(movie: Movie) => (
              <MovieCard
                id={movie.id}
                path={movie.poster_path}
                title={movie.title}
              />
            )}
          />
        )}
      </AsyncState>
    </div>
  );
}
