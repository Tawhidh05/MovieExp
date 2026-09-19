import { useState } from "react";
import { useSearchParams } from "react-router";
import Cards from "../components/Cards";
import MovieModal from "../components/MovieModal";
import { useShows } from "../hooks/useShows";

const Movies = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const { shows, isLoading, isError } = useShows(query);
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <div className="px-8 py-8">
      {isLoading && <p className="text-center py-10">Loading shows...</p>}

      {isError && (
        <p className="text-center py-10 text-red-500">
          Something went wrong fetching shows.
        </p>
      )}

      {!isLoading && !isError && shows.length === 0 && (
        <p className="text-center py-10 text-gray-500">
          No results for “{query}”.
        </p>
      )}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {shows.map((show) => (
          <Cards key={show.id} show={show} onSeeDetails={setSelectedShow} />
        ))}
      </div>

      <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />
    </div>
  );
};

export default Movies;