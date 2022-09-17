import { FC, ReactNode, useState } from "react";
import Header from "./Header/Header";
import SEO from "./SEO";
import Sticky, { Status } from "react-stickynode";

interface LayoutProp {
  children: ReactNode;
}
const Layout: FC<LayoutProp> = ({ children }) => {
  const [isSticky, setIsSticky] = useState(false);

  const handleChange = (status: Status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  return (
    <>
      <SEO />
      <Sticky innerZ={1001} top={0} onStateChange={handleChange}>
        <Header
          isSticky={isSticky}
          className={
            isSticky
              ? "backdrop-blur-[5px] shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.1)] !py-2 dark:bg-[rgb(17,23,34)] dark:opacity-100 bg-white bg-opacity-80 "
              : ""
          }
        />
      </Sticky>
      <main>{children}</main>
    </>
  );
};

export default Layout;
