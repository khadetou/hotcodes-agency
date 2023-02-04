import { useEffect, FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import arrayShuffle from "array-shuffle";
import Link from "next/link";
import { useTranslation } from "next-i18next";

interface ShowCaseProps {
  filter: never[];
  setFilter: React.Dispatch<React.SetStateAction<never[]>>;
  activate: string;
  images?: any;
}
const ShowCase: FC<ShowCaseProps> = ({
  filter,
  setFilter,
  activate,
  images,
}) => {
  useEffect(() => {
    const filtered = images.filter((image: any) =>
      image.title.includes("shot")
    );
    let shuffled: any = arrayShuffle(filtered);
    let sliced = shuffled;
    if (filtered.length >= 7) {
      sliced = shuffled.slice(0, 6);
    }
    setFilter(sliced);
  }, [images, activate]);

  const { t } = useTranslation("common");

  return (
    <motion.div
      layout
      className="-mx-4 px-4 grid grid-cols-[repeat(1,_minmax(250px,_3fr))] md:grid-cols-[repeat(2,_minmax(250px,_3fr))] lg:grid-cols-[repeat(3,_minmax(250px,_3fr))] gap-4 gap-y-8 "
    >
      <AnimatePresence>
        {filter.map(({ id, image, title, width, height }: any) => {
          let titles = title.split("/");
          let ids = titles.join("@");
          return (
            <motion.div
              key={id}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              layout
              className="dark:text-white dark:bg-opacity-5 dark:bg-white backdrop-blur-[6px] text-blue-color bg:text-white bg-white bg-opacity-5 rounded-xl py-[30px] px-[20px] mb-[88px] duration- border-black dark:border-white border dark:border-opacity-20 border-opacity-5 shadow-xl"
            >
              <div className="flex flex-col text-black">
                <div className="">
                  <h1 className="font-bold text-2xl my-1 dark:text-white capitalize">
                    {titles[titles.length - 2].includes("page")
                      ? t("portfolio.categoryCard.title1")
                      : titles[titles.length - 2]}
                  </h1>
                </div>
                <div className="mb-5 font-medium">
                  <p className="text-base dark:text-white ">
                    {titles[titles.length - 2].includes("page")
                      ? t("portfolio.categoryCard.text1")
                      : t("portfolio.categoryCard.title2")}
                  </p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg">
                <div className=" absolute bottom-8 left-5 flex translate-y-8 z-50 items-center justify-between rounded-[0.25rem] py-5 bg-black bg-opacity-30 px-5 opacity-0 backdrop-blur-[30px] sm:left-8 sm:px-6 md:left-5 md:px-4 lg:px-6 xl:left-8 duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="a3O a1z[#e9e9e9] a3P a3Q sm:a2X lg:a3Q xl:a2X">
                    <h3 className="font-heading aF a1K aI sm:a2Z lg:aF xl:a2Z capitalize">
                      {titles[titles.length - 2].includes("page")
                        ? t("portfolio.categoryCard.title1")
                        : titles[titles.length - 2]}
                    </h3>
                    <p className="a1O a1F[#d9d9d9] sm:aF lg:a1O xl:aF">
                      {titles[titles.length - 2].includes("page")
                        ? t("portfolio.categoryCard.title1")
                        : t("portfolio.categoryCard.text2")}
                    </p>
                  </div>
                  <div className="a3R sm:a25 lg:a3R xl:a25">
                    <Link
                      href={`/show/${ids}`}
                      className="dark:hover:us-bg-primary a5 a2o a2p a9 am a1j a_[#f8f8f8] a3S[15%] aI hover:a16 hover:a3r dark:hover:a3r"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        className="aL"
                      >
                        <path d="M13.4767 9.16689L9.00671 4.69689L10.185 3.51855L16.6667 10.0002L10.185 16.4819L9.00671 15.3036L13.4767 10.8336H3.33337V9.16689H13.4767Z" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <Image src={image} width={width} height={height} alt="shots" />
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
};

export default ShowCase;
