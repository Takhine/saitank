import React from "react";
import { Row, Col, Card } from "antd";
import FadeIn from "react-fade-in";

// Images
import emblem from "static/images/emblem.png";

import flexi1 from "static/images/flexitank/flexi-feature-1.svg";
import flexi2 from "static/images/flexitank/flexi-feature-2.svg";
import flexi3 from "static/images/flexitank/flexi-feature-3.svg";
import flexi4 from "static/images/flexitank/flexi-feature-4.svg";

export default function Introduction() {
  return (
    <div className="introduction">
      <Row gutter={16}>
        <Col xs={24} md={12} lg={8} className="card-col">
          <Card className="intro-card">
            <div className="icon-container">
              <img className="blue-circle" src={flexi1} alt="Blue Circle" />
            </div>
            <p className="intro-text">
              Quality of International Standards for Non-hazardous liquids.
            </p>
          </Card>
          <Card className="intro-card">
            <div className="icon-container">
              <img className="blue-circle" src={flexi2} alt="Blue Circle" />
            </div>
            <p className="intro-text">
              With capacities from 16000 to 24000 litres.
            </p>
          </Card>
        </Col>

        <Col xs={24} md={12} lg={8} className="card-col">
          <div className="emblem-container">
            <FadeIn delay="1900">
              <img className="emblem" src={emblem} alt="25 Years of Saitank" />
            </FadeIn>
          </div>
        </Col>

        <Col xs={24} md={12} lg={8} className="card-col">
          <Card className="intro-card">
            <div className="icon-container">
              <img className="blue-circle" src={flexi3} alt="Blue Circle" />
            </div>
            <p className="intro-text">
              A Flexitank is made from polyethylene & polypropylene.
            </p>
          </Card>
          <Card className="intro-card">
            <div className="icon-container">
              <img className="blue-circle" src={flexi4} alt="Blue Circle" />
            </div>
            <p className="intro-text">
              Big savings when compared to drums & ISO Tanks
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
