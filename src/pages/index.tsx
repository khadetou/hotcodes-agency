import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import About from "@/sections/Home/About/About";
import Banner from "@/sections/Home/Banner";
import Blog from "@/sections/Home/Blog";
import Cta from "@/sections/Home/Cta";
import Features from "@/sections/Home/Features";
import Portfolio from "@/sections/Home/Portfolio";
import Pricing from "@/sections/Home/Pricing";
import Support from "@/sections/Home/Support/index";
import Team from "@/sections/Home/Team";
import type { GetServerSideProps, NextPage } from "next";
import { HiChevronUp } from "react-icons/hi";
import ScrollToTop from "react-scroll-to-top";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPage = () => {
  return (
    <Layout>
      <Banner />
      <Features />
      <About />
      <Team />
      <Portfolio />
      <Pricing />
      <Blog />
      <Support />
      <Cta />
      <ScrollToTop
        smooth
        className="!bg-blue-color"
        component={<HiChevronUp className="text-white text-2xl mx-auto" />}
      />
      <Footer />
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { locale } = ctx;
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "header"])),
    },
  };
};
