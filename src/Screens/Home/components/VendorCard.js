import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MDBContainer } from "mdb-react-ui-kit";
import { BsFillStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { BsCheckLg } from "react-icons/bs";
function VendorCard() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Container className="my-5">
        <Row>
          <Col md={12} xs={12}>
            <div className="highest-rated-text-link">
              <div>
                <p>Highest Rated Vendors</p>
              </div>
              <div>
                <p>
                  <a href="#a">
                    Browse All Vendors <BsArrowRight />
                  </a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} sm={12} xs={12} lg={12}>
            <Carousel interval={null} variant="dark" onSelect={handleSelect}>
              <Carousel.Item>
                <Container>
                  <Row>
                    <Col md={4}>
                      <Card style={{}}>
                        {/* avatar */}
                        <Nav.Link eventKey={2} href="#memes">
                          <MDBContainer
                            className="d-flex justify-content-center"
                            style={{ height: "6vh", position: "relative" }}
                          >
                            <img
                              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                              className="rounded-circle"
                              alt="Avatar"
                            />
                            <span className="verification-check-tick">
                              {<BsCheckCircleFill />}
                            </span>
                          </MDBContainer>
                        </Nav.Link>
                        {/* avatar ends */}
                        <Card.Body>
                          <div className="title-desc-card">
                            <p>Tom Smith</p>
                            <p>Electrician</p>
                          </div>

                          <div className="rating-div">
                            <span>5.0</span>
                            <div>
                              <span>
                                {<BsFillStarFill />}
                                {<BsFillStarFill />}
                                {<BsFillStarFill />}
                                {<BsFillStarFill />}
                                {<BsFillStarFill />}
                              </span>
                            </div>
                          </div>
                          <div className="information-section-card">
                            <Container className="my-4">
                              <Row>
                                <Col md={4}>
                                  <p className="bold-p-for-card">Location</p>
                                </Col>
                                <Col md={4}>
                                  <p className="bold-p-for-card">Rate</p>
                                </Col>
                                <Col md={4}>
                                  <p className="bold-p-for-card">Job Success</p>
                                </Col>
                              </Row>
                              <Row>
                                <Col md={4}>
                                  <p className="black-bold-p-for-card">
                                    San Diego
                                  </p>
                                </Col>
                                <Col md={4}>
                                  <p className="black-bold-p-for-card">
                                    $60/hr
                                  </p>
                                </Col>
                                <Col md={4}>
                                  <p className="black-bold-p-for-card">95%</p>
                                </Col>
                              </Row>
                            </Container>
                          </div>
                          <div className="btn-div-for-card">
                            <button className="geegr-btn">View Profile</button>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={4}>
                      <Card style={{}}>
                        {/* avatar */}
                        <Nav.Link eventKey={2} href="#memes">
                          <MDBContainer
                            className="d-flex justify-content-center"
                            style={{ height: "6vh", position: "relative" }}
                          >
                            <img
                              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                              className="rounded-circle"
                              alt="Avatar"
                            />
                            <span className="verification-check-tick">
                              {<BsCheckCircleFill />}
                            </span>
                          </MDBContainer>
                        </Nav.Link>
                        {/* avatar ends */}
                        <Card.Body>
                          <div className="title-desc-card">
                            <p>Tom Smith</p>
                            <p>Electrician</p>
                          </div>

                          <div className="rating-div">
                            <span>5.0</span>
                            <div>
                              <span>
                                {<BsFillStarFill />}
                                {<BsFillStarFill />}
                                {<BsFillStarFill />}
                                {<BsFillStarFill />}
                                {<BsFillStarFill />}
                              </span>
                            </div>
                          </div>
                          <div className="information-section-card">
                            <Container className="my-4">
                              <Row>
                                <Col md={4}>
                                  <p className="bold-p-for-card">Location</p>
                                </Col>
                                <Col md={4}>
                                  <p className="bold-p-for-card">Rate</p>
                                </Col>
                                <Col md={4}>
                                  <p className="bold-p-for-card">Job Success</p>
                                </Col>
                              </Row>
                              <Row>
                                <Col md={4}>
                                  <p className="black-bold-p-for-card">
                                    San Diego
                                  </p>
                                </Col>
                                <Col md={4}>
                                  <p className="black-bold-p-for-card">
                                    $60/hr
                                  </p>
                                </Col>
                                <Col md={4}>
                                  <p className="black-bold-p-for-card">95%</p>
                                </Col>
                              </Row>
                            </Container>
                          </div>
                          <div className="btn-div-for-card">
                            <button className="geegr-btn">View Profile</button>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={4}>
                      <Card style={{}}>
                        {/* avatar */}
                        <Nav.Link eventKey={2} href="#memes">
                          <MDBContainer
                            className="d-flex justify-content-center"
                            style={{ height: "6vh", position: "relative" }}
                          >
                            <img
                              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                              className="rounded-circle"
                              alt="Avatar"
                            />
                            <span className="verification-check-tick">
                              {<BsCheckCircleFill />}
                            </span>
                          </MDBContainer>
                        </Nav.Link>
                        {/* avatar ends */}
                        <Card.Body>
                          <div className="title-desc-card">
                            <p>Tom Smith</p>
                            <p>Electrician</p>
                          </div>

                          <div className="rating-div">
                            <span>5.0</span>
                            <div>
                              <span>
                                {<BsFillStarFill />}
                                {<BsFillStarFill />}
                                {<BsFillStarFill />}
                                {<BsFillStarFill />}
                                {<BsFillStarFill />}
                              </span>
                            </div>
                          </div>
                          <div className="information-section-card">
                            <Container className="my-4">
                              <Row>
                                <Col md={4}>
                                  <p className="bold-p-for-card">Location</p>
                                </Col>
                                <Col md={4}>
                                  <p className="bold-p-for-card">Rate</p>
                                </Col>
                                <Col md={4}>
                                  <p className="bold-p-for-card">Job Success</p>
                                </Col>
                              </Row>
                              <Row>
                                <Col md={4}>
                                  <p className="black-bold-p-for-card">
                                    San Diego
                                  </p>
                                </Col>
                                <Col md={4}>
                                  <p className="black-bold-p-for-card">
                                    $60/hr
                                  </p>
                                </Col>
                                <Col md={4}>
                                  <p className="black-bold-p-for-card">95%</p>
                                </Col>
                              </Row>
                            </Container>
                          </div>
                          <div className="btn-div-for-card">
                            <button className="geegr-btn">View Profile</button>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Second slide&bg=282c34"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Third slide&bg=20232a"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default VendorCard;
