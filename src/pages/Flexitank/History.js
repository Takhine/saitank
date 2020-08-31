import React from "react";
import { Row, Col } from "antd";
// Images
import side from "static/images/flexitank/flexitank-side.jpg";
import back from "static/images/flexitank/flexitank-back.jpg";

export default function History() {
  return (
    <div className="history">
      <Row>
        <Col xs={24} md={12} className="left-col">
          <div className="back-container">
            <img className="back-image" src={back} alt="Sai Flexitank Back View" />
          </div>
        </Col>
        <Col className="right-col" xs={24} md={12}>
          <div className="side-container">
            <img className="side-image" src={side} alt="Sai Flexitank Side View" />
          </div>
          <div className="side-content">
            <h2 className="history-heading">Our History</h2>
            <p className="history-description">
              Sai Tank is India's largest Flexitank Operator with a global
              network of partners in over 80 countries.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
