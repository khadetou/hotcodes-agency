import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation("footer");
  return (
    <footer
      className="wow fadeInUp a1P sm:a1Q lg:a1u[130px]"
      data-wow-delay=".2s"
    >
      <div className="a1v xl:a1w">
        <div className="a1R a5 a6">
          <div className="a4 a1v sm:a1S/2 md:a1p/12 lg:a1T/12 xl:a1T/12">
            <div className="a1U ae[330px]">
              <Link href="/">
                <button>
                  <span className="hidden dark:block">
                    <Image
                      src="/images/logo/logo-dark.svg"
                      alt="logo"
                      className="hidden dark:block h-[50px]"
                      width={215}
                      height={50}
                    />
                  </span>
                  <span className="dark:hidden">
                    <Image
                      src="/images/logo/logo-light.svg"
                      alt="logo"
                      width={215}
                      height={50}
                    />
                  </span>
                </button>
              </Link>
              <p className="a1M aF aG">{t("textlogo")}</p>
              <div className="a5 a9 a12">
                <a
                  href="#"
                  aria-label="social-link"
                  className="aG hover:aH dark:hover:aI"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="aL"
                  >
                    <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="social-link"
                  className="aG hover:aH dark:hover:aI"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="aL"
                  >
                    <path d="M22.1621 5.65593C21.3986 5.99362 20.589 6.2154 19.7601 6.31393C20.6338 5.79136 21.2878 4.96894 21.6001 3.99993C20.7801 4.48793 19.8811 4.82993 18.9441 5.01493C18.3147 4.34151 17.4804 3.89489 16.571 3.74451C15.6616 3.59413 14.728 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0772 6.14972C11.6979 6.98983 11.6068 7.93171 11.8181 8.82893C10.1552 8.74558 8.52838 8.31345 7.04334 7.56059C5.55829 6.80773 4.24818 5.75098 3.19805 4.45893C2.82634 5.09738 2.63101 5.82315 2.63205 6.56193C2.63205 8.01193 3.37005 9.29293 4.49205 10.0429C3.82806 10.022 3.17868 9.84271 2.59805 9.51993V9.57193C2.59825 10.5376 2.93242 11.4735 3.5439 12.221C4.15538 12.9684 5.00653 13.4814 5.95305 13.6729C5.33667 13.84 4.69036 13.8646 4.06305 13.7449C4.32992 14.5762 4.85006 15.3031 5.55064 15.824C6.25123 16.345 7.09718 16.6337 7.97005 16.6499C7.10253 17.3313 6.10923 17.8349 5.04693 18.1321C3.98464 18.4293 2.87418 18.5142 1.77905 18.3819C3.69075 19.6114 5.91615 20.2641 8.18905 20.2619C15.8821 20.2619 20.0891 13.8889 20.0891 8.36193C20.0891 8.18193 20.0841 7.99993 20.0761 7.82193C20.8949 7.2301 21.6017 6.49695 22.1631 5.65693L22.1621 5.65593Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="social-link"
                  className="aG hover:aH dark:hover:aI"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="aL"
                  >
                    <path d="M6.93994 5.00002C6.93968 5.53046 6.72871 6.03906 6.35345 6.41394C5.97819 6.78883 5.46938 6.99929 4.93894 6.99902C4.40851 6.99876 3.89991 6.78779 3.52502 6.41253C3.15014 6.03727 2.93968 5.52846 2.93994 4.99802C2.94021 4.46759 3.15117 3.95899 3.52644 3.5841C3.9017 3.20922 4.41051 2.99876 4.94094 2.99902C5.47137 2.99929 5.97998 3.21026 6.35486 3.58552C6.72975 3.96078 6.94021 4.46959 6.93994 5.00002ZM6.99994 8.48002H2.99994V21H6.99994V8.48002ZM13.3199 8.48002H9.33994V21H13.2799V14.43C13.2799 10.77 18.0499 10.43 18.0499 14.43V21H21.9999V13.07C21.9999 6.90002 14.9399 7.13002 13.2799 10.16L13.3199 8.48002Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="social-link"
                  className="aG hover:aH dark:hover:aI"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="aL"
                  >
                    <path d="M7.443 5.34961C8.082 5.34961 8.673 5.39961 9.213 5.54761C9.70302 5.63765 10.1708 5.82244 10.59 6.09161C10.984 6.33861 11.279 6.68561 11.475 7.13061C11.672 7.57561 11.77 8.12061 11.77 8.71361C11.77 9.40661 11.623 9.99961 11.279 10.4446C10.984 10.8906 10.492 11.2856 9.902 11.5826C10.738 11.8306 11.377 12.2756 11.77 12.8686C12.164 13.4626 12.41 14.2046 12.41 15.0456C12.41 15.7386 12.262 16.3316 12.016 16.8266C11.77 17.3216 11.377 17.7666 10.934 18.0636C10.4528 18.382 9.92084 18.616 9.361 18.7556C8.771 18.9046 8.181 19.0036 7.591 19.0036H1V5.34961H7.443ZM7.049 10.8896C7.59 10.8896 8.033 10.7416 8.377 10.4946C8.721 10.2476 8.869 9.80161 8.869 9.25761C8.869 8.96061 8.819 8.66361 8.721 8.46661C8.623 8.26861 8.475 8.11961 8.279 7.97161C8.082 7.87261 7.885 7.77361 7.639 7.72461C7.393 7.67461 7.148 7.67461 6.852 7.67461H4V10.8906H7.05L7.049 10.8896ZM7.197 16.7276C7.492 16.7276 7.787 16.6776 8.033 16.6286C8.28138 16.5814 8.51628 16.48 8.721 16.3316C8.92139 16.1868 9.08903 16.0015 9.213 15.7876C9.311 15.5406 9.41 15.2436 9.41 14.8976C9.41 14.2046 9.213 13.7096 8.82 13.3636C8.426 13.0666 7.885 12.9186 7.246 12.9186H4V16.7286H7.197V16.7276ZM16.689 16.6776C17.082 17.0736 17.672 17.2716 18.459 17.2716C19 17.2716 19.492 17.1236 19.885 16.8766C20.279 16.5796 20.525 16.2826 20.623 15.9856H23.033C22.639 17.1726 22.049 18.0136 21.263 18.5576C20.475 19.0526 19.541 19.3496 18.41 19.3496C17.6864 19.3518 16.9688 19.2175 16.295 18.9536C15.6887 18.7262 15.148 18.3524 14.721 17.8656C14.2643 17.4102 13.9267 16.8494 13.738 16.2326C13.492 15.5896 13.393 14.8976 13.393 14.1056C13.393 13.3636 13.492 12.6716 13.738 12.0276C13.9745 11.4077 14.3245 10.8373 14.77 10.3456C15.213 9.90061 15.754 9.50561 16.344 9.25761C17.0007 8.99367 17.7022 8.8592 18.41 8.86161C19.246 8.86161 19.984 9.01061 20.623 9.35661C21.263 9.70261 21.754 10.0986 22.148 10.6926C22.5499 11.2631 22.8494 11.8993 23.033 12.5726C23.131 13.2646 23.18 13.9576 23.131 14.7486H16C16 15.5406 16.295 16.2826 16.689 16.6786V16.6776ZM19.787 11.4836C19.443 11.1376 18.902 10.9396 18.262 10.9396C17.82 10.9396 17.475 11.0386 17.18 11.1866C16.885 11.3356 16.689 11.5336 16.492 11.7316C16.311 11.9229 16.1912 12.1638 16.148 12.4236C16.098 12.6716 16.049 12.8686 16.049 13.0666H20.475C20.377 12.3246 20.131 11.8306 19.787 11.4836ZM15.459 6.28961H20.967V7.62561H15.46V6.28961H15.459Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="a1S/2 a1v md:a1T/12 lg:a1T/12 xl:a1W/12">
            <div className="a1U">
              <h3 className="a1X aE a1Y a1K a1t dark:aI">
                {t("company.title")}
              </h3>
              <ul className="a1Z">
                <li>
                  <a href="#" className="aE aF aG hover:aH dark:hover:aI">
                    {t("company.page1")}
                  </a>
                </li>
                <li>
                  <a href="#" className="aE aF aG hover:aH dark:hover:aI">
                    {t("company.page2")}
                  </a>
                </li>
                <li>
                  <a href="#" className="aE aF aG hover:aH dark:hover:aI">
                    {t("company.page3")}
                    <span className="a1_ aS a16 a20 a21 aE a22 aI">
                      {" "}
                      Hiring{" "}
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="aE aF aG hover:aH dark:hover:aI">
                    {t("company.page4")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="a1S/2 a1v md:a1T/12 lg:a1T/12 xl:a1W/12">
            <div className="a1U">
              <h3 className="a1X aE a1Y a1K a1t dark:aI">
                {t("support.title")}
              </h3>
              <ul className="a1Z">
                <li>
                  <a href="#" className="aE aF aG hover:aH dark:hover:aI">
                    {t("support.page1")}
                  </a>
                </li>
                <li>
                  <a href="#" className="aE aF aG hover:aH dark:hover:aI">
                    {t("support.page2")}
                  </a>
                </li>
                <li>
                  <a href="#" className="aE aF aG hover:aH dark:hover:aI">
                    {t("support.page3")}
                  </a>
                </li>
                <li>
                  <a href="#" className="aE aF aG hover:aH dark:hover:aI">
                    {t("support.page4")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="a4 a1v sm:a1S/2 md:a1p/12 lg:a1T/12 xl:a1W/12">
            <div className="a1U">
              <h3 className="a1X aE a1Y a1K a1t dark:aI">
                {t("getintouch.title")}
              </h3>
              <div className="a23">
                <div>
                  <p className="aE aF aG">{t("getintouch.text1")}</p>
                  <a
                    href="tel:+(1) 123 456 7890"
                    className="aE aF a1t hover:aH dark:aI dark:hover:aH"
                  >
                    +(221) 78 600 45 64
                  </a>
                </div>
                <div>
                  <p className="aE aF aG">{t("getintouch.text2")}</p>
                  <a
                    href="/cdn-cgi/l/email-protection#f0838580809f8284b0949f9d91999ede939f9d"
                    className="aE aF a1t hover:aH dark:aI dark:hover:aH"
                  >
                    <span
                      className="__cf_email__"
                      data-cfemail="a8dbddd8d8c7dadce8ccc7c5c9c1c686cbc7c5"
                    >
                      contact@hotcodesagency.com
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="a4 a1v sm:a1S/2 md:a1p/12 lg:a1p/12 xl:a1T/12">
            <div className="a1U">
              <h3 className="a1X aE a1Y a1K a1t dark:aI">
                {t("newsletter.title")}
              </h3>
              <p className="a1V aE aF aG">{t("newsletter.text")}</p>
              <form className="ac">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder={t("newsletter.email") as string}
                  className="a24 a4 aS aT a17 a25 a26 aF aG a27 focus:border-blue-color
                   dark:border-transparent dark:bg-[#2C3443]"
                />
                <button className="a1 a29 a2 a5 a2a a2b a9 am a2c aG dark:border-[#1F2633]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    className="aL"
                  >
                    <path d="M3.1175 1.17367L18.5025 9.63533C18.5678 9.6713 18.6223 9.72414 18.6602 9.78834C18.6982 9.85255 18.7182 9.92576 18.7182 10.0003C18.7182 10.0749 18.6982 10.1481 18.6602 10.2123C18.6223 10.2765 18.5678 10.3294 18.5025 10.3653L3.1175 18.827C3.05406 18.8619 2.98262 18.8797 2.91023 18.8785C2.83783 18.8774 2.76698 18.8575 2.70465 18.8206C2.64232 18.7838 2.59066 18.7313 2.55478 18.6684C2.51889 18.6056 2.50001 18.5344 2.5 18.462V1.53867C2.50001 1.46626 2.51889 1.39511 2.55478 1.33222C2.59066 1.26934 2.64232 1.21689 2.70465 1.18005C2.76698 1.1432 2.83783 1.12324 2.91023 1.12212C2.98262 1.121 3.05406 1.13877 3.1175 1.17367ZM4.16667 10.8337V16.3478L15.7083 10.0003L4.16667 3.65283V9.167H8.33333V10.8337H4.16667Z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="dark:a1z[#2E333D] md:a2d">
          <div className="a1R a5 a6 a2e md:a2f">
            <div className="a4 a1v md:a1S/2 lg:a1W/3">
              <div className="a1I a5 a9 am a12 a1x aV dark:a1z[#2E333D] md:a2g md:as md:a2h md:a2i">
                <a href="#" className="aE aF aG hover:aH">
                  {t("buttom.lang")}
                </a>
                <a href="#" className="aE aF aG hover:aH">
                  {t("buttom.privacy")}
                </a>
                <a href="#" className="aE aF aG hover:aH">
                  {t("buttom.support")}
                </a>
              </div>
            </div>
            <div className="a4 a1v md:a1S/2 lg:a1S/3">
              <div>
                <p className="az aE aF aG lg:a2j">{t("buttom.rights")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
