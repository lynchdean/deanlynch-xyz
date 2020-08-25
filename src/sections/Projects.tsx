import * as React from 'react';
import CardSlider from "../components/CardSlider";
import ProjectCard from "../components/ProjectCard";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

function Projects() {
    let data = require("./data/projects.json")

    const projects : Card[] = data.projects.map((project: any) => {
       return (
           <ProjectCard title={project.title}
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
