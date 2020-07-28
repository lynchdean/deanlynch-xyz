import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

type Props = {
    heading: string
    line1?: string
    line2?: string
    line3?: string

}

function Jumbo({heading, line1, line2, line3}: Props) {
    return (
        <Jumbotron>
            <Container>
                <h1 className="display-4">{heading}</h1>
                <p className="pt-2 lead">{line1}</p>
                <p className="lead">{line2}</p>
                <p className="lead">{line3}</p>
            </Container>
        </Jumbotron>
    );
}

export default Jumbo;
