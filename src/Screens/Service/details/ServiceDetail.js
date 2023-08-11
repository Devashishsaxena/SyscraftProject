import { useState, useEffect } from "react";
import verieyfLogo from "./verieyfLogo.png";
import { Col, Container, DropdownButton, Row } from "react-bootstrap";
import { MDBContainer } from "mdb-react-ui-kit";
import Avatar from "@mui/material/Avatar";
import useGetPosts from "src/Hooks/useGetPosts";
import { useParams } from "react-router-dom";
import Rating from "../../../Components/rating/Rating";
import moment from "moment";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ShareIcon from "@mui/icons-material/Share";
import CheckIcon from "@mui/icons-material/Check";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ServiceModal from "../components/ServiceModal";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBTextArea,
} from "mdb-react-ui-kit";
import { Form } from "react-bootstrap";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import useFetchPost from "../../../Hooks/useFetchPost";
import Wrapper from "../../../Utlilities/Wrapper";

function ServiceDetail() {
  const [params, setParams] = useState("");
  const [changeLocation, setChangeLocation] = useState("");
  const [range, setRange] = useState();
  const [varyingState, setVaryingState] = useState("");
  const [formError, setFormError] = useState([]);
  const [varyingModal, setVaryingModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const [iscontactRequest, setContactRequest] = useState(false);
  const [varyingRecipient, setVaryingRecipient] = useState("");
  const [varyingMessage, setVaryingMessage] = useState("");
  const [project_id, setProjectId] = useState();
  const [share, setShare] = useState(false);
  // const [service, setService] = useState(null);
  const getState = useSelector((state) => state);
  const navigate = useNavigate();
  const onChangeRecipient = (event) => {
    setVaryingRecipient(event.target.value);
  };

  const onChangeMessage = (event) => {
    setVaryingMessage(event.target.value);
  };
  const onChangeProjectId = (e) => {
    if (e.target.value == "add") {
      window.open("/customer_project_add", "_blank");
    } else {
      setProjectId(e.target.value);
    }
  };
  const { id } = useParams();
  //custom - fetch hook - for fetching details for services
  const bodyData = {
    service_id: id,
  };

  const {data: service}=useGetPosts({url: 'service_details',data: bodyData});

  let ratingLoop = Array.apply(null, { length: service?.data?.rating }).map(
    Number.call,
    Number
  );
  const wrapperHeight = "10vh";
  const modalOnSubmit = (e) => {
    e.preventDefault();
    if (project_id) {
      setContactRequest(true);
    } else {
      setFormError({ project: "Select Project" });
    }
  };
  var search = {
    cat_id: id,
    s: params,
    location: changeLocation,
    service_charge: range,
  };
  var body = JSON.stringify(search);
  //custom - fetch hook
  const { fetchByPost, data: services } = useFetchPost(
    process.env.REACT_APP_URL + "/front/services",
    body
  );
  useEffect(() => {
    fetchByPost();
  }, [body]);
  const shareIt = () => {
    alert("shared");
    setShare(true);
  };
  // console.log(service.data.display_image, "data at service details");
  return (
    <>
      <Wrapper wrapperHeight={wrapperHeight} />
      <Container fluid className="top-section-container">
        <Row>
          <div id="top-section-row" className="shadow-sm">
            <Container>
              <Row
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "54px",
                }}
              >
                <Col md={1} xs={1}>
                  <div className="project-card-avatar">
                    <MDBContainer className="d-flex justify-content-end">
                      <Avatar
                        alt="Avatar"
                        src={service?.data?.display_image}
                        style={{
                          margin: "1em 0px",
                          width: "149px",
                          height: "148px",
                        }}
                      />
                    </MDBContainer>
                  </div>
                </Col>
                <Col md={9} xs={9}>
                  <div className="title-desc-card2">
                    <p style={{ margin: "0px" }}>{service?.data?.title}</p>
                    <p>{service?.data?.category?.title}</p>
                    <div className="rating-div2">
                      <span>{service?.data?.rating}</span>
                      <div className="ratingTitle">
                        <Rating rating={service?.data?.rating} maxRating={5} />
                      </div>
                      {service?.data?.verified ? (
                        <div
                          className="verification-btn-div"
                          style={{
                            display: "flex",
                            background: "#6A2FF9B8",
                            borderRadius: "5px",
                            marginLeft: "30px",
                          }}
                        >
                          <span>
                            <CheckIcon />
                          </span>
                          <button style={{ background: "#6A2FF9" }}>
                            <p style={{ fontSize: "16px" }}>Verified</p>
                          </button>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Row>
        <Row>
          <Col md={8} sm={8}>
            <Container>
              <Row>
                <Col md={12} xs={12}>
                  <div className="about-div">
                    <span>About Me</span>
                    <p>{service?.data?.description}</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <div className="gray-panel">
                    <div>
                      <span>
                        <ThumbUpIcon />
                      </span>
                      <p>Work History and Feedback</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <>
                <Row>
                  <Col md={12} xs={12}>
                    {service?.data?.jobs.map((ser) => (
                      <div className="work-history-info">
                        <div>
                          <div className="work-history-title">
                            <p>{ser.project.title}</p>
                          </div>
                          <div className="rating-div2">
                            <span
                              style={{
                                paddingLeft: "7px",
                                paddingRight: "7px",
                              }}
                            >
                              {ser.review_from_customer.rating}.0
                            </span>
                            <div
                              style={{
                                marginLeft: "5px",
                                marginRight: "30px",
                              }}
                            >
                              <div
                                className="starContainer"
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                }}
                              >
                                <Rating
                                  rating={ser.review_from_customer.rating}
                                  maxRating={5}
                                />
                              </div>
                            </div>
                            <div className="date-time-div">
                              <span>
                                <CalendarMonthIcon />
                              </span>
                              <p>
                                {moment(ser.created_at).format("MMMM YYYY")}
                              </p>
                            </div>
                          </div>
                          <div className="container-of-card">
                            <p>{ser.review_from_customer.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    {service?.data?.jobs.map((ser) =>
                      console.log(ser, "check here")
                    )}
                  </Col>
                </Row>
              </>
            </Container>
          </Col>
          {/* right section */}
          <Col md={4} xs={4}>
            <div className="work-detials-div">
              <div className="rate-n-basic-details">
                <div className="flex-column flexCharges">
                  <span>{service?.data?.total_job_count}</span>
                  <span>
                    <p>Jobs Done</p>
                  </span>
                </div>
                <div className="flex-column">
                  <span>{service?.data?.location}</span>
                  <span>
                    <p>Location</p>
                  </span>
                </div>
              </div>
              <div className="make-offer-btn">
                <ServiceModal service={service} />
              </div>
              <div className="progress-bar-info-div">
                <div>
                  <p>{service?.data?.job_success}%</p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "88%" }}
                      aria-valuenow="88"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <span>
                    <p>Job Success</p>
                  </span>
                </div>

                <div>
                  <p>{service?.data?.recommendation}%</p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "100%" }}
                      aria-valuenow="88"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <span>
                    <p>Recommendation</p>
                  </span>
                </div>
                <div>
                  <p>{service?.data?.on_time}%</p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${service?.data?.on_time}%` }}
                      aria-valuenow={service?.data?.on_time}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <span>
                    <p>On Time</p>
                  </span>
                </div>
                <div>
                  <p>{service?.data?.on_budget}%</p>

                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${service?.data?.on_budget}%` }}
                      aria-valuenow={service?.data?.on_budget}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <span>
                    <p>On Budget</p>
                  </span>
                </div>
              </div>

              <div className="geegr-verification-div">
                <button>
                  <span>
                    {/* <CheckCircleIcon /> */}
                    <img src={verieyfLogo} />
                  </span>
                  <p>Verified</p>
                </button>
              </div>
              <div className="skills-div">
                <h3>skills</h3>

                {service?.data.skills.map((skil) => {
                  return <input type="text" placeholder={skil} />;
                })}
              </div>
              <div className="Attachment-div">
                <span>Training relevance certification</span>
                <a href="asa" className="attachment-box ripple-effect">
                  <span>Cover Letter</span>
                  <i>PDF</i>
                </a>
                <a href="asas" className="attachment-box ripple-effect">
                  <span>Contract</span>
                  <i>DOCX</i>
                </a>
              </div>
            </div>
            <div className="sharIt">
              <span className="shareiconContainer">
                <ShareIcon onClick={shareIt} />
              </span>
              <span>Intresting ?</span>
              <button
                className="shareBtn"
                onClick={() => {
                  // setVaryingState("Share here");
                  setShareModal(true);
                  setVaryingRecipient("how to share it");
                  // checkStatus();
                }}
              >
                Share it
              </button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            {/* modal */}
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            {/* modal */}
            <MDBModal show={shareModal} tabIndex="-1">
              <MDBModalDialog>
                <MDBModalContent>
                  <MDBModalHeader>
                    <MDBModalTitle
                      className="shareModelTitle"
                      style={{
                        fontFamily: "Nunito Sans",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "24px",
                        lineHeight: "33px",
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                        color: "#000000",
                        marginLeft: "198px",
                      }}
                    >
                      Sharing
                    </MDBModalTitle>
                    <MDBBtn
                      className="btn-close"
                      color="none"
                      onClick={() => setShareModal(false)}
                    ></MDBBtn>
                  </MDBModalHeader>
                  <MDBModalBody>
                    {!iscontactRequest ? (
                      <form
                        className="shareForm"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <div className="category-dropdown mb-4 sharediv">
                          <label
                            style={{
                              fontFamily: "Nunito Sans",
                              fontStyle: "normal",
                              fontWeight: "400",
                              fontSize: "18px",
                              lineHeight: "25px",
                              display: "flex",
                              alignItems: "center",
                              color: "#000000",
                              paddingBottom: "30px",
                              paddingLeft: "2px",
                            }}
                          >
                            Enter Phone number or Email to share{" "}
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Phone Number"
                            style={{
                              width: "452px",
                              height: "60px",
                              border: "1px solid rgba(112, 112, 112, 0.7)",
                              borderRadius: "6px",
                              paddingLeft: "20px",
                              outline: "none",
                            }}
                          />
                        </div>
                        <p
                          style={{
                            textAlign: "center",
                            fontFamily: "Nunito Sans",
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "18px",
                            lineHeight: "25px",
                            display: "flex",
                            alignItems: "center",
                            textAlign: "center",
                            color: "#000000",
                          }}
                        >
                          OR
                        </p>
                        <div className="mb-3">
                          <input
                            type="text"
                            placeholder="Enter email address"
                            style={{
                              width: "452px",
                              height: "60px",
                              border: "1px solid rgba(112, 112, 112, 0.7)",
                              borderRadius: "6px",
                              paddingLeft: "20px",
                              outline: "none",
                            }}
                          />
                        </div>
                        <div className="btn-modal-div">
                          <MDBBtn
                            onClick={(e) => modalOnSubmit(e)}
                            style={{
                              width: "452px",
                              height: "60px",
                              background: "#6A2FF9",
                              color: "white",
                            }}
                          >
                            Share
                          </MDBBtn>
                        </div>
                      </form>
                    ) : (
                      "Thanks for contact"
                    )}
                  </MDBModalBody>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ServiceDetail;
