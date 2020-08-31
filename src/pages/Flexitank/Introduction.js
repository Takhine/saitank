import React from "react";
import { Row, Col, Card, Button } from "antd";

// Images
import blackArrow from "static/images/icons/black-arrow.svg";

const introductions = [
  {
    id: 1,
    text: "Quality of International Standards for Non-hazardous liquids.",
  },
  {
    id: 2,
    text: "A Flexitank is made from polyethylene & polypropylene.",
  },
  {
    id: 3,
    text: "With capacities from 16000 to 24000 litres.",
  },
  {
    id: 4,
    text: "Big savings when compared to drums & ISO Tanks",
  },
];
export default function Introduction() {
  return (
    <div className="introduction">
      <Row gutter={16}>
        <Col xs={24} md={12} lg={8}>
          <h2>Flexitank</h2>
          <h2>The Tough Tank</h2>
          <p>
            Here are some things that you must know about our{" "}
            <b>tough & robust</b> flexitanks.
          </p>
          <Button className="cta-button">
            Contact us{" "}
            <img className="arrow" src={blackArrow} alt="Black Arrow" />
          </Button>
        </Col>
        <Col xs={24} md={12} lg={16}>
          <Row gutter={16}>
            {introductions.map((intro) => (
              <Col key={intro.id} xs={24} md={12}>
                <Card className="intro-card">
                  <p>{intro.text}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}
