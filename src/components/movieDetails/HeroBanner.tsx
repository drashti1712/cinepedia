import type { Genre } from "../../types";

interface HeroBannerProps {
  background: string;
  poster: string;
  title: string;
  tagline: string;
  genres: Genre[];
  rating: number;
  imdb_id: string;
  overview: string;
  release_date: string;
}

const HeroBanner = ({
  background,
  poster,
  title,
  tagline,
  genres,
  rating,
  imdb_id,
  overview,
  release_date,
}: HeroBannerProps) => {
  return (
    <section className="relative min-h-[650px] overflow-hidden">
      {/* Background */}
      {background && (
        <img
          src={`https://image.tmdb.org/t/p/original${background}`}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Bottom gradient - blends hero into black */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-end px-4 py-10 sm:px-6 md:px-10 lg:px-12">
        <div className="flex w-full flex-col items-center gap-8 md:flex-row md:items-end">
          {/* Poster */}
          <div className="flex w-48 shrink-0 flex-col gap-3 md:w-56 lg:w-64">
            {poster && (
              <img
                src={`https://image.tmdb.org/t/p/w500${poster}`}
                alt={`${title} poster`}
                className="aspect-[2/3] w-full rounded-xl object-cover shadow-2xl"
              />
            )}
          </div>

          {/* Movie details */}
          <div className="flex max-w-3xl flex-col gap-3 text-center md:text-left">
            <h1 className="text-3xl font-bold text-yellow-400 sm:text-4xl lg:text-5xl">
              {title}
            </h1>

            {tagline && (
              <p className="text-base font-semibold text-lime-200 sm:text-lg">
                {tagline}
              </p>
            )}

            {/* Rating + Release year */}
            <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
              <span className="flex h-8 items-center rounded-xl bg-gray-600 px-3 font-semibold text-white">
                ⭐ {rating?.toFixed(2)}
              </span>

              {release_date && (
                <span className="flex h-8 items-center rounded-xl bg-gray-600 px-3 font-semibold text-white">
                  {release_date}
                </span>
              )}
            </div>

            {/* Genres */}
            {genres.length > 0 && (
              <p className="text-base text-yellow-200 sm:text-lg">
                {genres.map((genre) => genre.name).join(" · ")}
              </p>
            )}

            {/* Overview */}
            <p className="text-sm leading-6 text-gray-200 sm:text-base lg:text-lg">
              {overview}
            </p>

            {/* Actions */}
            <div className="mt-2 flex flex-wrap justify-center gap-3 md:justify-start">
              {imdb_id && (
                <a
                  href={`https://www.imdb.com/title/${imdb_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-md
                    bg-yellow-400
                    px-5
                    py-2.5
                    font-semibold
                    text-black
                    transition
                    hover:bg-yellow-300
                  "
                >
                  View on IMDb
                </a>
              )}

              <button
                type="button"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-md
                  bg-white/20
                  px-5
                  py-2.5
                  font-semibold
                  text-white
                  backdrop-blur-sm
                  transition
                  hover:bg-white/30
                "
              >
                + Add to Watchlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
