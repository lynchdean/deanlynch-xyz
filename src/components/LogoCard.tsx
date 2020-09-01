import * as React from 'react';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./css/logoCard.css"

interface Props {
    title?: string,
    img?: string
}

function LogoCard({title, img}: Props) {
    return (
        <Card className="text-center border-0 mw-2 mh-22">
            <Row>
                <Col md={{span: 4, offset:4 }}><Card.Img variant="top" src={img}/></Col>
            </Row>
            <Card.Body>
                <Card.Text className="lead">{title}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default LogoCard
