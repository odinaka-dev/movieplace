// react imports
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

// the components starts here
const HomeMovies = () => {
  const [FilterState, setFilterState] = useState("batman");
  // console.log(FilterState);
  return (
    <section className="max-w-[92%] mx-auto py-8">
      <HeroHeader FilterState={FilterState} setFilterState={setFilterState} />
      <Movies FilterState={FilterState} />
    </section>
  );
};

// the header -all movies, the search bar and the filter functionality
const HeroHeader = ({ FilterState, setFilterState }) => {
  // search functionality
  return (
    <React.Fragment>
      <section className="">
        <div className="flex justify-between gap-2 items-center">
          <h1 className="text-2xl font-medium capitalize">all movies</h1>
          {/* The search bar functionality */}
          <div className="search_bar">
            <div className="flex gap-2 items-center bg-red-100 py-2 px-4">
              <FaSearch className="text-[14px]" />
              <input
                type="search"
                placeholder="Search your favorite movies"
                value={FilterState}
                onChange={(e) => {
                  setFilterState(e.target.value);
                }}
                className="bg-none appearance-none border-[0px] w-[200px] sm:w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px] outline-none"
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

const Movies = ({ FilterState }) => {
  const [fetchMovies, setFetchMovies] = useState([]);
  const [fetchError, setFetchError] = useState("");

  const fetchingMovies = async () => {
    try {
      const response = await axios.get("https://www.omdbapi.com/", {
        params: {
          apikey: "55b26e86",
          s: FilterState,
        },
      });
      if (response.status === 200) {
        setFetchMovies(response.data.Search || []);
      } else {
        setFetchMovies([]);
        setFetchError("No movies found");
      }
    } catch (err) {
      console.error("Error fetching movies:", err);
      setFetchMovies([]);
      setFetchError("Failed to fetch movies");
    }
  };

  useEffect(() => {
    fetchingMovies();
  }, [FilterState]);

  return (
    <section>
      <div className="movies_list grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8 py-8 border-b border-b-[#989898]">
        {fetchMovies.length > 0 ? (
          fetchMovies.map((search) => (
            <div key={search.imdbID} className="mt-8 shadow-lg rounded-sm">
              <img
                src={search.Poster}
                alt={search.Title}
                width="100%"
                className="rounded-md"
              />
              <div className="text-lg cursor-pointer font-normal pt-2 pb-4 px-2 hover:text-red-800 duration-300">
                <p>{search.Title}</p>
                <p>
                  Released:{" "}
                  <span className="text-yellow-700 font-semibold text-xl">
                    {search.Year}
                  </span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-red-600 text-center font-semibold py-4">
            {fetchError}
          </p>
        )}
      </div>
    </section>
  );
};

export default HomeMovies;
