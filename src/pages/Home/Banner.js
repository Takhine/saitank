import React from "react";
import { Row, Col, Button } from "antd";
import FadeIn from "react-fade-in";
// Images
import blackArrow from "static/images/icons/black-arrow.svg";
import flexitank from "static/images/flexitank.png";
import bannerAsset from "static/images/banner-asset.svg";
import blueArrow from "static/images/icons/blue-arrow.svg";
import emblem from "static/images/emblem.png";
const pointers = [
  {
    id: 1,
    text:
      "We are Certified, Qualified and Experienced Liquid Transport Specialists.",
  },
  {
    id: 2,
    text:
      "We offer Holistic Liquid Logistic Solutions from “ The Source to The End “  second to none!",
  },
  {
    id: 3,
    text:
      "Our Supply Chain Structure is Seamless covering Pick Up, Storage, Distribution - Delivery anywhere in the World &  All Over India.",
  },
  {
    id: 4,
    text:
      "Our Global Network of Partners and our Indian Associates operate  under the Code of “ Team Spirit “ which is a Winner all the way!",
  },
  {
    id: 5,
    text:
      "Our Proven Track Record and Our Prestigious List of Customers speaks for itself.",
  },
  {
    id: 6,
    text:
      "Quality Tanks combined with our Dedicated Service  is a Win-Win Situation for all of us !",
  },
];

const firstPoints = [
  {
    id: 1,
    text:
      "We are Certified, Qualified and Experienced Liquid Transport Specialists.",
  },
  {
    id: 2,
    text:
      "We offer Holistic Liquid Logistic Solutions from “ The Source to The End “  second to none!",
  },
  {
    id: 3,
    text:
      "Our Supply Chain Structure is Seamless covering Pick Up, Storage, Distribution - Delivery anywhere in the World &  All Over India.",
  },
];

const secondPoints = [
  {
    id: 4,
    text:
      "Our Global Network of Partners and our Indian Associates operate  under the Code of “ Team Spirit “ which is a Winner all the way!",
  },
  {
    id: 5,
    text:
      "Our Proven Track Record and Our Prestigious List of Customers speaks for itself.",
  },
  {
    id: 6,
    text:
      "Quality Tanks combined with our Dedicated Service  is a Win-Win Situation for all of us !",
  },
];

export default function Banner() {
  return (
    <div className="banner">
      <div className="top-banner">
        <div className="banner-content">
          <Row gutter={12}>
            <Col xs={24} lg={12} xl={10} className="left-col">
              <FadeIn delay="1500">
                <h1 className="main-heading">Reliable, Safe & Economical</h1>
              </FadeIn>
              <FadeIn delay="1500">
                <h2 className="main-subheading">
                  Bulk Liquid Solutions in Flexitank.
                  <br />
                  Nationwide - Worldwide
                </h2>
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
      <div className="bottom-banner">
        <Row gutter={12}>
          <Col xs={24} lg={6}>
            <FadeIn delay="1700">
              <ul className="pointers">
                {firstPoints.map((point) => (
                  <li key={point.id}>
                    <img
                      className="point-arrow"
                      src={blueArrow}
                      alt="Blue Arrow"
                    />{" "}
                    <span>{point.text}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </Col>
          <Col xs={24} lg={12}>
            <div className="emblem-container">
              <FadeIn delay="1900">
                <img
                  className="emblem"
                  src={emblem}
                  alt="25 Years of Saitank"
                />
              </FadeIn>
            </div>
          </Col>
          <Col xs={24} lg={6}>
            <FadeIn delay="1700">
              <ul className="pointers">
                {secondPoints.map((point) => (
                  <li key={point.id}>
                    <img
                      className="point-arrow"
                      src={blueArrow}
                      alt="Blue Arrow"
                    />{" "}
                    <span>{point.text}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </Col>
        </Row>
      </div>
    </div>
  );
}
