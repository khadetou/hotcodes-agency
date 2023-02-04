import React from "react";
import Image from "next/image";
import Usa from "/public/images/flags/usa.svg";
import Fr from "/public/images/flags/france.svg";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";

const LangDropdown = () => {
  const { pathname, locale } = useRouter();
  return (
    <div className="inline-flex items-stretch rounded-md group">
      <div className="px-2 py-2 text-sm flex justify-between">
        <span className={`w-[20px] ${locale === "fr" && "hidden"}`}>
          <Image src={Usa} alt="Usa flag" />
        </span>
        <span className={`w-[20px] ${locale === "en" && "hidden"}`}>
          <Image src={Fr} alt="France flag" />
        </span>
      </div>

      <div className="relative">
        <button
          type="button"
          className="inline-flex items-center justify-center h-full text-gray font-lexend group-hover:text-blue-color dark:group-hover:text-white "
        >
          {locale === "en" ? "En" : "Fr"}
          <span className="pl-3">
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              className="fill-current"
            >
              <path d="M6.54564 5.09128L11.6369 0L13.0913 1.45436L6.54564 8L0 1.45436L1.45436 0L6.54564 5.09128Z" />
            </svg>
          </span>
        </button>

        <div
          className="absolute -right-[65px] md:right-0 z-10 w-56 mt-2 bg-white border border-gray-100 shadow-lg origin-top-right rounded-md dark:lg:border-transparent dark:lg:bg-[#2C3443] transition-all duration-300 invisible lg:absolute top-[120%]  lg:rounded lg:border lg:bg-white lg:text-left opacity-0 group-hover:visible group-hover:top-full  group-hover:opacity-100 "
          role="menu"
        >
          <div className="p-2">
            <Link href={pathname} locale="en">
              <div className="flex cursor-pointer px-2 py-2 text-gray font-lexend text-grag items-center hover:translate-x-2 transition-all ease-in-out duration-300 dark:hover:text-white hover:text-blue-color ">
                <span className="w-[20px] mr-2">
                  <Image src={Usa} alt="Usa flag" />
                </span>
                <span>En</span>

                <span className="w-3 ml-auto">
                  <AiOutlineCheckCircle
                    className={`text-green-500 ${locale === "fr" && "hidden"}`}
                  />
                </span>
              </div>
            </Link>

            <Link href={pathname} locale="fr">
              <div className="px-2 py-2 font-lexend text-gray text-gray-500 flex cursor-pointer rounded-lg items-center hover:translate-x-2 transition-all ease-in-out duration-300 dark:hover:text-white hover:text-blue-color ">
                <span className="w-[20px] mr-2">
                  <Image src={Fr} alt="france flag" />
                </span>
                <span>Fr</span>
                <span className="w-3  ml-auto">
                  <AiOutlineCheckCircle
                    className={`text-green-500 ${locale === "en" && "hidden"}`}
                  />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LangDropdown;
