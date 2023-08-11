import React from "react";
import "./Category.scss";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import tapIcon from "../../assets/images/tap-icon.png";
import tapIcon2 from "../../assets/images/tapIcon.png";
import Wrapper from "../../Utlilities/Wrapper";
import CateogryCard from "./components/CateogryCard";

function Category() {
  const wrapperHeight = "13vh";

  return (
    <>
      <Wrapper wrapperHeight={wrapperHeight} />
      <Container>
        <Row>
          <Col md={1} sm={1}></Col>
          <Col md={10} sm={10}>
            <Container fluid>
              <Row>
                <Col md={2} sm={2}>
                  <div className="icon-div">
                    <img src={tapIcon} alt="icon"></img>
                  </div>
                </Col>
                <Col md={10} sm={10}>
                  <div className="category-title-div">
                    <p>
                      Result for search: <span>Plumber</span>
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
            <Container fluid>
              <Row>
                <Col md={12} sm={12}>
                  {/* <div className="category-card-div">
                    <Container fluid>
                      <Row>
                        <Col md={2} sm={10}>
                          <div className="icon-category-card">
                            <img src={tapIcon2} alt="icon"></img>
                          </div>
                        </Col>
                        <Col md={10} sm={10}>
                          <div className="category-card-text">
                            <div className="category-card-title">
                              <p>Commercial Plumber</p>
                            </div>
                            <div className="category-card-desc">
                              <p>
                                Commercial plumbers are qualified professionals
                                who perform plumbing duties in commercial
                                settings. Many commercial plumbers work in
                                schools, hospitals, colleges and manufacturing
                                plants and specialize in working around
                                industrial equipment.
                              </p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </div> */}
                  <CateogryCard />
                  <CateogryCard />
                  <CateogryCard />
                  <CateogryCard />
                  <CateogryCard />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col md={10} sm={10}></Col>
        </Row>
      </Container>
    </>
  );
}

export default Category;
