import gsap from "gsap/gsap-core";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";
export default function Footer({ handleToTop }) {
  let location = useLocation();
  console.log(location.pathname);
  const bigText = useRef();
  useGSAP(
    () => {
      const big = new SplitType(bigText.current, { types: "chars" });
      const bigChars = big.chars;
      gsap.fromTo(
        bigChars,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 1,
          "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          ease: "power4.out",
          scrollTrigger: {
            trigger: bigChars,
            start: "top 80%",
            toggleActions: "play none none ",
          },
        }
      );
    },
    { scope: bigText }
  );

  return (
    <footer
      id="contact"
      className=" scroll-smooth border-t pt-40   px-[10%] mt-40"
    >
      <div>
        <h1
          ref={bigText}
          className=" font-black text-5xl md:text-7xl  lg:text-9xl "
        >
          LET&apos;S <br />
          CONNECT
        </h1>

        <button className="mt-4 border border-[#0505af] text-[#0505af] rounded-full px-4 py-3 transition ease-out duration-300 delay-100 hover:bg-[#0505af] hover:text-white text-lg font-black my-10 ">
          <a href="mailto:emmisongdev@gmail.com">CONTACT ME</a>
        </button>
      </div>

      <Link
        duration={500}
        smooth={true}
        to={location.pathname == "/" ? `hero` : `about`}
      >
        <button
          className=" scroll-smooth font-bold   hover:underline "
         
        >
          BACK TO TOP{" "}
        </button>
      </Link>
      <div
        className="flex border-t
       gap-1 py-5 text-xs md:text-lg  font-bold "
      >
        <button className="hover:underline">
          <a
            target="_blank"
            href="https://github.com/EmmanuelisongDev"
            rel="noreferrer"
          >
            GITHUB
          </a>
        </button>
        <button className="hover:underline">
          <a target="_blank" href="http://x.com/emmisongdev" rel="noreferrer">
            X(TWITTER)
          </a>
        </button>
        <button className="hover:underline">
          <a
            target="_blank"
            href="http://www.linkedin.com/in/emmanuel-isong-086b19208"
            rel="noreferrer"
          >
            LINKEDIN
          </a>
        </button>
        <button className="hover:underline">
          <a
            target="_blank"
            href="https://emmisongdev.hashnode.dev/"
            rel="noreferrer"
          >
            HASHNODE
          </a>
        </button>
      </div>
    </footer>
  );
}
