import gsap from "gsap/gsap-core";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { RiArrowDropDownFill } from "react-icons/ri";
import { HiMiniArrowDown } from "react-icons/hi2";
export default function Hero() {
  const bigText = useRef();
  const mediumText = useRef();
  const arrow = useRef();

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

            toggleActions: "play none none reset",
          },
        }
      );

      gsap.from(mediumText.current, {
        opacity: 0,
        duration: 4,
        scrollTrigger: {
          trigger: mediumText.current,
          start: "top 80%",

          toggleActions: "play none none reset",
        },
      });
      gsap.to(arrow.current, {
        y: 50,
        duration: 2,
        scrollTrigger: {
          trigger: arrow.current,
          start: "bottom bottom",
          toggleActions: "play none none reset",
        },
      });
    },
    { scope: bigText, mediumText, arrow }
  );
  return (
    <>
      <main className=" h-screen  scroll-smooth  align-middle w-full relative ">
        <span ref={arrow} className="absolute bottom-0 right-0 ">
          <HiMiniArrowDown className=" h-10 w-10  md:h-20 md:w-20 animate-pulse " />
        </span>
        <header className="text-center pt-60 px-[10%] bottom-[30%] ">
          <h3 className=" text-xl font-bold font-smallHea">hello, I am a </h3>

          <h1
            ref={bigText}
            className=" mix-blend-difference font-header z-20 text-4xl text-center font-black md:text-7xl lg:text-9xl  "
          >
            FRONT-END <br />
            DEVELOPER
          </h1>

          <p ref={mediumText} className=" mt-14 text-lg md:text-3xl  w-full  ">
            I AM A DEVELOPER AND VISUAL DESIGNER BASED IN NIGERIA. WITH
            EXPERIENCE IN REACT. <br /> I LOVE MINIMAL DESIGN.
          </p>
        </header>
      </main>
    </>
  );
}
