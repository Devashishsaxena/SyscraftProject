import React, { useState, useEffect } from "react";
import {
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBContainer,
  MDBNavbar,
} from "mdb-react-ui-kit";
import { Container, Row, Col } from "react-bootstrap";
import { BsListStars } from "react-icons/bs";
import ProposalCard from "src/Screens/Dashboard/Customer/Proposals/Components/ProposalCard";
import { useSelector } from "react-redux";
import useFetchPost from "src/Hooks/useFetchPost";
import { useParams } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import GroupsIcon from "@mui/icons-material/Groups";
import { Link } from "react-router-dom";
function ProposalListing() {
  const getState = useSelector((state) => state);
  const [title, setTitle] = useState("Sindy Forest");
  const [email, setEmail] = useState("sindy@example.com");
  const [contact, setContact] = useState("(+622)-122-3423");
  const [rating, setRating] = useState(4.5);
  const [verification, setVerification] = useState(true);
  const { id } = useParams();
  const bodyData = {
    project_id: id,
  };
  const body = JSON.stringify(bodyData);
  const headers = {
    method: "POST",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Content-Type": "application/json",
    token: getState?.userSignin?.userInfo?.data?.token,
    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzYjJhMmVmNjFkYTk4MTMwYTQxZWViNiIsImZpcnN0X25hbWUiOiJjdXN0b21lcm5ldyIsImVtYWlsIjoiY3VzdG9tZXJuZXdAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkM2pHSm93U1NZSUFwMHFDQUNyN1pZT0l1bFlKMFFrSjYvb05GY0FScVZjUXg0a29WRVJkYi4iLCJ0eXBlIjoidXNlciIsImZjbV90b2tlbiI6W10sImRlbGV0ZWQiOmZhbHNlLCJzdGF0dXMiOiJhY3RpdmUiLCJjcmVhdGVkX2F0IjoiMjAyMy0wMS0wMlQwOToyNTowMy42NjNaIiwiX192IjowfSwiaWF0IjoxNjcyODI1NjI1fQ._unC0kHynMwoYqSD_On2PZFRPPGQbYBfcvr6jzG_Lt0",
  };
  const {
    response,
    error,
    isLoading,
    fetchByPost,
    data: proposals,
  } = useFetchPost(
    process.env.REACT_APP_URL + "/customer/proposal/",
    body,
    headers
  );
  useEffect(() => {
    fetchByPost();
  }, [bodyData.project_id]);

  console.log(proposals, "data at proposals");
  return (
    <>
      <Col xs={12} md={12}>
        <Container style={{ marginBottom: "20px", padding: "25px" }}>
          <Row>
            <Col xs={12} md={12}>
              <div className="customer">
                <div className="customerContainer">
                  <div className="breadcrumb-n-title">
                    <div className="dashboard-headline">
                      <h3>
                        <Link to="/customer_projects">
                          <KeyboardBackspaceIcon />
                          Projects
                        </Link>
                      </h3>
                      <p>
                        Projects <ArrowForwardIosIcon /> Carpenter{" "}
                        <ArrowForwardIosIcon /> Manage Proposals
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
                              <Link to="/customer_dashboard">Dashboard</Link>
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem active>
                              <Link to="/customer_projects">Projects</Link>
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
                    <div className="project-lisitng">
                      <div>
                        <GroupsIcon />
                        <p>List of proposal</p>
                      </div>
                    </div>
                  </Col>
                </Row>
                {proposals?.data?.proposals?.length ? (
                  proposals.data.proposals.map((pro) => (
                    <Row key={pro._id}>
                      <ProposalCard
                        title={pro.service.vendor.first_name}
                        email={pro.service.vendor.email}
                        rating={pro.service.rating}
                        verification={pro.service.verified}
                        image={pro.service.display_image}
                        redirect={pro.service._id}
                        proposal_id={pro._id}
                      />
                    </Row>
                  ))
                ) : (
                  <p>{isLoading ? "Loading..." : "data not found"}</p>
                )}

                {proposals?.data?.proposals?.map((data) => {
                  console.log(data, "click");
                })}

                {/* <Row>
                  <ProposalCard
                    title={title}
                    email={email}
                    contact={contact}
                    rating={rating}
                    verification={verification}
                  />
                </Row> */}
                {/* <Row>
                  <ProposalCard />
                </Row>
                <Row>
                  <ProposalCard />
                </Row> */}
              </Container>
            </Col>
          </Row>
        </Container>
      </Col>
    </>
  );
}

export default ProposalListing;
