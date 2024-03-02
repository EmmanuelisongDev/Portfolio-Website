import { useRef } from "react";
import gsap from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const reveal = useRef();
  const small = "font-bold";
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
    },
    { scope: reveal.current, aboutSection }
  );

  return (
    <>
      <section
        ref={reveal}
        id="about"
        className=" scroll-smooth py-36 text-pretty  px-[10%] uppercase "
      >
        <h1 className=" mix-blend-difference font-header z-20  mt-6 font-black text-2xl md:text-5xl  lg:text-7xl uppercase  ">
          ABOUT ME
        </h1>
        <div className="  text-lg md:text-3xl">
          <p>
            {" "}
            Hello! I&apos;m{" "}
            <span className=" font-black uppercase text-pretty  ">
              Emmanuel
            </span>
            , a seasoned frontend developer with 2 years of experience. I
            specialize in translating designs into vibrant, efficient code for
            seamless web experiences. Actively engaged in continuous learning, I
            stay updated on emerging technologies and contribute to the dynamic
            developer community. My collaborative approach ensures the final
            product meets technical requirements and exceeds user expectations.
          </p>
        </div>

        <div>
          <h1 className=" max-w-full mix-blend-difference font-header z-20  mt-20 font-black  uppercase  text-2xl md:text-5xl  lg:text-7xl ">
            Tech Stack
          </h1>
          <div className="text-lg md:text-3xl">
            <p className="mb-3">
              Proficient in a versatile tech stack, my skills include:
            </p>
            <div className="flex  flex-col gap-1 ">
              <p>
                <span className={small}> Languages:</span> HTML, CSS, JavaScript
                (ES6+), Typescript
              </p>
              <p className=" text-pretty ">
                <span className={small}>Frameworks/Libraries/Tools:</span>{" "}
                React.js/Next.js, TailwindCSS, BootStrap, Styled Components,
                Sanity.io, GraphCMS Framer motion, GSAP, SASS, Firebase.
              </p>
              <p>
                {" "}
                <span className={small}>State Management:</span> Redux, Context
                API
              </p>
              <p>
                {" "}
                <span className={small}>Build Tools: </span> Webpack, Babel
              </p>
              <p>
                {" "}
                <span className={small}>Version Control:</span> Git/GitHub
              </p>
              <p>
                {" "}
                <span className={small}>Design:</span>Figma
              </p>
              <p>
                <span className={small}>Responsive Design:</span>
                Ensuring seamless user experiences across various devices.
              </p>
            </div>
          </div>
          <div className="mt-20">
            <h1 className=" mix-blend-difference font-header z-20  mt-40 font-black  text-2xl md:text-5xl  lg:text-7xl uppercase  ">
              Let&apos;s Connect
            </h1>
            <p className=" text-lg md:text-3xl">
              Whether you have a particular project in mind or are in search of
              a frontend developer to join your team, I&apos;m thrilled about
              the opportunity to bring ideas to life, creating functional and
              visually appealing digital experiences. Let&apos;s connect,
              collaborate, and craft something extraordinary together!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
