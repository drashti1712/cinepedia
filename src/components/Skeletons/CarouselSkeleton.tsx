import MovieCardSkeleton from "./MovieCardSkeleton";

const CarouselSkeleton = () => {
  return (
    <div className="relative">
      {/* Left arrow placeholder */}
      <div
        className="
          absolute
          left-2
          top-1/2
          z-10
          h-10
          w-10
          -translate-y-1/2
          animate-pulse
          rounded-full
          bg-gray-700
        "
      />

      {/* Skeleton cards */}
      <ul
        className="
          flex
          gap-4
          overflow-hidden
          px-12
        "
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <li key={index} className="shrink-0">
            <MovieCardSkeleton />
          </li>
        ))}
      </ul>

      {/* Right arrow placeholder */}
      <div
        className="
          absolute
          right-2
          top-1/2
          z-10
          h-10
          w-10
          -translate-y-1/2
          animate-pulse
          rounded-full
          bg-gray-700
        "
      />
    </div>
  );
};

export default CarouselSkeleton;
