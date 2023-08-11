import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomerWrapper from "src/Screens/Dashboard/Customer/CustomerWrapper";
import useDeletePost from "src/Hooks/useDeletePost";
import SweetAlert from "react-bootstrap-sweetalert";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBContainer,
  MDBNavbar,
} from "mdb-react-ui-kit";
import ProjectCard from "../Projects/Components/ProjectCard";
import useGetPosts from "src/Hooks/useGetPosts";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "react-bootstrap";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Card from "./Card.png";
import Gift from "./Gift.png";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Paypal from "./Paypal.png";
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
import { Gif } from "@mui/icons-material";
function Settings() {
  const [addCardModal, setAddCardModal] = useState(false);
  const [addAddresModal, setAddAddresModal] = useState(false);
  const [iscontactRequest, setContactRequest] = useState(false);
  const [age, setAge] = React.useState("");
  const [jobStatus, setJobStatus] = useState(true);
  const [jobsOpen, setjobsOpen] = useState(true);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const navigation = useNavigate();
  const { type } = useParams();
  console.log(type, "aaaaa");
  const { data, isLoading, getdata } = useGetPosts({
    url: "customer_projects",
    data: { status: type ? type : "active" },
  });
  const { apply, data: deleted_status } = useDeletePost("delete_project");

  const [deleteModel, setDeleteModel] = useState({
    status: false,
    project_id: 0,
  });
  const [deleteConfirmation, setDeleteConfirmation] = useState({
    status: false,
  });

  const deletepro = async () => {
    await apply({ project_id: deleteModel.project_id });
    await getdata({ status: type });
    setDeleteModel({ status: false, project_id: 0 });
    setDeleteConfirmation({ status: true });
  };

  useEffect(() => {
    getdata({ status: type });
  }, [type]);

  useEffect(() => {
    if (jobStatus === "active") {
      setjobsOpen(true);
    } else if (jobStatus === "inactive") {
      setjobsOpen(false);
    }
  }, [jobStatus]);
  const modalOnSubmit = () => {
    console.log("added");
  };

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
                        Setting <ArrowForwardIosIcon /> Payment
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
                        <BusinessCenterIcon />
                        <p>Multiple Payment Methods</p>
                      </div>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="paymentContainer">
                      <div>
                        <p>Credit/Debit Card</p>
                      </div>
                      <div className="mainCards">
                        <div className="debitCardContainer">
                          <img src={Card} />
                        </div>
                        <div className="addNewCard">
                          <AddCircleIcon />
                          <button
                            onClick={() => {
                              setAddCardModal(true);
                            }}
                          >
                            Add New Card
                          </button>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="paymentContainer">
                      <div>
                        <p>Gift Card</p>
                      </div>
                      <div className="mainCards">
                        <div className="debitCardContainer">
                          <img src={Gift} />
                        </div>
                        <div className="addNewCard">
                          <AddCircleIcon />
                          <button
                            onClick={() => {
                              setAddCardModal(true);
                            }}
                          >
                            Reedem More Credits
                          </button>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="paypalPaymentContainer">
                      <div className="paypal">
                        <img src={Paypal} />
                        <p>PayPal</p>
                      </div>
                      <div className="paypalContainer">
                        <p>
                          You have to connect your Paypal Account to send the
                          payouts. Press connect button to provide details.
                        </p>
                        <button>Connect Paypal Account</button>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="paypalPaymentContainer bank">
                      <div className="paypal">
                        <p>Add Bank Account</p>
                      </div>
                      <div className="paypalContainer">
                        <p>
                          You have to Add or Connect your Paypal Account to send
                          the payouts. Press connect button to provide details.
                        </p>
                        <button>Connect Bank Account</button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              {/* modal */}
              <MDBModal show={addCardModal} tabIndex="-1">
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
                        Add Card
                      </MDBModalTitle>
                      <MDBBtn
                        className="btn-close"
                        color="none"
                        onClick={() => setAddCardModal(false)}
                      ></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                      {!iscontactRequest ? (
                        <form className="addCardForm">
                          <div className="category-dropdown mb-4 addCardDiv">
                            <label>Enter Your Card Number</label>
                            <input
                              type="text"
                              placeholder="0000 0000 0000 0000"
                            />
                          </div>
                          <div className="category-dropdown mb-4 addCardDiv">
                            <label>Enter Card Holder Name</label>
                            <input
                              type="text"
                              placeholder="Enter Card Holder Name"
                            />
                          </div>
                          <div className="category-dropdown mb-4 cardDate addCardDiv">
                            <div>
                              <label>Enter Expiry Number</label>
                              <input type="text" placeholder="MM / YY" />
                            </div>
                            <div id="cvv">
                              <label>Enter CVV</label>
                              <input type="text" placeholder="000" />
                            </div>
                          </div>
                          <div className="category-dropdown mb-4 checkBox addCardDiv">
                            <div>
                              <input
                                type="checkbox"
                                placeholder="Enter Phone Number"
                              />
                              <p>Automatically populate address </p>
                            </div>
                          </div>
                          <div className="addnewlink">
                            <Link>Add new Address</Link>
                          </div>
                          <div className="btn-modal-div">
                            <MDBBtn
                              // onClick={(e) => modalOnSubmit(e)}
                              onClick={() => {
                                setAddAddresModal(true);
                                setAddCardModal(false);
                              }}
                              style={{
                                width: "452px",
                                height: "60px",
                                background: "#6A2FF9",
                                color: "white",
                              }}
                            >
                              Add
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
          <Row>
            <Col md={12}>
              {/* modal */}
              <MDBModal show={addAddresModal} tabIndex="-1">
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
                        Add Address
                      </MDBModalTitle>
                      <MDBBtn
                        className="btn-close"
                        color="none"
                        onClick={() => setAddAddresModal(false)}
                      ></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                      {!iscontactRequest ? (
                        <form className="addCardForm">
                          <div className="category-dropdown mb-4 addCardDiv">
                            <label>Country/Region</label>
                            <input
                              type="text"
                              placeholder="0000 0000 0000 0000"
                            />
                          </div>
                          <div className="category-dropdown mb-4 addCardDiv">
                            <label>Street Address</label>
                            <input
                              type="text"
                              placeholder="Enter Card Holder Name"
                            />
                          </div>
                          <div className="category-dropdown mb-4 cardDate addCardDiv">
                            <div>
                              <label>Apartment No.</label>
                              <input type="text" placeholder="MM / YY" />
                            </div>
                            <div id="cvv">
                              <label>City</label>
                              <input type="text" placeholder="000" />
                            </div>
                          </div>
                          <div className="category-dropdown mb-4 cardDate addCardDiv">
                            <div>
                              <label>State</label>
                              <input type="text" placeholder="MM / YY" />
                            </div>
                            <div id="cvv">
                              <label>Zip Code</label>
                              <input type="text" placeholder="000" />
                            </div>
                          </div>
                          <div className="category-dropdown mb-4 checkBox addCardDiv">
                            <div>
                              <input
                                type="checkbox"
                                placeholder="Enter Phone Number"
                              />
                              <p>Automatically populate address </p>
                            </div>
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
                              Add
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
      </Col>
    </CustomerWrapper>
  );
}

export default Settings;
