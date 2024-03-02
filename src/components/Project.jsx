import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap/gsap-core";
import { useRef } from "react";
import { CSSRulePlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

export default function Project({ project }) {
  const { id, name, type, about, git, link, image } = project;
  const work = useRef();

  useGSAP(
    () => {
      gsap.to(work.current, {
        y: -100,
        filter: "grayscale(0)",
        duration: 2,
        scrollTrigger: {
          trigger: work.current,
          start: "bottom bottom",
          scrub: true,
          toggleActions: "play none none reset",
        },
      });
    },
    { scope: work }
  );

  return (
    <div
      ref={work}
      className={` flex  flex-col
           mb-20 lg:items-center w-full  lg:justify-between`}
    >
      <div className=" rounded-md   relative  w-full h-[200px] md:h-[400px] lg:h-[700px]    ">
        <img
          className="  rounded-md object-cover object-top  w-full
           h-[200px] md:h-[400px] lg:h-[700px] grayscale hover:grayscale-0 duration-700 border "
          src={image}
          alt={name}
        />
      </div>

      <div className={` w-full capitalize`}>
        <h1 className="text-xl text-left mt-4 md:text-5xl xl:text-8xl  mb-1 capitalize font-black ">
          {name}
        </h1>
        <h3 className=" text-lg font-medium md:text-3xl">{type}</h3>
        <p className="text-xs md:text-xl my-1 text-pretty">{about}</p>
        <a href={link} target="_blank" rel="noreferrer">
          <button className=" mt-4 border-[#0505af] border   rounded-full px-4 py-3 transition ease-out duration-300 delay-100 hover:bg-[#0505af] hover:text-white text-lg font-bold text-[#0505af]">
            VISIT SITE
          </button>
        </a>
      </div>
    </div>
  );
}
