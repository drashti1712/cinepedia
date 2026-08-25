import { useState, useEffect } from "react";

export default function useFetch<T>(
  fetchFunction: () => Promise<T>,
  enabled: boolean,
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchFunction();
        // TODO: we get data in response.results
        setData(response);
      } catch (err) {
        console.log("useFetch Hook: ", err);
        setError("Something went wrong! Please try again..");
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [fetchFunction, enabled]);

  return { data, error, loading };
}
