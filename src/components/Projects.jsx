import { ProjectData } from "../util/data";
import Project from "./Project";

export default function Projects() {
  return (
    <section id="projects" className="  scroll-smooth px-[10%]">
      <h1 className=" font-smallHea text-2xl md:text-4xl lg:text-5xl font-bold mb-10">
        *selected works
      </h1>

      <div>
        {ProjectData.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
}
