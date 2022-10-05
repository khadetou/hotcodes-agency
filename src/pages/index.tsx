import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import About from "@/sections/Home/About/About";
import Banner from "@/sections/Home/Banner";
// import Blog from "@/sections/Home/Blog";
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
import { mapImageResources, search, getFolders } from "../../lib/cloudinary";
import WhatsAppFloating from "@/components/whatsapp";

const Home: NextPage<{ images: any; next_cursor: string; folders: any }> = ({
  images: defaultImages,
  next_cursor: defaultNextCursor,
  folders,
}) => {
  return (
    <Layout>
      <Banner />
      <Features />
      <About />
      <Team />
      <Portfolio
        defaultImages={defaultImages}
        defaultNextCursor={defaultNextCursor}
        folders={folders}
      />
      <Pricing />
      {/* <Blog /> */}
      <Support />
      <Cta />
      <WhatsAppFloating />
      <ScrollToTop
        smooth
        className="!bg-blue-color !z-50"
        component={<HiChevronUp className="text-white text-2xl mx-auto" />}
      />
      <Footer />
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { locale } = ctx;
  const data = await search({
    expression: `folder="hotcodes*"`,
  });
  const { folders } = await getFolders();

  const { resources, next_cursor } = data;
  const images = mapImageResources(resources);

  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "header",
        "footer",
      ])),
      images,
      next_cursor: next_cursor || false,
      folders,
    },
  };
};
