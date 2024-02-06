import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap/gsap-core";
import { useRef } from "react";
import { CSSRulePlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

export default function Project({ project }) {
  const { id, name, type, git, link, image, tools } = project;
  const container = useRef(null);
  const img = useRef(null);

  useGSAP(
    () => {
      const imageReveal = document.querySelectorAll(".img-container");
      imageReveal.forEach((e) => {
        gsap.to(e, {
          "--height": "0%",
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: e,

            start: "0% bottom",
            toggleActions: "play none none reverse",
          },
        });
      });
      gsap.from(img.current, {
        scale: 0.5,
        ease: "power2.inOut",
        delay: -1.4,
      });
    },
    { scope: container }
  );
  return (
    <div
      className={` flex  flex-col
           mb-20 lg:items-center w-full  lg:justify-between`}
    >
      <div
        ref={container}
        className=" img-container  relative  w-full h-[200px] md:h-[400px] lg:h-[700px]   overflow-hidden "
      >
        <a target="_blank" href={link}>
          <img
            ref={img}
            className=" absolute object-cover object-top w-full h-[200px] md:h-[400px] lg:h-[700px] hover:animate-pulse  duration-700 "
            src={image}
            alt={name}
          />
        </a>
      </div>

      <div className={` w-full`}>
        <a target="_blank" href={link}>
          <h1 className="text-xl md:text-5xl xl:text-8xl font-bold mb-1">
            {name}
          </h1>
        </a>
        <h3 className=" text-sm md:text-3xl">{type}</h3>

        <span className={` w-full mt-1  flex flex-wrap  gap-1 `}>
          {tools.map((tool, id) => {
            return (
              <p className="text-xs text-left " key={id}>
                {tool}
              </p>
            );
          })}
        </span>
      </div>
    </div>
  );
}
