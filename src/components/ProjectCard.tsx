import * as React from 'react';
import "./css/projectCard.css"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

interface Props {
    title: string
    link: string
    desc: string
    tech: string[]
}

function ProjectCard({title, link, desc, tech}: Props) {
    return (
        <Card id="project-card" className="m-2">
            <Card.Header>
                <Card.Title>{title}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text>{desc}</Card.Text>
            </Card.Body>
            <Card.Footer >
                {tech.map((s: string, index: number) => {
                    return (
                        <Badge key={index} variant="secondary" className="m-1">{s}</Badge>
                    )
                })
                }
            </Card.Footer>
            <Card.Footer>
                <Button variant="primary" size="sm" href={link} block>
                    View on GitHub
                </Button>
            </Card.Footer>
        </Card>
    )
}

export default ProjectCard
