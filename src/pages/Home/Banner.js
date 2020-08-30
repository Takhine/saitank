import React from "react";
import { Row, Col, Button } from "antd";

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
              <h1 className="main-heading">Reliable, Safe & Economical</h1>
              <h2 className="main-subheading">
                Bulk Liquid Solutions in Flexitank.
                <br />
                Nationwide - Worldwide
              </h2>
              <Button className="cta-button">
                Learn More{" "}
                <img className="arrow" src={blackArrow} alt="Black Arrow" />
              </Button>
            </Col>
            <Col xs={24} lg={12} xl={14}>
              <div className="image-container">
                <img
                  className="flexitank"
                  src={flexitank}
                  alt="Sai Flexitank"
                />
              </div>
            </Col>
          </Row>
        </div>
        <img className="banner-asset" src={bannerAsset} alt="Banner Wave" />
      </div>
      <div className="bottom-banner"></div>
    </div>
  );
}
