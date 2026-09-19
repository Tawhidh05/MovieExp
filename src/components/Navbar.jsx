import { Clapperboard, Search } from "lucide-react";
import { Link, useLocation, useSearchParams } from "react-router";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(searchParams.get("q") || "");


  useEffect(() => {
    setInputValue(searchParams.get("q") || "");
  }, [searchParams]);


  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = searchParams.get("q") || "";
      if (inputValue === current) return;

      const next = new URLSearchParams(searchParams);
      if (inputValue.trim()) {
        next.set("q", inputValue);
      } else {
        next.delete("q");
      }
      setSearchParams(next, { replace: true });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 400);

    return () => clearTimeout(timeout);
  }, [inputValue]);

  return (
    <div className="flex shadow-md h-14 px-4 items-center">
      <Link to="/" className="flex gap-2 justify-center items-center pl-2">
        <Clapperboard />
        <h2 className="hidden sm:block text-md md:text-lg lg:text-2xl font-semibold">
          MovieExplorer
        </h2>
      </Link>

      <div className="flex gap-2 justify-center items-center pr-2 ml-auto">
        {location.pathname === "/movies" ? (
          <div className="flex gap-2 items-center bg-white border rounded-md px-3 py-1.5 w-56 sm:w-72">
            <Search size={18} strokeWidth={1.5} className="text-gray-400" />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search for ..."
              className="outline-none w-full text-sm bg-transparent"
            />
          </div>
        ) : (
          <Link to="/movies">
            <h2 className="md:text-sm lg:text-md">Shows</h2>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;