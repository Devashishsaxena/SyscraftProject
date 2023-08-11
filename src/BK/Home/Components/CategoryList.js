import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FcEngineering } from "react-icons/fc";
import { FcBiotech } from "react-icons/fc";
import { FcBrokenLink } from "react-icons/fc";
import { FcCustomerSupport } from "react-icons/fc";
import { FcFlowChart } from "react-icons/fc";
import { FcPositiveDynamic } from "react-icons/fc";
import { FcShipped } from "react-icons/fc";
import mechanic from "../../../assets/images/mechanic.png";
import electrician from "../../../assets/images/electrician.png";
import mechanism from "../../../assets/images/mechanism.png";
import plumber from "../../../assets/images/plumber.png";
import repair from "../../../assets/images/repair.png";
import service from "../../../assets/images/service.png";
import wrench from "../../../assets/images/wrench.png";
import cleaning from "../../../assets/images/cleaning.png";
import makeup from "../../../assets/images/makeup.png";
import icon1 from "../../../assets/images/icon1.png";
const data = [
  {
    id: 1,
    title: "AC Repair",
    description: "Lorem ipsum is simple dummy text of the prinitng.",
    imageURL: "../../../assets/images/mechanic.png",
    icon: repair,
  },
  {
    id: 2,
    title: "Home & Repair",
    description: "Lorem ipsum is simple dummy text of the prinitng.",
    imageURL: mechanism,
    icon: mechanism,
  },
  {
    id: 3,
    title: "Cleaning & Pest control",
    description: "Lorem ipsum is simple dummy text of the prinitng.",
    imageURL: cleaning,
    icon: cleaning,
  },
  {
    id: 4,
    title: "Electrician",
    description: "Lorem ipsum is simple dummy text of the prinitng.",
    imageURL: electrician,
    icon: electrician,
  },
  {
    id: 5,
    title: "Plumber & Carpenter",
    description: "Lorem ipsum is simple dummy text of the prinitng.",
    imageURL: plumber,
    icon: plumber,
  },
  {
    id: 6,
    title: "Salon for men",
    description: "Lorem ipsum is simple dummy text of the prinitng.",
    imageURL: service,
    icon: service,
  },
  {
    id: 7,
    title: "Salon for women",
    description: "Lorem ipsum is simple dummy text of the prinitng.",
    imageURL: makeup,
    icon: makeup,
  },
  {
    id: 8,
    title: "Mechanic",
    description: "Lorem ipsum is simple dummy text of the prinitng.",
    imageURL: mechanic,
    icon: mechanic,
  },
];

function CategoryList() {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md={3} xs={0}></Col>
          <Col md={6} sm={12} xs={12}>
            <div className="align-center-flex">
              <h1 className="title-for-category">Popular Job Category</h1>
            </div>
          </Col>
          <Col md={3} xs={0}></Col>
        </Row>
        <Row className="my-5">
          {data?.map((d) => (
            <Col md={3} sm={3} xs={4} id={d.key}>
              <div className="service-grid-home">
                {/* <img src={FcSupport} alt="service-icon" /> */}
                {/* <span>{<FcEngineering />}</span> */}
                <span>
                  <img src={icon1} alt="icon"></img>
                </span>
                <p className="title-of-service-home">{d.title}</p>
                {/* <p className="description-of-service-home">{d.description}</p> */}
              </div>
            </Col>
          ))}
          {/* <Col md={3} sm={3} xs={4}>
            <div className="service-grid-home">
              <img src={FcSupport} alt="service-icon" />
              <span>{<FcSupport />}</span>

              <p className="title-of-service-home">AC Repair</p>
              <p className="description-of-service-home">
                Lorem ipsum is simple dummy text of the prinitng.
              </p>
            </div>
          </Col> */}
        </Row>
      </Container>
    </>
  );
}

export default CategoryList;
