import * as React from 'react';
import CardSlider from "../components/CardSlider";
import ProjectCard from "../components/ProjectCard";

function Projects() {
    let data = require("./data/projects.json")

    const projects: JSX.Element[] = data.projects.map((project: any, index: number) => {
        return (
            <ProjectCard key={index}
                         title={project.title}
                         link={project.link}
                         desc={project.desc}
                         tech={project.tech}
            />
        )
    });

    return (
        <div id="project-slider">
            <CardSlider
                title="Projects: "
                cardsToShow={3}
                cards={projects}
            />
        </div>
    )
}

export default Projects;
