import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout";
import Portfolio from "@/sections/Show/Portfolio";
import { GetServerSideProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { mapImageResources, search, getFolders } from "../../../lib/cloudinary";

const Show: NextPage<{ images: any; next_cursor: string; folders: any }> = ({
  images: defaultImages,
  next_cursor: defaultNextCursor,
  folders,
}) => {
  return (
    <Layout>
      <Header />
      <Portfolio
        defaultImages={defaultImages}
        defaultNextCursor={defaultNextCursor}
        folders={folders}
      />
      <Footer />
    </Layout>
  );
};

export default Show;
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
