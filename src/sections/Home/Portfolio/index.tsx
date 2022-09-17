import { useState, useEffect, MouseEvent } from "react";
import ReactWOW from "react-wow";
import Image from "next/image";
import ShowCase from "@/components/Portfolio/ShowCase";

const cards: any = [
  {
    id: "ecommerce",
    img: "./images/portfolio/image-1.jpg",
    title: "Photo Retouching",
    text: "Branded Ecommerce",
  },
  {
    id: "ecommerce",
    img: "./images/portfolio/image-2.jpg",
    title: "Photo Retouching",
    text: "Branded Ecommerce",
  },
  {
    id: "ecommerce",
    img: "./images/portfolio/image-3.jpg",
    title: "Photo Retouching",
    text: "Branded Ecommerce",
  },
  {
    id: "marketing",
    img: "./images/portfolio/image-4.jpg",
    title: "Photo Retouching",
    text: "Branded Ecommerce",
  },
  {
    id: "marketing",
    img: "./images/portfolio/image-5.jpg",
    title: "Photo Retouching",
    text: "Branded Ecommerce",
  },
  {
    id: "marketing",
    img: "./images/portfolio/image-6.jpg",
    title: "Photo Retouching",
    text: "Branded Ecommerce",
  },
  {
    id: "marketing",
    img: "./images/portfolio/image-9.jpg",
    title: "Photo Retouching",
    text: "Branded Ecommerce",
  },
  {
    id: "branding",
    img: "./images/portfolio/image-7.jpg",
    title: "Photo Retouching",
    text: "Branded Ecommerce",
  },
  {
    id: "branding",
    img: "./images/portfolio/image-8.jpg",
    title: "Photo Retouching",
    text: "Branded Ecommerce",
  },
  {
    id: "branding",
    img: "./images/portfolio/image-9.jpg",
    title: "Photo Retouching",
    text: "Branded Ecommerce",
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState([]);
  const [activate, setActivate] = useState("all");
  useEffect(() => {
    setFilter(cards);
  }, []);

  return (
    <section id="portfolio" className="a1P sm:a1Q lg:a1u[130px]">
      <div className="a1v xl:a1w">
        <ReactWOW animation="fadeInUp" delay="0.2s">
          <div className=" ac a1B a2J a1C az md:a1U lg:a3p">
            <span className="title"> PORTFOLIO </span>
            <h2 className="a1B a1I ae[500px] aE a1J a1G a1t dark:text-white sm:a1L md:a1F[50px] md:a3f[60px]">
              Explore Our Latest Case Studies
            </h2>
            <p className="a1B ae[620px] aF aG">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
              ante in maximus.
            </p>
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
                onClick={() => setActivate("all")}
                data-filter="*"
              >
                All
              </button>
              <button
                className={`a15 a7 aE aF  dark:text-white ${
                  activate === "branding"
                    ? "text-blue-color underline"
                    : "text-black dark:text-white"
                }`}
                data-filter=".branding"
                onClick={() => setActivate("branding")}
              >
                Branding Strategy
              </button>
              <button
                className={`a15 a7 aE aF  dark:text-white ${
                  activate === "marketing"
                    ? "text-blue-color underline"
                    : "text-black"
                }`}
                data-filter=".digital"
                onClick={() => setActivate("marketing")}
              >
                Digital Experiences
              </button>
              <button
                className={`a15 a7 aE aF  dark:text-white ${
                  activate === "ecommerce"
                    ? "text-blue-color underline"
                    : "text-black"
                }`}
                data-filter=".ecom"
                onClick={() => setActivate("ecommerce")}
              >
                eCommerce
              </button>
            </div>
          </ReactWOW>
          <ShowCase
            filter={filter}
            setFilter={setFilter}
            activate={activate}
            setActivate={setActivate}
            cards={cards}
          />
          <ReactWOW animation="fadeInUp" delay="0.2s">
            <div className="a4 a2_ az">
              <a
                //   href="javascript:void(0)"
                className="aD a9 aS a16 a1N[14px] aU aE aF aI hover:a19"
              >
                See More Projects
                <span className="aK">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </ReactWOW>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
