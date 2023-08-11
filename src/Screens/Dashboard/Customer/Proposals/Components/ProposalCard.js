import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MDBContainer } from "mdb-react-ui-kit";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import Rating from "src/Components/rating/Rating";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

//import Rating from "src/Screens/Dashboard/Components/rating/Rating";

function ProposalCard({
  status,
  verification,
  title,
  email,
  rating,
  image,
  proposal_id,
  redirect,
}) {
  let btnColor = "";
  let textColor = "";
  if (status === "pending approval") {
    btnColor = "#E0F5D7";
    textColor = "#449625";
  } else if (status === "expiring") {
    btnColor = "#FBF6DD";
    textColor = "#A18D28";
  } else if (status === "expired") {
    btnColor = "#FFE6E6";
    textColor = "#EA5454";
  } else {
    btnColor = "#449625";
    textColor = "#E0F5D7";
  }
  return (
    <div className="project-dashboard-card">
      <Container fluid>
        <Row>
          <Col md={1} xs={1} style={{ marginRight: "20px" }}>
            <Nav.Link eventKey={2} href="#memes">
              <MDBContainer
                className="d-flex justify-content-center cardsImage"
                style={{}}
              >
                <img
                  // src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  src={image}
                  className="rounded-circle"
                  alt="Avatar"
                />
              </MDBContainer>
            </Nav.Link>
          </Col>
          <Col md={10} xs={10}>
            <Container style={{ marginTop: "32px" }}>
              <Row>
                <Col md={12} xs={12}>
                  <div className="proposal-card-title">
                    <p>
                      {title}
                      {/* <span>flag</span> */}
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={3} md={3}>
                  <div className="icon-with-p">
                    <p>Testing description here</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <div className="rating-div">
                  <span className="rating-counts">{rating}.0</span>
                  <div className="rating-div">
                    <Rating rating={rating} maxRating={5} />
                  </div>
                </div>
              </Row>
              <Row>
                <div className="button-group-proposal">
                  <Link to={`/vendor_detail/${redirect}`}>
                    <button className="view-profile">
                      <span>
                        <RemoveRedEyeIcon />
                      </span>
                      View Proposal
                    </button>
                  </Link>
                  <Link to={`/customer_chat/${proposal_id}`}>
                    <button className="send-message">
                      <span>
                        <BsEnvelope />
                      </span>
                      Chat With Vendor
                    </button>
                  </Link>
                </div>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProposalCard;
