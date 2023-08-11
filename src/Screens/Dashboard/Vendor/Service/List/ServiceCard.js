import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import EditNoteIcon from "@mui/icons-material/EditNote";
import Bag from "src/assets/images/bag.png";


function ServiceCard({service,deleteService}) {

    return (<div className="project-dashboard-card">
    <Container fluid>
      <Row className="my-2">
        <Col xs={11} md={11}>
          <p className="project-title-dashboard">{service.title}</p>
        </Col>
        <Col xs={1} md={1}>
          <div className="status-button-div">
            <button onClick={(e) => deleteService(service._id)}>
              Delete
            </button>
            <Link to={"/vendor/service/edit/" + service._id} id="withdraw">
                    <EditNoteIcon />
                </Link>
          </div>
        </Col>
      </Row>
      <Row className="my-2">
        <Col xs={2} md={2}>
          <div className="date-div">
            <img  src={Bag} />
            <p>4.7 Rating </p>
          </div>
        </Col>
        <Col xs={2} md={2}>
          <div className="date-div">
            <img src={Bag} />
            <p>21 Work Done</p>
          </div>
        </Col>
        <Col xs={2} md={2}>
          <div className="date-div">
            <img src={Bag} />
            <p>10 Reviews</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
            <div className="service-date-div" style={{marginTop:"20px", fontWeight:"bold"}}>
                <p>Service added on {moment(service.createdAt).format("DD MMMM YYYY")}</p>
            </div>
        </Col>
      </Row>
      {/* <Row className="my-2">
        <Col xs={6} md={6}>
          <div className="date-div">
            <p>Posted on {moment(createdAt).format("DD MMMM YYYY")}</p>
            <img src={Bag} id={"expiringBag"} />
            <p>Expiring on {moment(createdAt).format("DD MMMM YYYY")}</p>
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        {status === "active" ? (
          <Col md={12} xs={12}>
            <div className="button-group-dashboard">
              <Link to={`/customer_proposals/${proposalID}`}>
                <button className="purple-button">Manage Proposals</button>
              </Link>

              <Link to={"/project/edit/" + data._id} id="withdraw">
                <button className="edit-button">
                  <EditNoteIcon />
                </button>
              </Link>
              <button
                className="delete-button"
                onClick={(e) => deleteProject(data._id)}
              >
                <BsTrash />
              </button>
            </div>
          </Col>
        ) : (
          ""
        )}
      </Row> */}
    </Container>
  </div>)
}
export default ServiceCard