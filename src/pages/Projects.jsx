import React from "react";
import { websites } from "../assets/projects";
import { ProjectCard } from "../components/ProjectCard";

export const Projects = () => {
  return (
    <main className="">
      <div className="flex mt-6 justify-center">
        <h1 className="border-cyan-600 font-novaSquare mb-4 text-2xl  pb-3  border-b-4">
          PROJECTS
        </h1>
      </div>
      <div className="flex items-center justify-center text-rose-700 bg-neutral-200  rounded-2xl mx-4 dark:bg-neutral-900">
        {" "}
        <span className="tab:text-xs p-2 other:text-xxs">
          NB: Some Websites takes time to load due to usage of free API. <br />{" "}
          Thank you!
        </span>
      </div>
      <section className="flex justify-center w-full  flex-wrap flex-row">
        {websites.map((website) => (
          <ProjectCard className="" key={website.id} website={website} />
        ))}
      </section>
    </main>
  );
};
