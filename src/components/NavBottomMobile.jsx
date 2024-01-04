import { useState, useEffect } from "react";

import { HashLink } from "react-router-hash-link";
export default function NavBottomMobile() {
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
        className={` text-xs  gap-1 md:hidden  backdrop-blur-xl  border  p-1 rounded-full font-extrabold   z-50 flex  relative   `}
      >
        <li className="uppercase  cursor-pointer hover:line-through ">
          <HashLink to={"#projects"}> Project</HashLink>
        </li>
        <li className="uppercase  cursor-pointer hover:line-through">
          <HashLink to={"#about-section"}> About </HashLink>
        </li>
        <li className="uppercase  cursor-pointer hover:line-through">
          <HashLink to={"#contact"}> Contact</HashLink>
        </li>
      </ul>
    </div>
  );
}
