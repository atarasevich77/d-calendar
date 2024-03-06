import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { weeks } from "../../data";

function Calendar() {
  return (
    <Container>
      <Card className="text-center w-100 m-2">
        <Card.Body>
          <Card.Title className="mb-4">Diet Calendar</Card.Title>
          <Container>
            <Row>
              {weeks.map((week: any) => (
                <Col sm={4} className="mb-3" key={week.name}>
                  <Card>
                    <Card.Body>
                      <Card.Title>{ week.name.charAt(0).toUpperCase() + week.name.slice(1) }</Card.Title>
                      <Card.Text className="m-2">
                        <Link to={`/d-calendar/${week.name}`} className="link-underline-light">
                          { week.description }
                        </Link>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Calendar;
