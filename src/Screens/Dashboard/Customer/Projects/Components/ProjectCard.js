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
import Bag from "../bag.png";
import Withdrawing from "../Withdrawing.png";
import EditNoteIcon from "@mui/icons-material/EditNote";
function ProjectCard({
  status,
  count,
  title,
  data,
  createdAt,
  proposalID,
  deleteProject,
}) {
  console.log("status", status);
  const navigate = useNavigate();

  let btnColor = "";
  let textColor = "";
  if (status === "pending approval") {
    btnColor = "#E0F5D7";
    textColor = "#449625";
  } else if (status === "active") {
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
        <Row className="my-2">
          <Col xs={3} md={3}>
            <p className="project-title-dashboard">{title}</p>
          </Col>
          <Col xs={3} md={3}>
            <div className="status-button-div">
              <button style={{ color: textColor, backgroundColor: btnColor }}>
                {status}
              </button>
            </div>
          </Col>
        </Row>
        <Row className="my-2">
          <Col xs={6} md={6}>
            <div className="date-div">
              <img src={Bag} />
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
        </Row>
      </Container>
    </div>
  );
}

export default ProjectCard;
