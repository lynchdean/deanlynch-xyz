import * as React from "react";
import { useContext } from "react";
import "./css/workExpCard.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Image from "react-bootstrap/Image";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import { AccordionContext, useAccordionToggle } from "react-bootstrap";

interface Props {
  company: string;
  img: string;
  position?: string;
  duration?: string;
  details: string[];
}

interface toggleProps {
  eventKey: any;
  callback?: any;
}

function ContextAwareToggle({ eventKey, callback }: toggleProps) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <Button
      className="border-0"
      variant="outline-secondary"
      size="sm"
      onClick={decoratedOnClick}
      block
    >
      {isCurrentEventKey ? "Collapse Details" : "Expand Details"}
    </Button>
  );
}

function WorkExpCard({ company, img, position, duration, details }: Props) {
  return (
    <Card id="work-exp-card" className="mx-4 mb-4">
      <Accordion defaultActiveKey="1">
        <Card.Header className="text-center">
          <Card.Title className="display-4 ">{company}</Card.Title>
        </Card.Header>
        <Card.Body className="d-flex pt-0">
          <Card.Subtitle className="my-auto mr-4">
            <p>{position}</p>
            <p className="text-muted mb-0">{duration}</p>
          </Card.Subtitle>
          <Image
            src={img}
            className="ml-auto"
            alt={company + " Logo"}
            width={75}
            roundedCircle
          />
        </Card.Body>
        <Accordion.Collapse eventKey="0">
          <ListGroup>
            {details.map((line, index) => {
              return (
                <ListGroupItem className="border-0" key={index}>
                  &bull; {line}
                </ListGroupItem>
              );
            })}
          </ListGroup>
        </Accordion.Collapse>
        <Card.Footer className="text-center">
          <ContextAwareToggle eventKey="0" />
        </Card.Footer>
      </Accordion>
    </Card>
  );
}

export default WorkExpCard;
