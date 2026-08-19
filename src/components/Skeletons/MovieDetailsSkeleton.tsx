const MovieDetailsSkeleton = () => {
  return (
    <section className="relative min-h-[650px] overflow-hidden bg-gray-950">
      {/* Fake backdrop */}
      <div className="absolute inset-0 animate-pulse bg-gray-900" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-end px-4 py-10 sm:px-6 md:px-10 lg:px-12">
        <div className="flex w-full flex-col items-center gap-8 md:flex-row md:items-end">
          {/* Poster skeleton */}
          <div
            className="
              aspect-[2/3]
              w-48
              shrink-0
              animate-pulse
              rounded-xl
              bg-gray-700
              md:w-56
              lg:w-64
            "
          />

          {/* Details skeleton */}
          <div className="flex w-full max-w-3xl flex-col gap-4">
            {/* Title */}
            <div className="h-10 w-3/4 animate-pulse rounded bg-gray-700" />

            {/* Tagline */}
            <div className="h-5 w-1/2 animate-pulse rounded bg-gray-700" />

            {/* Rating + year */}
            <div className="flex gap-2">
              <div className="h-8 w-20 animate-pulse rounded-xl bg-gray-700" />
              <div className="h-8 w-20 animate-pulse rounded-xl bg-gray-700" />
            </div>

            {/* Genres */}
            <div className="h-5 w-2/3 animate-pulse rounded bg-gray-700" />

            {/* Overview */}
            <div className="space-y-2">
              <div className="h-4 w-full animate-pulse rounded bg-gray-700" />
              <div className="h-4 w-full animate-pulse rounded bg-gray-700" />
              <div className="h-4 w-4/5 animate-pulse rounded bg-gray-700" />
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <div className="h-10 w-32 animate-pulse rounded-md bg-gray-700" />
              <div className="h-10 w-40 animate-pulse rounded-md bg-gray-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetailsSkeleton;
