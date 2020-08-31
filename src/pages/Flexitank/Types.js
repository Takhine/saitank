import React from "react";
import { Card, Col, Row, Button } from "antd";

// Images
import bulk from "static/images/flexitank/bulk.jpg";
import water from "static/images/flexitank/water.jpg";
import fuel from "static/images/flexitank/fuel.jpg";
import whiteArrow from "static/images/icons/white-right-arrow.svg";

const { Meta } = Card;

const types = [
  {
    id: 1,
    image: bulk,
    title: "Bulk Flexitank",
    cardClass: "bulk",
    points: [
      "Sai Bulk Flexitanks are Robust & Reliable for the carriage of Non Hazardous Liquids!",
      "Manufactured from Polyethylene & Polypropylene, our Flexitanks  are perfectly Safe For Ocean Shipping as well for Road and Rail Transport across Countries & Continents.",
      "Capacities range from 16000 Liters to 24,000 Liters with various Load and Discharge Configurations to suit all your Operational needs!",
      "You can secure a Quicker Turn Around & Efficient Operations especially when compared to transporting Liquids in Drums & ISO Tanks",
      "We also offer Technical Feasibility advice for you to benefit an Economical & Safe Movement of your Bulk Liquids",
    ],
  },
  {
    id: 2,
    image: water,
    title: "Water Flexitank",
    cardClass: "water",
    points: [
      "Made from PVC for Non Potable Water and TPU ( Food Grade } for Drinking Water",
      "Suitable in all weather conditions with Excellent Tensile Strength to resist wear & tear",
      "Easy to Install, Load & Discharge with Long Term Benefits & No Contamination Concerns",
      "Sai Water Flexitanks can be set up in a matter of hours and they can be dismantled as quickly thereby creating MOBILITY combined with LIQUIDITY to suit every Application or Location",
    ],
  },
  {
    id: 3,
    image: fuel,
    title: "Fuel Flexitank",
    cardClass: "fuel",
    points: [],
  },
];

export default function Types() {
  return (
    <div className="types">
      <div className="types-heading">
        <h2 className="types-header">Options</h2>
        <h2 className="types-subheader">Types of Flexitanks</h2>
        <Row gutter={12}>
          {types.map((type) => (
            <Col
              key={type.id}
              xs={24}
              md={12}
              lg={8}
              style={{ marginBottom: "12px" }}
            >
              <Card
                className={`types-card ${type.cardClass}`}
                cover={<img src={type.image} alt={type.title} />}
              >
                <Meta title={type.title} />
                <ul>
                  {type.points.map((point, index) => (
                    <li className="desc-point" key={index}>
                      {point}
                    </li>
                  ))}
                </ul>
                <Button className="learn-button">
                  Learn More
                  <img className="arrow" src={whiteArrow} alt="White Arrow" />
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
