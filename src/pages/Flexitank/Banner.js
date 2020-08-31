import React from "react";
import { Row, Col, Button } from "antd";
import FadeIn from "react-fade-in";
// Images
import blackArrow from "static/images/icons/black-arrow.svg";
import flexitank from "static/images/flexitank.png";
import bannerAsset from "static/images/banner-asset.svg";

export default function Banner() {
  return (
    <div className="banner">
      <div className="top-banner">
        <div className="banner-content">
          <Row gutter={12}>
            <Col xs={24} lg={12} xl={10} className="left-col">
              <FadeIn delay="1500">
                <h1 className="main-heading">Flexitank</h1>
              </FadeIn>
              <Button className="cta-button">
                Learn More{" "}
                <img className="arrow" src={blackArrow} alt="Black Arrow" />
              </Button>
            </Col>
            <Col xs={24} lg={12} xl={14}>

            <FadeIn delay="1600">
              <div className="image-container">
                  <img
                    className="flexitank"
                    src={flexitank}
                    alt="Sai Flexitank"
                  />
              </div>
              </FadeIn>
            </Col>
          </Row>
        </div>
        <img className="banner-asset" src={bannerAsset} alt="Banner Wave" />
      </div>
    </div>
  );
}
