import { useEffect, useRef, useState } from "react";

const BASE_URL = "https://api.tvmaze.com";

export const useShows = (searchQuery) => {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // Guards against a slow, stale request overwriting a newer one
  const requestId = useRef(0);

  useEffect(() => {
    const currentRequestId = ++requestId.current;

    const fetchShows = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const url =
          searchQuery && searchQuery.trim() !== ""
            ? `${BASE_URL}/search/shows?q=${encodeURIComponent(searchQuery)}`
            : `${BASE_URL}/shows`;

        const res = await fetch(url);
        if (!res.ok) throw new Error("Request failed");

        const data = await res.json();

        // Ignore the result if a newer request has since fired
        if (currentRequestId !== requestId.current) return;

        // /search/shows wraps each result as { score, show }
        const normalized =
          searchQuery && searchQuery.trim() !== ""
            ? data.map((item) => item.show)
            : data;

        setShows(normalized);
      } catch (err) {
        if (currentRequestId === requestId.current) {
          setIsError(true);
        }
      } finally {
        if (currentRequestId === requestId.current) {
          setIsLoading(false);
        }
      }
    };

    fetchShows();
  }, [searchQuery]);

  return { shows, isLoading, isError };
};