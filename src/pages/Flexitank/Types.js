import React from "react";
import { Card, Col, Row } from "antd";

// Images
import bulk from 'static/images/flexitank/bulk.jpg';
import water from 'static/images/flexitank/water.jpg';
import fuel from 'static/images/flexitank/fuel.jpg';

const {Meta} = Card;

const types = [
  {
    id: 1,
    image: bulk,
    title: "Bulk Flexitank",
    points: [
      "Perfect for Safe Shipping & Road / Rail Transport of Non Hazardous Liquids",
      "Durable, Robust & Reliable with excellent Value for Money",
      "Significant advantages over Drums, ISO Tanks and Road Tankers",
      "Managed by Experienced Professionals offering Technical Expertise",
      "Save on time by reducing lengthy handling / loading / unloading logistics",
    ],
  },
  {
    id: 2,
    image: water,
    title: "Water Flexitank",
    points: [
      "MOBILITY combined with LIQUIDITY to suit every Application or Location",
      "Made from PVC for Non Potable Water and TPU ( Food Grade } for Drinking Water",
      "Suitable in all weather conditions with Excellent Tensile Strength to resist wear & tear",
      "Easy to Install, Load & Discharge with Long Term Benefits",
      "No Contamination Concerns",
    ],
  },
  {
    id: 3,
    image: fuel,
    title: "Fuel Flexitank",
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
            <Col key={type.id} xs={24} md={12} lg={8}>
              <Card
                className="types-card"
                cover={<img src={type.image} alt={type.title} />}
              >
              <Meta title={type.title} />
                <ul>
                  {type.points.map((point, index) => (
                    <li className="desc-point" key={index}>{point}</li>
                  ))}
                </ul>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
