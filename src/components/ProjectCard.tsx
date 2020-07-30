import React from 'react';
import GitHubLogo from "./img/GithubLogo.png"
import Card from "react-bootstrap/Card";


type Props = {
    title: string
    link: string
    desc?: string
    tech?: string
}

function ProjectCard({title, link, desc, tech}: Props) {
    return (
        <Card>
            <div className="row no-gutters ">
                <div className="col-md-4 p-2 bg-dark d-flex flex-wrap align-items-center">
                    <div className="d-block m-auto mw-33">
                        <img src={GitHubLogo}
                             className="card-img"
                             alt="Github Logo"
                        />
                    </div>
                </div>
                <div className="col-md-8">
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{tech}</Card.Subtitle>
                        <Card.Text>{desc}</Card.Text>
                        <Card.Link href={link}>View on GitHub</Card.Link>
                    </Card.Body>
                </div>
            </div>
        </Card>
    )
}

export default ProjectCard
