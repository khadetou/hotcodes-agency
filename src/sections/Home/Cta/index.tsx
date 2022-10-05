import React from "react";
import { useTranslation } from "next-i18next";

const Cta = () => {
  const { t } = useTranslation("common");
  return (
    <section id="contact" className="a1P sm:a1Q lg:a1u[130px]">
      <div className="a1v xl:a1w">
        <div
          className="wow fadeInUp ac a2T a2x a2y a1N[60px] aa a3U dark:a3V sm:a33[70px]"
          data-wow-delay=".2s"
        >
          <div
            className="a1 a2 a3 a2D a2a a4 a2x a2y a3n dark:a3o"
            style={{ backgroundImage: "url('./images/NoisePattern.svg')" }}
          ></div>
          <div className="a1 a10 a2L/2 a2D a2M/2">
            <svg
              width="1215"
              height="259"
              viewBox="0 0 1215 259"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.6" filter="url(#filter0_f_63_363)">
                <rect
                  x="450"
                  y="189"
                  width="315"
                  height="378"
                  fill="url(#paint0_linear_63_363)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_63_363"
                  x="0"
                  y="-261"
                  width="1215"
                  height="1278"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="225"
                    result="effect1_foregroundBlur_63_363"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_63_363"
                  x1="420.718"
                  y1="263.543"
                  x2="585.338"
                  y2="628.947"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#ABBCFF" />
                  <stop offset="0.859375" stopColor="#4A6CF7" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="a1R a5 a6 a9">
            <div className="a4 a1v lg:a1W/3">
              <div className="a1B a1M ae[550px] az lg:a3a lg:a2g lg:aW">
                <h2 className="a2W aE a2Z a1G a2E a1t dark:text-white sm:a1F[38px]">
                  {t("cta.title")}
                </h2>
                <p className="aF aG">{t("cta.text")}</p>
              </div>
            </div>
            <div className="a4 a1v lg:a1S/3">
              <div className="az lg:a2j">
                <a className="aD a9 aS a16 a1N[14px] aU aE aF aI hover:a19">
                  {t("cta.button")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
