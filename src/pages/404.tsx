import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import React from "react";
import ReactWOW from "react-wow";
const NotFound = () => {
  return (
    <Layout>
      <ReactWOW animation="fadeInUp" delay="0.2s">
        <section className="a1u[120px] lg:a1u[240px]">
          <div className="a1v xl:a1w">
            <div className="a1x a1y dark:a1z[#2E333D] lg:a1A[130px]">
              <div className="ac a1B ae[550px] a1C az md:a1D">
                <span className="title"> ERROR </span>
                <h1 className="a1E aE a1F[100px] a1G a1H a1t dark:text-white md:a1F[170px] md:a1H">
                  404
                </h1>
                <h2 className="a1I aE a1J a1K a1t dark:text-white md:a1L">
                  Sorry, the page can't be found
                </h2>
                <p className="a1B a1M ae[515px] aF aG">
                  The page you were looking for appears to have been moved,
                  deleted or does not exist.
                </p>
                <a
                  href="index.html"
                  className="aD a9 am aS a16 a1N[14px] aU a1O a1G aI"
                >
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </section>
      </ReactWOW>
      <Footer />
    </Layout>
  );
};

export default NotFound;
