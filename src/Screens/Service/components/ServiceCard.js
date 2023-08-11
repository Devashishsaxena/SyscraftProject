import React from "react";
import { Col, Container, Row, Nav } from "react-bootstrap";
import { MDBContainer } from "mdb-react-ui-kit";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Rating from "../../../Components/rating/Rating";

function ServiceCard({
  title,
  rating,
  location,
  successRate,
  verified,
  id,
  subtitle,
  serviceCharge,
  displayImage,
}) {
  return (
    <>
      <Container>
        <Row>
          <Col md={12} sm={12} xs={12}>
            <div className="service-card-horizontal custom-shadow p-2 bg-white rounded">
              <div className="avatar-title-rating-div">
                <Nav.Link eventKey={2} href="#memes">
                  <MDBContainer
                    className="d-flex justify-content-center"
                    style={{ height: "93px", position: "relative" }}
                  >
                    <img
                      src={displayImage}
                      className="rounded-circle"
                      alt="Avatar"
                      style={{ width: "93px", height: "93px" }}
                    />
                    {verified ? (
                      <span className="verification-check-tick"></span>
                    ) : (
                      <span className="verification-check-tick">
                        {
                          <BsCheckCircleFill
                            style={{
                              width: "19px",
                              height: "19px",
                              top: "46px",
                              right: "-11px",
                              width: "19px",
                              height: "19px",
                              top: "61px",
                              right: "-3px",
                              background: "white",
                              borderRadius: "52%",
                            }}
                          />
                        }
                      </span>
                    )}
                  </MDBContainer>
                </Nav.Link>
                <div className="title-desc-card">
                  <p>{title}</p>
                  <p>{subtitle}</p>
                  <div className="rating-div">
                    <span className="rating-count">{rating}.0</span>
                    <div className="rating-div">
                      <Rating rating={rating} maxRating={5} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="information-section-card information-section-card2">
                <Container className="my-4">
                  <Row>
                    <Col md={4}>
                      {/* <p
                        className="bold-p-for-card"
                        style={{ textAlign: "center" }}
                      >
                        Job Done
                      </p> */}
                    </Col>
                    <Col md={4}>
                      <p
                        className="bold-p-for-card"
                        style={{ textAlign: "center" }}
                      >
                        Job Done
                      </p>
                    </Col>
                    <Col md={4}>
                      <p
                        className="bold-p-for-card"
                        style={{ textAlign: "center" }}
                      >
                        Location
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      {/* <p
                        className="black-bold-p-for-card"
                        style={{
                          textAlign: "center",
                          fontSize: "18px",
                          fontWeight: 700,
                        }}
                      >
                        {successRate}%
                      </p> */}
                    </Col>
                    <Col md={4}>
                      <p
                        className="black-bold-p-for-card"
                        style={{
                          textAlign: "center",
                          fontSize: "18px",
                          fontWeight: 700,
                        }}
                      >
                        {successRate}%
                      </p>
                    </Col>
                    <Col md={4}>
                      <p
                        className="black-bold-p-for-card"
                        style={{
                          textAlign: "center",
                          fontWeight: 700,
                          fontSize: "18px",
                        }}
                      >
                        {location}
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <div className="btn-div-for-card">
                        <Link to={`/vendor_detail/${id}`}>
                          <button className="geegr-btn">View Profile</button>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ServiceCard;
