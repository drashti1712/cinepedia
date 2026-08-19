const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/";

const CUSTOM_BASE_URL = {
  TRENDING_MOVIES: `${BASE_URL}discover/movie`,
  POPULAR_MOVIES: `${BASE_URL}movie/upcoming`,
  TOP_MOVIES: `${BASE_URL}movie/top_rated`,
  SEARCH_MOVIES: `${BASE_URL}search/movie`,
  MOVIE_DETAILS: `${BASE_URL}movie/`,
};

export const getTrendingMovies = async () => {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });

  const response = await fetch(`${CUSTOM_BASE_URL.TRENDING_MOVIES}?${params}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch trending movies: ${response.status}`);
  }

  return response.json();
};

export const getPopularMovies = async () => {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });

  const response = await fetch(`${CUSTOM_BASE_URL.POPULAR_MOVIES}?${params}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch popular movies: ${response.status}`);
  }

  return response.json();
};

export const getTopMovies = async () => {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });

  const response = await fetch(`${CUSTOM_BASE_URL.TOP_MOVIES}?${params}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch top movies: ${response.status}`);
  }

  return response.json();
};

export const searchMovies = async (query: string) => {
  const params = new URLSearchParams({
    query,
    api_key: API_KEY,
  });

  const response = await fetch(`${CUSTOM_BASE_URL.SEARCH_MOVIES}?${params}`);

  if (!response.ok) {
    throw new Error(`Failed to search movies: ${response.status}`);
  }

  return response.json();
};

export const getMovieDetails = async (id: string) => {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });

  const response = await fetch(
    `${CUSTOM_BASE_URL.MOVIE_DETAILS}${id}?${params}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch movie details: ${response.status}`);
  }

  return response.json();
};

export const getSimilarMovies = async (id: string) => {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });

  const response = await fetch(
    `${CUSTOM_BASE_URL.MOVIE_DETAILS}${id}/similar?${params}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch similar movies: ${response.status}`);
  }

  return response.json();
};
