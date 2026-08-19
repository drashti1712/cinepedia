import MovieCardSkeleton from "./MovieCardSkeleton";

const MovieGridSkeleton = () => {
  return (
    <ul
      className="
        mx-auto
        grid
        w-fit
        max-w-full
        grid-cols-2
        gap-x-6
        gap-y-8
        px-4
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
      "
    >
      {Array.from({ length: 10 }).map((_, index) => (
        <li key={index}>
          <MovieCardSkeleton />
        </li>
      ))}
    </ul>
  );
};

export default MovieGridSkeleton;
