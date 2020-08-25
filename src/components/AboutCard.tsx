import * as React from 'react';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./css/aboutCard.css"

interface Props {
    title?: string,
    img?: string
}

function AboutCard({title, img}: Props) {
    return (
        <Card className="text-center border-0 mw-2 mh-22">
            <Row>
                <Col md={{span: 4, offset:4 }}><Card.Img variant="top" src={img}/></Col>
            </Row>
            <Card.Body>
                <Card.Text><p className="lead">{title}</p></Card.Text>
            </Card.Body>
        </Card>
    )
}

export default AboutCard
