import { FaWhatsapp } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import Link from "next/link";

const WhatsAppFloating = () => {
  const isDesktopOrTablet = useMediaQuery({ minWidth: 540 });
  const [link, setLink] = useState(
    "https://web.whatsapp.com/send?phone=775867968&text"
  );

  useEffect(() => {
    if (isDesktopOrTablet) {
      setLink("https://web.whatsapp.com/send?phone=775867968&text");
    } else {
      setLink(
        "https://api.whatsapp.com/send/?phone=+221775867968&text&app_absent=0"
      );
    }
  }, [isDesktopOrTablet]);

  return (
    <Link href={link} target="_blank" rel="noreferrer">
      <div className="fixed bottom-[90px] right-[30px]  rounded-full p-3 bg-blue-color cursor-pointer shadow-shadow animate-bounce !z-50 ">
        <FaWhatsapp className="text-[38px] font-bold text-white" />
      </div>
    </Link>
  );
};

export default WhatsAppFloating;
