import * as React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
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
        <Jumbotron className="mb-4">
            <Container>
                <Row>
                    <Col sm={8}>
                        <h1 className="display-4">{heading}</h1>
                        {lines.map((line, index) => {
                            return <p key={index} className="lead">{line}</p>
                        })}

                        <div className="d-flex justify-content-center">
                            <div className="btn-toolbar mx-auto pt-4">
                                <Button href="https://www.linkedin.com/in/deanlynch97/" className="mr-3" variant="outline-light">LinkedIn</Button>
                                <Button href="mailto:lynchdean@gmail.com?subject= Hello! (via deanlynch.xyz)" className="ml-3" variant="outline-light">Email</Button>
                            </div>
                        </div>

                    </Col>
                    <Col sm={4}>
                        <ul className={"p-0"} style={{listStyle: "none"}}>
                            {cards.map((card, index) => {
                                return <li key={index} className="lead">{card}</li>
                            })}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Jumbo;
