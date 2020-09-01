import * as React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

type Props = {
    heading: string
    lines: string[]
    cards: JSX.Element[]
}

function Jumbo({heading, lines, cards}: Props) {
    return (
        <Jumbotron>
            <Container>
                <Row>
                    <Col sm={8}>
                        <h1 className="display-4">{heading}</h1>
                        {lines.map((line, index) => {
                            return <p key={index} className="lead">{line}</p>
                        })}
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
