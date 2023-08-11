import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import tapIcon2 from "../../../assets/images/tapIcon.png";

function CateogryCard() {
  return (
    <>
      <div className="category-card-div">
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
                    Commercial plumbers are qualified professionals who perform
                    plumbing duties in commercial settings. Many commercial
                    plumbers work in schools, hospitals, colleges and
                    manufacturing plants and specialize in working around
                    industrial equipment.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CateogryCard;
