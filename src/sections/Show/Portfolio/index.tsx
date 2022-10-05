import { useState, useEffect } from "react";
import ReactWOW from "react-wow";
import ShowCase from "@/components/Show/index";
import { useTranslation } from "next-i18next";
import { FC } from "react";
import { mapImageResources } from "../../../../lib/cloudinary";
import Link from "next/link";

interface PortfolioProps {
  defaultImages: any;
  defaultNextCursor: any;
  folders: any;
}

const Portfolio: FC<PortfolioProps> = ({
  defaultImages,
  defaultNextCursor,
  folders,
}) => {
  const [images, setImages] = useState(defaultImages);
  const [nextCursor, setNextCursor] = useState<any>(defaultNextCursor);
  const [activeFolder, setActiveFolder] = useState("all");

  const handleLoadMore = async (e: any) => {
    const res = await fetch("/api/search", {
      method: "POST",
      body: JSON.stringify({
        expression: `folder="${activeFolder}"`,
        next_cursor: nextCursor,
      }),
    });
    const data: any = await res.json();
    const { resources, next_cursor: updatedNextCursor } = data;
    console.log(data);
    const images = mapImageResources(resources);
    setImages((prev: any) => {
      return [...prev, ...images];
    });
    setNextCursor(updatedNextCursor);
  };

  const handleOnFolderClick = (folderPath: string) => {
    setActiveFolder(folderPath);
    setNextCursor(undefined);
    setImages([]);
  };

  useEffect(() => {
    (async function run() {
      const res = await fetch("/api/search", {
        method: "POST",
        body: JSON.stringify({
          expression:
            activeFolder === "all"
              ? `folder="hotcodes*"`
              : `folder="${activeFolder}*"`,
          next_cursor: nextCursor,
        }),
      });
      const data: any = await res.json();
      const { resources, next_cursor: updatedNextCursor } = data;

      if (resources) {
        const images = mapImageResources(resources);
        setImages((prev: any) => {
          return [...prev, ...images];
        });
        setNextCursor(updatedNextCursor);
      }
    })();
  }, [activeFolder]);

  const [filter, setFilter] = useState([]);
  const [activate, setActivate] = useState("all");

  // useEffect(() => {
  //   setFilter(images);
  // }, []);

  const { t } = useTranslation("common");

  return (
    <section id="portfolio" className="a1P sm:a1Q lg:a1u[130px]">
      <div className="a1v xl:a1w">
        <ReactWOW animation="fadeInUp" delay="0.2s">
          <div className=" ac a1B a2J a1C az md:a1U lg:a3p">
            <span className="title"> {t("portfolio.title")} </span>
            <h2 className="a1B a1I ae[500px] aE a1J a1G a1t dark:text-white sm:a1L md:a1F[50px] md:a3f[60px]">
              {t("portfolio.subtitle")}
            </h2>
            <p className="a1B ae[620px] aF aG">{t("portfolio.text")}</p>
          </div>
        </ReactWOW>
        <div className="a4">
          <ReactWOW animation="fadeInUp" delay="0.2s">
            <div className="portfolio-btn-wrapper  a3q a5 a9 am a3J a3K">
              <button
                className={`a15 a7 aE aF  dark:text-white ${
                  activate === "all"
                    ? "text-blue-color underline"
                    : "text-black"
                }`}
                disabled={activate === "all"}
                onClick={() => {
                  setActivate("all");
                  handleOnFolderClick("all");
                }}
              >
                All
              </button>
              {folders.map((folder: any) => (
                <button
                  key={folder.path}
                  className={`a15 a7 aE aF  dark:text-white capitalize ${
                    activate === folder.name
                      ? "text-blue-color underline"
                      : "text-black"
                  }`}
                  disabled={activate === folder.name}
                  onClick={() => {
                    setActivate(folder.name);
                    handleOnFolderClick(folder.path);
                  }}
                >
                  {folder.name}
                </button>
              ))}
            </div>
          </ReactWOW>
          <ShowCase
            filter={filter}
            setFilter={setFilter}
            activate={activate}
            images={images}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
