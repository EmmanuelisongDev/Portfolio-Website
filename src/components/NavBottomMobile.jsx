import { useState, useEffect } from "react";

import { Link as SmoothLink } from "react-scroll";
import { Link } from "react-router-dom";
export default function NavBottomMobile({ handleToTop }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      setIsVisible(() => scrollY < documentHeight - windowHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-1/2 flex  justify-center  rounded-full  w-full  ${
        isVisible ? "-translate-y-1/2 -translate-x-1/2" : "translate-y-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <ul
        className={` text-xs bg-white  gap-1 md:hidden  backdrop-blur-xl  border  p-1 rounded-full font-extrabold   z-50 flex  relative   `}
      >
        <li className="uppercase  cursor-pointer hover:underline">
          <Link onClick={handleToTop} to={"/"}>
            {" "}
            Home{" "}
          </Link>
        </li>
        <li className="uppercase  cursor-pointer hover:underline">
          <Link onClick={handleToTop} to={"/about"}>
            {" "}
            About{" "}
          </Link>
        </li>
        <li className="uppercase  cursor-pointer hover:underline ">
          <SmoothLink smooth={true} to="contact">
            {" "}
            Contact
          </SmoothLink>
        </li>
      </ul>
    </div>
  );
}
