import * as React from "react";
import "./css/workExpCard.css"
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Image from "react-bootstrap/Image";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

interface Props {
    company: string
    img: string
    position?: string
    duration?: string
    details: string[]
}

function WorkExpCard({company, img, position, duration, details}: Props) {
    return (
        <Card id="work-exp-card" className="mx-4 mb-4">
            <Accordion>
                <Card.Header className="d-flex">
                    <Card.Title className="my-auto">{company}</Card.Title>
                    <Image src={img} className="ml-auto" alt={company + " Logo"} width={75} roundedCircle/>
                </Card.Header>
                <Card.Body className="border-bottom">
                    <Card.Subtitle>{position} ({duration})</Card.Subtitle>
                </Card.Body>
                <Accordion.Collapse eventKey="0">
                    <ListGroup className="list-group-flush">
                        {details.map((line, index) => {
                            return <ListGroupItem key={index} className="lead">{line}</ListGroupItem>
                        })}
                    </ListGroup>
                </Accordion.Collapse>
                <Card.Footer>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Expand Details
                    </Accordion.Toggle>
                </Card.Footer>
            </Accordion>
        </Card>
    )
}

export default WorkExpCard
