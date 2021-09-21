import * as React from "react";
import ProjectInfo from "../components/ProjectInfo";

import data from "./data/projects";

function Projects() {
  return (
    <div className="container py-4 text-light">
      <h2 className="pb-2 mb-4 border-bottom">Projects:</h2>
      <ul className="list-group list-group-flush">
        {data.projects.map((project, index) => {
          return (
            <li className="list-group-item bg-transparent" key={index}>
              <ProjectInfo title={project.title} desc={project.desc} tech={project.tech} link={project.link}/>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Projects;
