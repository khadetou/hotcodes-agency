import { useState, useEffect, FC } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ShowCaseProps {
  filter: never[];
  setFilter: React.Dispatch<React.SetStateAction<never[]>>;
  activate: string;
  setActivate: React.Dispatch<React.SetStateAction<string>>;
  cards: any;
}
const ShowCase: FC<ShowCaseProps> = ({
  filter,
  setFilter,
  activate,
  setActivate,
  cards,
}) => {
  useEffect(() => {
    if (activate === "all") {
      setFilter(cards);
      return;
    }
    const filtered = cards.filter((card: any) => card.id.includes(activate));

    setFilter(filtered);
  }, [cards, activate]);

  return (
    <motion.div
      layout
      className="-mx-4 px-4 grid grid-cols-[repeat(1,_minmax(250px,_3fr))] md:grid-cols-[repeat(2,_minmax(250px,_3fr))] lg:grid-cols-[repeat(3,_minmax(250px,_3fr))] gap-4 gap-y-8 "
    >
      <AnimatePresence>
        {filter.map(({ img, text, title }: any) => (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            layout
          >
            <div className="relative group overflow-hidden">
              <div className=" absolute bottom-8 left-5 flex translate-y-8 items-center justify-between rounded-[0.25rem] py-5 bg-black bg-opacity-30 px-5 opacity-0 backdrop-blur-[30px] sm:left-8 sm:px-6 md:left-5 md:px-4 lg:px-6 xl:left-8 duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="a3O a1z[#e9e9e9] a3P a3Q sm:a2X lg:a3Q xl:a2X">
                  <h3 className="font-heading aF a1K aI sm:a2Z lg:aF xl:a2Z">
                    {title}
                  </h3>
                  <p className="a1O a1F[#d9d9d9] sm:aF lg:a1O xl:aF">{text}</p>
                </div>
                <div className="a3R sm:a25 lg:a3R xl:a25">
                  <a className="dark:hover:us-bg-primary a5 a2o a2p a9 am a1j a_[#f8f8f8] a3S[15%] aI hover:a16 hover:a3r dark:hover:a3r">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      className="aL"
                    >
                      <path d="M13.4767 9.16689L9.00671 4.69689L10.185 3.51855L16.6667 10.0002L10.185 16.4819L9.00671 15.3036L13.4767 10.8336H3.33337V9.16689H13.4767Z" />
                    </svg>
                  </a>
                </div>
              </div>
              <img
                src={img}
                className="mx-auto w-full h-[30vh] object-cover rounded-2xl mb-4"
                alt=""
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default ShowCase;
