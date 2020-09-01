import * as React from 'react';
import Container from "react-bootstrap/Container";
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
        <Container>
            <h1 className="text-monospace">Projects: </h1>
            <CardSlider
                cards={projects}
            />
        </Container>
    )
}

export default Projects;
