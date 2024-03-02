import gsap from "gsap/gsap-core";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { HiMiniArrowDown } from "react-icons/hi2";
import { Link } from "react-scroll";
export default function Hero() {
  const bigText = useRef();
  const mediumText = useRef();
  const arrow = useRef();
  const text =
    "I'm a developer and visual designer based in Nigeria, specializing in crafting stunning websites. With a wealth of experience, I bring a unique blend of technical expertise and design finesse to every project.";

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
            trigger: bigChars.current,
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
        y: 100,
        duration: 2,
        scrollTrigger: {
          trigger: arrow.current,
          start: "bottom bottom",
          scrub: true,
          toggleActions: "play none none reset",
        },
      });
    },
    { scope: bigText, mediumText, arrow }
  );
  return (
    <>
      <main
        id="hero"
        className=" h-screen  scroll-smooth  align-middle w-full relative "
      >
        <Link to="featured" smooth={true}>
          <span ref={arrow} className="absolute bottom-0 right-0 ">
            <HiMiniArrowDown className=" h-10 w-10  md:h-20 md:w-20 animate-pulse " />
          </span>
        </Link>
        <header className="text-center pt-60 px-[10%] bottom-[30%] ">
          <h1
            ref={bigText}
            className=" mix-blend-difference font-header z-20 text-4xl text-center font-black md:text-7xl lg:text-9xl  "
          >
            FRONT-END <br />
            DEVELOPER
          </h1>

          <p
            ref={mediumText}
            className=" uppercase mt-14 text-lg md:text-3xl  w-full  "
          >
            {text}
          </p>
        </header>
      </main>
    </>
  );
}
