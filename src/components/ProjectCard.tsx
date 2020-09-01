import * as React from 'react';
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
        <Card className="m-2 h-100">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{desc}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                    {tech.map((s: string, index: number) => {
                        return (
                            <Badge key={index} variant="secondary" className="p-2 m-1">{s}</Badge>
                        )
                    })
                    }
                </Card.Subtitle>
                <Button variant="primary" size="sm" href={link} block>
                    View on GitHub
                </Button>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard
