import { ProjectData } from "../util/data";
import Project from "./Project";

export default function Projects() {
  return (
    <section id="projects" className=" mt-52  scroll-smooth px-[10%]">
      <h1 className="  text-2xl md:text-4xl lg:text-5xl font-bold mb-10">
        *featured works
      </h1>

      <div id="featured">
        {ProjectData.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
}
