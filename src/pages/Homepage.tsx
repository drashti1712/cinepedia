import { useState, useCallback } from "react";
import Gallery from "../components/Gallery/Gallery.tsx";
import type { MovieResponse } from "../types.ts";
import Search from "../components/Search/Search.tsx";
import {
  getTrendingMovies,
  getPopularMovies,
  getTopMovies,
  searchMovies,
} from "../services/movieApi.ts";
import useFetch from "../hooks/useFetch.tsx";

export default function Homepage() {
  const [searchData, setSearchData] = useState<string>("");

  const trending = useFetch<MovieResponse>(getTrendingMovies, !searchData);
  const popular = useFetch<MovieResponse>(getPopularMovies, !searchData);
  const top = useFetch<MovieResponse>(getTopMovies, !searchData);

  const fetchSearchResults = useCallback(() => {
    if (!searchData) {
      throw new Error("Please enter search query!");
    }
    return searchMovies(searchData);
  }, [searchData]);

  const searchResults = useFetch<MovieResponse>(
    fetchSearchResults,
    Boolean(searchData),
  );

  return (
    <main className="bg-gray-950">
      <Search setSearchData={setSearchData} />
      {searchData ? (
        <Gallery
          data={searchResults?.data?.results ?? []}
          heading="Search Results"
          loading={searchResults?.loading}
          error={searchResults?.error}
          type="grid"
        />
      ) : (
        <>
          <Gallery
            data={trending?.data?.results ?? []}
            heading="Now Playing"
            loading={trending?.loading}
            error={trending?.error}
            type="carousel"
          />
          <Gallery
            data={top?.data?.results ?? []}
            heading="Top Rated"
            loading={top?.loading}
            error={top?.error}
            type="carousel"
          />
          <Gallery
            data={popular?.data?.results ?? []}
            heading="Popular"
            loading={popular?.loading}
            error={popular?.error}
            type="carousel"
          />
        </>
      )}
    </main>
  );
}
