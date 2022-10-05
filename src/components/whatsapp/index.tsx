import { FaWhatsapp } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";

const WhatsAppFloating = () => {
  const isDesktopOrTablet = useMediaQuery({ minWidth: 540 });
  const [link, setLink] = useState(
    "https://web.whatsapp.com/send?phone=786004564&text"
  );

  useEffect(() => {
    if (isDesktopOrTablet) {
      setLink("https://web.whatsapp.com/send?phone=786004564&text");
    } else {
      setLink(
        "https://api.whatsapp.com/send/?phone=+221786004564&text&app_absent=0"
      );
    }
  }, [isDesktopOrTablet]);

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="fixed bottom-[90px] right-[30px]  rounded-full p-3 bg-blue-color cursor-pointer shadow-shadow animate-bounce !z-50 ">
        <FaWhatsapp className="text-[38px] font-bold text-white" />
      </div>
    </a>
  );
};

export default WhatsAppFloating;
