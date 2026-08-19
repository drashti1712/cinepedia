const MovieCardSkeleton = () => {
  return (
    <div className="w-44 shrink-0">
      {/* Poster */}
      <div className="aspect-[2/3] w-full animate-pulse rounded-xl bg-gray-700" />

      {/* Title */}
      <div className="mt-2 h-5 w-3/4 animate-pulse rounded bg-gray-700" />
    </div>
  );
};

export default MovieCardSkeleton;
