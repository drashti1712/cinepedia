import type { WatchlistMovie } from "../types";

const WATCHLIST_KEY = "cinepedia-watchlist";

export const getWatchlist = (): WatchlistMovie[] => {
  const stored = localStorage.getItem(WATCHLIST_KEY);
  if (!stored) return [];
  return JSON.parse(stored);
};

export const addToWatchlist = (movie: WatchlistMovie) => {
  const watchlist = getWatchlist();
  const alreadyExists = watchlist.some((item) => item.id === movie.id);
  if (alreadyExists) return watchlist;
  const updatedWatchlist = [...watchlist, movie];
  localStorage.setItem(WATCHLIST_KEY, JSON.stringify(updatedWatchlist));
  return updatedWatchlist;
};

export const removeFromWatchlist = (id: number) => {
  const watchlist = getWatchlist();
  const updatedWatchlist = watchlist.filter((movie) => movie.id !== id);
  localStorage.setItem(WATCHLIST_KEY, JSON.stringify(updatedWatchlist));
  return updatedWatchlist;
};

export const isInWatchlist = (id: number) => {
  const watchlist = getWatchlist();
  return watchlist.some((movie) => movie.id === id);
};
