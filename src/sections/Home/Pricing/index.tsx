import { useState } from "react";
import ReactWOW from "react-wow";
import { useTranslation } from "next-i18next";

const Pricing = () => {
  const { t } = useTranslation("common");
  const [plan1, setPlan1] = useState<any[]>(
    t("pricing.pricingplan.plan1", { returnObjects: true })
  );
  const [plan2, setPlan2] = useState<any[]>(
    t("pricing.pricingplan.plan2", { returnObjects: true })
  );
  const [plan3, setPlan3] = useState<any[]>(
    t("pricing.pricingplan.plan3", { returnObjects: true })
  );

  return (
    <section id="pricing" className="a1P sm:a1Q lg:a1u[130px]">
      <div className="a1v xl:a1w">
        <ReactWOW animation="fadeInUp" delay="0.2s">
          <div className=" ac a2J a4 a2_ az md:a1U lg:a3p" data-wow-delay=".2s">
            <span className="title a15 uppercase"> {t("pricing.title")} </span>
            <h2 className="a1B a1I ae[600px] aE a1J a1G a1t dark:text-white sm:a1L md:a1F[50px] md:a3f[60px]">
              {t("pricing.subtitle")}
            </h2>
            <p className="a1B ae[600px] aF aG">{t("pricing.text")}</p>
          </div>
        </ReactWOW>
        <div className="ac a2w a5 a6 am a2T aS a3U dark:a3V">
          <div
            className="a1 a2 a3 a2D a2a a4 a2x a2y a3n dark:a3o"
            style={{ backgroundImage: "url('./images/NoisePattern.svg')" }}
          ></div>
          <div className="a1 a10 a2L/2 a2D a2M/2">
            <svg
              width="1174"
              height="560"
              viewBox="0 0 1174 560"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.4" filter="url(#filter0_f_41_257)">
                <rect
                  x="450.531"
                  y="279"
                  width="272.933"
                  height="328.051"
                  fill="url(#ptext-whitent0_linear_41_257)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_41_257"
                  x="0.531494"
                  y="-171"
                  width="1172.93"
                  height="1228.05"
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
                    result="effect1_foregroundBlur_41_257"
                  />
                </filter>
                <linearGradient
                  id="ptext-whitent0_linear_41_257"
                  x1="425.16"
                  y1="343.693"
                  x2="568.181"
                  y2="660.639"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#ABBCFF" />
                  <stop offset="0.859375" stopColor="#4A6CF7" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="a4 sm:a1S/2 lg:a1S/3">
            <div className="wow fadeInUp a2_ a1y az" data-wow-delay=".2s">
              <div className="a1x dark:a1z[#2E333D]">
                <h3 className="a44 aE a1J a1K a1t dark:text-white capitalize">
                  {t("pricing.pricingplan.title1")}
                </h3>
                <p className="a45 aF aG">
                  {t("pricing.pricingplan.subtitle1")}
                </p>
              </div>
              <div className="a1x a46 dark:a1z[#2E333D]">
                <h3 className="a1V a5 a47 am a48 aE aF a1K a1t dark:text-white">
                  FCFA{" "}
                  <sup className="-a44 text-[34px] sm:text-[55px]">
                    {" "}
                    80 0000{" "}
                  </sup>{" "}
                  /month
                </h3>
                <p className="a1B ae[300px] aF aG">
                  {t("pricing.pricingplan.pricetext")}
                </p>
              </div>
              <div className="a1Z a18 a2_ a1A[60px] aW sm:aa md:aU lg:aa xl:ab">
                {plan1.map((text, idx) => (
                  <p className="a5 a9 aF aG" key={idx}>
                    <span className="af a2Y a1F[#00CB99]" key={idx}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="aL"
                      >
                        <path d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z" />
                      </svg>
                    </span>
                    {text}
                  </p>
                ))}
              </div>
              <a className="aD a9 aS a49 a1N[14px] aU aE aF text-white hover:a16">
                {t("pricing.button")}
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
          </div>
          <div className="a4 dark:a1z[#2E333D] sm:a1S/2 sm:a2c lg:a1S/3 lg:a4a">
            <div className="wow fadeInUp a2_ a1y az" data-wow-delay=".3s">
              <div className="a1x dark:a1z[#2E333D]">
                <h3 className="a44 aE a1J a1K a1t dark:text-white">
                  {t("pricing.pricingplan.title2")}
                </h3>
                <p className="a45 aF aG">
                  {t("pricing.pricingplan.subtitle2")}
                </p>
              </div>
              <div className="a1x a46 dark:a1z[#2E333D]">
                <h3 className="a1V a5 a47 am a48 aE aF a1K a1t dark:text-white">
                  FCFA{" "}
                  <sup className="-a44 text-[38px] sm:text-[55px]">
                    {" "}
                    120 000{" "}
                  </sup>
                  /month
                </h3>
                <p className="a1B ae[300px] aF aG">
                  {t("pricing.pricingplan.pricetext")}
                </p>
              </div>
              <div className="a1Z a18 a2_ a1A[60px] aW sm:aa md:aU lg:aa xl:ab">
                {plan2.map((text, idx) => (
                  <p className="a5 a9 aF aG" key={idx}>
                    <span className="af a2Y a1F[#00CB99]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="aL"
                      >
                        <path d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z" />
                      </svg>
                    </span>
                    {text}
                  </p>
                ))}
              </div>
              <a className="aD a9 aS a16 a1N[14px] aU aE aF text-white hover:a19">
                {t("pricing.button")}
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
          </div>
          <div className="a4 sm:a1S/2 lg:a1S/3">
            <div className="wow fadeInUp a2_ a1y az" data-wow-delay=".4s">
              <div className="a1x dark:a1z[#2E333D]">
                <h3 className="a44 aE a1J a1K a1t dark:text-white">
                  {t("pricing.pricingplan.title3")}
                </h3>
                <p className="a45 aF aG">
                  {t("pricing.pricingplan.subtitle3")}
                </p>
              </div>
              <div className="a1x a46 dark:a1z[#2E333D]">
                <h3 className="a1V a5 a47 am a48 aE aF a1K a1t dark:text-white">
                  FCFA{" "}
                  <sup className="-a44 text-[38px] sm:text-[55px]">
                    {" "}
                    170 000
                  </sup>
                  /month
                </h3>
                <p className="a1B ae[300px] aF aG">
                  {t("pricing.pricingplan.pricetext")}
                </p>
              </div>
              <div className="a1Z a18 a2_ a1A[60px] aW sm:aa md:aU lg:aa xl:ab">
                {plan3.map((text, idx) => (
                  <p className="a5 a9 aF aG" key={idx}>
                    <span className="af a2Y a1F[#00CB99]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="aL"
                      >
                        <path d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z" />
                      </svg>
                    </span>
                    {text}
                  </p>
                ))}
              </div>
              <a className="aD a9 aS a49 a1N[14px] aU aE aF text-white hover:a16">
                {t("pricing.button")}
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
          </div>
        </div>
        <div className="a2K az">
          <h3 className="a1I aE a2Z a1K a1t dark:text-white sm:a1J">
            {t("pricing.propsitiotitle")}
          </h3>
          <p className="aF aG"> {t("pricing.propositiontext")}</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
