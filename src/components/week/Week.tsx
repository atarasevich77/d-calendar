import React from "react";
import { Container, Card, Row, Col } from 'react-bootstrap';
import { weeks } from "../../data";

interface WeekProps {
  path: string
}

function Week({ path }: WeekProps) {
  const week: any = weeks.find(el => el.name === path);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto" className="text-center">
          <h5 className="mb-5">{(week.name.charAt(0).toUpperCase() + week.name.slice(1)).replace('-', ' ')}</h5>
        </Col>
      </Row>
      <Row>
        {week?.days.map((data: any) => (
          <Col xs={12} sm={6} md={6} lg={4} xl={3} key={ data.day }>
            <Card className="m-3">
              <Card.Header className="text-center">{ data.day }</Card.Header>
              <Card.Body>
                {data?.menu.map((el: any)  => (
                  <div key={ el.time }>{ el.time } - { el.description }</div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Week;
