import * as React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

import Col from "react-bootstrap/Col";
import "./css/jumbo.css"

type Props = {
    heading: string
    lines: string[]
    cards: JSX.Element[]
}

function Jumbo({heading, lines, cards}: Props) {
    return (
        <Row>
            <Col md={8} className="mb-4">
                <Jumbotron className="h-100 p-5">
                    <h1 className="display-4 mb-5">{heading}</h1>
                    {lines.map((line, index) => {
                        return <p key={index} className="lead">{line}</p>
                    })}
                    <div className="text-center mt-4">
                        <Button href="https://www.linkedin.com/in/deanlynch97/"
                                className="mr-3" variant="outline-light">
                            LinkedIn
                        </Button>
                        <Button href="mailto:lynchdean@gmail.com?subject= Hello! (via deanlynch.xyz)"
                                className="ml-3" variant="outline-light">
                            Email
                        </Button>
                    </div>
                </Jumbotron>
            </Col>
            <Col md={4} className="mb-4">
                <Jumbotron className="h-100 py-2 mb-0">
                    <ul className="p-0 m-0" style={{listStyle: "none"}}>
                        {cards.map((card, index) => {
                            return <li key={index} className="lead">{card}</li>
                        })}
                    </ul>
                </Jumbotron>
            </Col>
        </Row>
    );
}

export default Jumbo;
