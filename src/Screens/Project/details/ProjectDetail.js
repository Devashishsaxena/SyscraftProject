import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsFillClockFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import Wrapper from "../../../Utlilities/Wrapper";
import useGetPosts from "../../../Hooks/useGetPosts";
import moment from "moment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import posted from "../components/posted.svg";

import Immediate from "../components/Immediate_project-listing-screen.svg";
import Notimmediate from "../components/Not-Immediate_project-listing-screen.svg";
import locationLogo from "../components/location.svg";
import light from "../components/light.svg";
function ProjectDetail() {
  const { id } = useParams();

  const bodyData = {
    _id: id,
  };
  const project=useGetPosts({url: 'project_details',data: bodyData});

  let ratingLoop = Array.apply(null, {
    length: project?.data?.total_rating,
  }).map(Number.call, Number);
  const wrapperHeight = "13vh";
  console.log(project?.data?.data.location, "this is the data");
  return (
    <>
      <Wrapper wrapperHeight={wrapperHeight} />
      <Container fluid>
        <Row>
          <div id="top-section-row" className="shadow-sm">
            <Container>
              <Row style={{ display: "flex", alignItems: "center" }}>
                <Col md={2} xs={1} style={{ padding: "32px" }}>
                  <div className="project-card-avatar">
                    <div className="rightSideofCard">
                      <img src="https://images.unsplash.com/photo-1470207086513-4657d9988b08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwyMzY4MDB8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
                    </div>
                  </div>
                </Col>
                <Col md={7} xs={9}>
                  <div className="title-desc-card2">
                    <p>{project?.data?.data?.title}</p>
                    <p>{project?.data?.data.description}</p>

                    <div className="iconContainer">
                      <div>
                        <img src={light} />
                        <span style={{ marginLeft: "2px" }}>
                          {project?.data?.data.street_name}
                        </span>
                      </div>
                      <div>
                        <img src={locationLogo} />
                        <span>{project?.data?.data.location}</span>
                      </div>
                      <div>
                        {project?.data?.data.is_immidieat ? (
                          <>
                            <img src={Immediate} />
                            <span>Immediate</span>
                          </>
                        ) : (
                          <>
                            <img src={Notimmediate} />
                            <span>Not Immediate</span>
                          </>
                        )}
                      </div>
                      <div>
                        <img src={posted} />

                        <span>
                          {moment(project?.data?.data.created_at).fromNow()}
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Row>
        <Row>
          <Col md={8} sm={8}>
            {/* left section */}
            <Container>
              <Row>
                <Col md={12} xs={12}>
                  <div className="about-div">
                    <p id="descript">Project Description</p>
                    <p>{project?.data?.data.description}</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12} xs={12}>
                  <div className="map-on-project-detail">
                    <p className="location-title">Location</p>

                    <iframe
                      title="google-map-on-project-detail"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115681.29592731265!2d-77.47713270775661!3d25.0326996781907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x892f7c99b981dbc9%3A0x2aef01d3485e50d2!2sNassau%2C%20Bahamy!5e0!3m2!1spl!2spl!4v1624445118063!5m2!1spl!2spl"
                      className="w-100"
                      height="400"
                      loading="lazy"
                    ></iframe>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>

          {/* right side section */}
          <Col md={4} xs={4}>
            <Container fluid>
              <Row>
                <Col md={12} xs={12} style={{ marginTop: "68px" }}>
                  <div className="apply-now-btn-div">
                    <button>Submit Proposal</button>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12} xs={12}>
                  <div className="project-summary-div">
                    <div className="project-summary-title">
                      <h3>Job Summary</h3>
                    </div>
                    <div className="project-location-div locationContainer">
                      <div>
                        <LocationOnIcon />
                        <p>Location</p>
                      </div>
                      <div style={{ marginLeft: "27px" }}>
                        <span>{project?.data?.data.location}</span>
                      </div>
                    </div>
                    <div className="project-location-div">
                      <div className="postedIcon">
                        <BsFillClockFill
                          style={{ width: "20px", height: "15px" }}
                        />
                        <p>Date Posted</p>
                      </div>
                      <div>
                        <span style={{ marginLeft: "42px" }}>
                          {moment(project?.data?.created_at).fromNow()}
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProjectDetail;
