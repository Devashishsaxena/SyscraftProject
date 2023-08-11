import React, { useState } from "react";
import { Col, Container, Row, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import light from "./light.svg";
import locationLogo from "./location.svg";
import Immediate from "./Immediate_project-listing-screen.svg";
import Notimmediate from "./Not-Immediate_project-listing-screen.svg";
import posted from "./posted.svg";
import moment from "moment";
function ProjectCard({
  title,
  description,
  location,
  time,
  budget,
  datePosted,
  id,
  is_immidieat,
  street_name,
  created_at,
}) {
  console.log(description, "titleeeeesss");
  return (
    <>
      <Container>
        <Row>
          <Col md={12} sm={12} xs={12} className="mainCardContainer">
            <Link to={`/project_detail/${id}`} className="cardContainer">
              <div className="rightSideofCard">
                <img src="https://images.unsplash.com/photo-1470207086513-4657d9988b08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwyMzY4MDB8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
              </div>
              <div className="leftSideofCard">
                <h1>{title}</h1>
                <p>{description}</p>
                <div className="iconContainer">
                  <div>
                    <img src={light} />
                    <span>{street_name}</span>
                  </div>
                  <div>
                    <img src={locationLogo} />
                    <span>{location}</span>
                  </div>
                  {/* <div>
                    <img src={Immediate} />
                    <span>Immediate</span>
                  </div> */}
                  <div>
                    {is_immidieat ? (
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
                    <span>{moment(created_at).fromNow()}</span>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProjectCard;
