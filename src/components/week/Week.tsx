import React from "react";
import { Container, Card, Row, Col, ListGroup } from 'react-bootstrap';
import { weeks } from "../../data";

interface WeekProps {
  path: string
}

function Week({ path }: WeekProps) {
  const week: any = weeks.find(el => el.link === path);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto" className="text-center">
          <h5 className="mb-5 fw-bold">{(week.name.charAt(0).toUpperCase() + week.name.slice(1)).replace('-', ' ')}</h5>
        </Col>
      </Row>
      <Row>
        {week?.days.map((data: any) => (
          <Col xs={12} sm={6} md={6} lg={4} xl={3} key={ data.day }>
            <Card className="m-2">
              <Card.Header className="text-center fw-bold">{ data.day }</Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  {data?.menu.map((el: any)  => (
                    <ListGroup.Item className="mb-1" key={ el.time }>{ el.time } - { el.description }</ListGroup.Item>
                  ))}
                  <ListGroup.Item></ListGroup.Item>
                </ListGroup>
                <Col className="mt-1 small fst-italic">*Add 100-150g of Vegetables to each meal</Col>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Week;
