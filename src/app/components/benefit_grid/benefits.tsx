'use client';
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './benefits.css';  // Make sure to import your CSS file

export default function Benefits() {
  const cards = [
    { title: "Gain hands on experiences", text: "Unisource allows undergraduates to contribute for real world ongoing projects to gain hands on experiences through their academic career and work with cutting edge technologies", imgSrc: "./assets/benefit1.png" },
    { title: "Publish open-source projects", text: "Organizations are allowed to publish their open source projects at the UniSource and collect proposals from students and allocate them to the projects", imgSrc: "./assets/benefit2.png" },
    { title: "Get support to freelancing projects", text: "Freelancers are invited to share their ongoing uncompleted project components and complete them by contributing  students from Faculty of Technology.", imgSrc: "./assets/benefit3.png" },
    { title: "Gain digital badges", text: "UniSource is equipped with a digital ranking system. The UniSource platform issue digital badges to whom contributes for the projects based on their performance.", imgSrc: "./assets/benefit4.png" },
  ];

  return (
    <Container>
      <Row className="g-4">
        {cards.map((card, idx) => (
          <React.Fragment key={idx}>
            {/* Conditionally render based on screen width */}
            {(idx === 1 || idx === 3) && window.innerWidth > 700 ? (
              <>
                <Col xs={12} md={6} className="d-flex">
                  <Card className="flex-fill custom-card">
                    <Card.Body className="custom-card-body">
                      <Card.Title className="custom-card-title">{card.title}</Card.Title>
                      <Card.Text className="custom-card-text">
                        {card.text}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} md={6} className="d-flex">
                  <Card className="flex-fill custom-card">
                    <Card.Img variant="top" src={card.imgSrc} alt={`Card image ${idx + 1}`} />
                  </Card>
                </Col>
              </>
            ) : (
              <>
                <Col xs={12} md={6} className="d-flex">
                  <Card className="flex-fill custom-card">
                    <Card.Img variant="top" src={card.imgSrc} alt={`Card image ${idx + 1}`} />
                  </Card>
                </Col>
                <Col xs={12} md={6} className="d-flex">
                  <Card className="flex-fill custom-card">
                    <Card.Body className="custom-card-body">
                      <Card.Title className="custom-card-title">{card.title}</Card.Title>
                      <Card.Text className="custom-card-text">
                        {card.text}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            )}
          </React.Fragment>
        ))}
      </Row>
    </Container>
  );
}

