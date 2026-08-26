import { useState, useEffect, useCallback, useRef } from "react";
import Gallery from "../components/Gallery/Gallery.tsx";
import type { Movie, MovieResponse } from "../types.ts";
import Search from "../components/Search/Search.tsx";
import {
  getTrendingMovies,
  getPopularMovies,
  getTopMovies,
  searchMovies,
} from "../services/movieApi.ts";
import useFetch from "../hooks/useFetch.tsx";
import { useSearchParams } from "react-router";

export default function Homepage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") ?? "";
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const trending = useFetch<MovieResponse>(getTrendingMovies, !searchQuery);
  const popular = useFetch<MovieResponse>(getPopularMovies, !searchQuery);
  const top = useFetch<MovieResponse>(getTopMovies, !searchQuery);

  const fetchSearchResults = useCallback(() => {
    if (!searchQuery) {
      throw new Error("Please enter search query!");
    }
    return searchMovies(searchQuery);
  }, [searchQuery]);

  // this is internally a useEffect only
  const searchResults = useFetch<MovieResponse>(
    fetchSearchResults,
    Boolean(searchQuery),
  );

  /* 
  searchResults display the latest results.
  searchResults = {
    page: 1,
    results: [movie1, movie2, ...],
    total_pages: 10,
    total_results: 200
  }
  */

  const loadNextPage = useCallback(async () => {
    if (loadingMore) return;
    const totalPages = searchResults.data?.total_pages ?? 0;
    if (currentPage >= totalPages) {
      return;
    }
    try {
      setLoadingMore(true);
      const nextPage = currentPage + 1;
      const response = await searchMovies(searchQuery, nextPage);
      setMovies((prevMovies) => {
        return [...prevMovies, ...response.results];
      });
      setCurrentPage(response.page);
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingMore(false);
    }
  }, [loadingMore, currentPage, searchResults.data?.total_pages, searchQuery]);

  useEffect(() => {
    if (!searchResults.data) {
      return;
    }
    setCurrentPage(searchResults.data.page);
    setMovies(searchResults.data?.results);
  }, [searchResults.data]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadNextPage();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "300px",
      },
    );
    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [searchQuery, loadNextPage]);

  const noSearchResults = movies.length === 0 && <p>No movies found!</p>;

  return (
    <main className="bg-gray-950">
      <Search
        key={searchQuery}
        query={searchQuery}
        onSearch={(query: string) => setSearchParams({ q: query })}
      />
      {searchQuery && movies.length > 0 ? (
        <>
          <Gallery
            data={movies}
            heading="Search Results"
            loading={searchResults?.loading}
            error={searchResults?.error}
            type="grid"
          />
          <div
            ref={loadMoreRef}
            className="flex h-20 items-center justify-center text-gray-400"
          >
            {loadingMore && "Loading more movies..."}
          </div>
        </>
      ) : (
        <>
          {noSearchResults}
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
