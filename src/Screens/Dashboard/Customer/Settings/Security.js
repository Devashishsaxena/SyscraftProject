import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomerWrapper from "src/Screens/Dashboard/Customer/CustomerWrapper";
import { Link, useParams } from "react-router-dom";
import {
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBContainer,
  MDBNavbar,
} from "mdb-react-ui-kit";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";

function Security() {
  return (
    <CustomerWrapper>
      <Col xs={12} md={12}>
        <Container>
          <Row>
            <Col xs={12} md={12}>
              <div className="customer prctCont">
                <div className="customerContainer">
                  <div className="breadcrumb-n-title">
                    <div className="dashboard-headline">
                      <h3>Settings</h3>
                      <p>
                        Setting <ArrowForwardIosIcon /> Security / Privacy
                      </p>
                    </div>
                    <div className="breadcrum-ui-kit">
                      <MDBNavbar expand="lg" light bgColor="dark">
                        <MDBContainer fluid>
                          <MDBBreadcrumb>
                            <MDBBreadcrumbItem>
                              <Link to="/">Home</Link>
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem>
                              <a href="/customer_dashboard">Dashboard</a>
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem>
                              <a href="/customer_dashboard">Settings</a>
                            </MDBBreadcrumbItem>
                          </MDBBreadcrumb>
                        </MDBContainer>
                      </MDBNavbar>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={12} xs={12}>
              <Container className="project-listing-container">
                <Row>
                  <Col md={12} xs={12}>
                    <div className="card-lisitng">
                      <div className="project-listing-title">
                        <VerifiedUserIcon />
                        <p>Security & Privacy</p>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    {/* <div className="addresContainer "> */}
                    <div className="termsCodition">
                      <div className="homeIcon">
                        <h3>Security </h3>
                      </div>
                      <div className="terms">
                        <p>
                          Lörem ipsum jude viskap dolig. Blogga tenar. Sykav vak
                          ysam. Etubenade bevor krongen tåvis men kiktig. Mäsm
                          ot vägg-tv
                        </p>
                        <ToggleOnIcon />
                      </div>
                      <div className="terms">
                        <p>
                          Lörem ipsum jude viskap dolig. Blogga tenar. Sykav vak
                          ysam. Etubenade bevor krongen tåvis men kiktig. Mäsm
                          ot vägg-tv
                        </p>
                        <ToggleOnIcon />
                      </div>
                      <div className="terms">
                        <p>
                          Lörem ipsum jude viskap dolig. Blogga tenar. Sykav vak
                          ysam. Etubenade bevor krongen tåvis men kiktig. Mäsm
                          ot vägg-tv
                        </p>
                        <ToggleOnIcon />
                      </div>
                    </div>
                    {/* </div> */}
                  </Col>
                </Row>
                <Row></Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Col>
    </CustomerWrapper>
  );
}

export default Security;
