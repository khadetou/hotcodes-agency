import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { mapImageResources } from "../../../lib/cloudinary";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive } from "@cloudinary/react";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout";
import ScrollToTop from "react-scroll-to-top";
import { HiChevronUp } from "react-icons/hi";

const Page = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
      apiSecret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
    },
  });

  const [images, setImages] = useState<any>([]);
  const {
    query: { id },
  } = useRouter();
  const splitId = `${id}`.split("@");
  const link = splitId.slice(0, -1).join("/");

  useEffect(() => {
    (async function run() {
      const res = await fetch("/api/search", {
        method: "POST",
        body: JSON.stringify({
          expression: `folder="${link}"`,
        }),
      });
      const data: any = await res.json();
      const { resources } = data;
      if (resources) {
        const images = mapImageResources(resources);
        const filtered = images.filter(
          (image: any) => !image.title.includes("shot")
        );

        setImages((prev: any) => {
          return [...prev, ...filtered];
        });
      }
    })();
  }, [link]);

  return (
    <Layout>
      <Header />
      {images.length !== 0 && (
        <AdvancedImage
          cldImg={cld.image(images[0].title)}
          plugins={[responsive({ steps: 200 })]}
        />
      )}
      <ScrollToTop
        smooth
        className="!bg-blue-color"
        component={<HiChevronUp className="text-white text-2xl mx-auto" />}
      />
    </Layout>
  );
};

export default Page;
