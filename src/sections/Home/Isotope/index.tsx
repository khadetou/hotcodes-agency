import React, { FC, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Isotope: FC<{ movies: any }> = ({ movies }) => {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  const { results } = movies;

  useEffect(() => {
    setPopular(results);
    setFiltered(results);
  }, [results]);

  return (
    <div className="my-[5%] mx-auto max-w-[1320px] px-3">
      <Filter
        popular={popular}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
        setFiltered={setFiltered}
      />
      <motion.div
        layout
        className="popular-movies grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4 gap-y-8 "
      >
        <AnimatePresence>
          {filtered.map((movie: any) => (
            <motion.div
            // animate={{ opacity: 1 }}
            // initial={{ opacity: 0 }}
            // exit={{ opacity: 0 }}
            //  layout
            >
              <div>
                <h2 className="text-white text-center text-[0.8rem]">
                  {movie.title}
                </h2>
                <img
                  src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
                  className="mx-auto w-full h-[30vh] object-cover rounded-2xl mb-4"
                  alt=""
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Isotope;

const Movie: FC<{ movie: any }> = ({ movie }) => {
  return (
    <motion.div
      // animate={{ opacity: 1 }}
      // initial={{ opacity: 0 }}
      // exit={{ opacity: 0 }}
      layout
    >
      <div>
        <h2 className="text-white text-center text-[0.8rem]">{movie.title}</h2>
        <img
          src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
          className="mx-auto w-full h-[30vh] object-cover rounded-2xl mb-4"
          alt=""
        />
      </div>
    </motion.div>
  );
};

interface FilterProps {
  popular: never[];
  setFiltered: React.Dispatch<React.SetStateAction<never[]>>;
  activeGenre?: number;
  setActiveGenre: React.Dispatch<React.SetStateAction<number>>;
}
const Filter: FC<FilterProps> = ({
  activeGenre,
  popular,
  setActiveGenre,
  setFiltered,
}) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie: any) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre]);

  return (
    <div>
      <button
        className={`mr-8 min-w-[5rem] py-2 px-4   rounded-2xl border-[2px] border-[rgb(28,36,53)] font-bold ${
          activeGenre === 0
            ? "bg-[rgb(64,98,168)] text-white"
            : "text-blue-color bg-white"
        }`}
        onClick={() => setActiveGenre(0)}
      >
        All
      </button>
      <button
        className={`mr-8 min-w-[5rem] py-2 px-4  rounded-2xl border-[2px] border-[rgb(28,36,53)] font-bold ${
          activeGenre === 35
            ? "bg-[rgb(64,98,168)] text-white"
            : "bg-white text-blue-color"
        }`}
        onClick={() => setActiveGenre(35)}
      >
        Comedy
      </button>
      <button
        className={`mr-8 min-w-[5rem] py-2 px-4  rounded-2xl border-[2px] border-[rgb(28,36,53)] font-bold ${
          activeGenre === 28
            ? "bg-[rgb(64,98,168)] text-white"
            : "bg-white text-blue-color"
        }`}
        onClick={() => setActiveGenre(28)}
      >
        Action
      </button>
    </div>
  );
};
