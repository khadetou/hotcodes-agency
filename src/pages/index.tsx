import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import About from "@/sections/Home/About/About";
import Banner from "@/sections/Home/Banner";
import Blog from "@/sections/Home/Blog";
import Cta from "@/sections/Home/Cta";
import Features from "@/sections/Home/Features";
import Isotope from "@/sections/Home/Isotope";
import Portfolio from "@/sections/Home/Portfolio";
import Pricing from "@/sections/Home/Pricing";
import Support from "@/sections/Home/Support/index";
import Team from "@/sections/Home/Team";
import type { GetServerSideProps, NextPage } from "next";

const Home: NextPage = ({ movies }: any) => {
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
      <Footer />
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=3fadeabaaabeb25b421978acfc25a1ef&language=en-US&page=1"
  );
  const movies = await data.json();
  return {
    props: {
      movies,
    },
  };
};
