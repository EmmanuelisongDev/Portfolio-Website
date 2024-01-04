import { useRef } from "react";
import gsap from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import comsume from "../assets/video/consume.mp4";
import slick from "../assets/video/hero-section.mp4";
import search from "../assets/video/search.mp4";
import i from "../assets/projectImage/i.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const reveal = useRef();
  const body = document.querySelectorAll("body");
  const aboutSection = document.getElementById("about-section");

  useGSAP(
    () => {
      gsap.from(reveal.current, {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: reveal.current,
          start: "top 90%",
          duration: 1,
          toggleActions: "play none none reset",
        },
      });
      gsap.to(body, {
        backgroundColor: "#000",
        color: "#fff",
        scrollTrigger: {
          trigger: aboutSection,
          toggleActions: "play none none reset",
          start: "10% 0%",
          end: "5% 0%",
          scrub: 1,
          duration: 1,
        },
      });
    },
    { scope: reveal.current, aboutSection }
  );

  return (
    <>
      <section
        ref={reveal}
        id="about-section"
        className=" scroll-smooth pb-36 my-96 px-[10%] "
      >
        <div className="">
          <h2 className="text-3xl font-smallHea  font-bold">
            my name is <br />
          </h2>

          <p className="  text-2xl md:text-5xl lg:text-7xl">
            {" "}
            <span className="uppercase text-[#cb47ff] font-bold">
              Emmmanuel Isong
              <span>
                <img
                  className="inline w-[15%] md:w-[4%]   object-cover mx-0 border rounded-s-2xl"
                  src={i}
                  alt=""
                />
              </span>
            </span>
            ,I am a <span>Front-End Developer</span> with experience in building
            elegant{" "}
            <span>
              <video
                className=" inline w-[7%] md:w-[4%] rotate-90   object-cover mx-0 border   rounded-full "
                loop
                autoPlay
                muted
                type="video/mp4"
                src={slick}
              ></video>
            </span>{" "}
            user interfaces. I use React.js to consume{" "}
            <span>
              <video
                className=" inline w-[15%] md:w-[4%]   object-cover mx-0 border   rounded-full"
                loop
                autoPlay
                muted
                type="video/mp4"
                src={comsume}
              ></video>
            </span>{" "}
            APIs and build scalable applications. In terms of technologies, I
            use React, TailwindCSS, GSAP,Sanity, SaSS, Figma, Adobe Illustrator,
            Adobe Photoshop and Github. <br />
            As a Front-End Developer, I have sharpen my skills in front-end
            development which includes implementing responsive designs, Search
            Engine Optimization(SEO){" "}
            <span>
              <video
                className=" inline w-[15%] md:w-[4%]   object-cover mx-0 border   "
                loop
                autoPlay
                muted
                type="video/mp4"
                src={search}
              ></video>
            </span>
            ,User Interface and User Experience(UI/UX),Attention to Detail,
            Creativity, Content Management Systems(CMS).
          </p>
        </div>
      </section>
    </>
  );
}
