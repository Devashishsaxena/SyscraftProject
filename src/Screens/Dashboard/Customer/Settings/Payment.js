import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomerWrapper from "src/Screens/Dashboard/Customer/CustomerWrapper";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBContainer,
  MDBNavbar,
} from "mdb-react-ui-kit";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Card from "./Card.png";
import Gift from "./Gift.png";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Paypal from "./Paypal.png";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useGetPosts from "src/Hooks/useGetPosts";

import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from "mdb-react-ui-kit";

import CheckoutForm from "./Components/CheckoutForm";
import {
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe('pk_test_Cix7INa8qYJruzkolgy2Ol20');
function Payment() {

  const [addCardModal, setAddCardModal] = useState(false);
  const [addAddresModal, setAddAddresModal] = useState(false);
  const [iscontactRequest, setContactRequest] = useState(false);
  const {data:userdata}=useGetPosts({url:"get_user_profile"})
  const onSuccessfullyAdded=()=>{
    setAddCardModal(false)
  }

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
                        {userdata?.data?.payment_methods.map((value) =>{
                          return (
                            <div className="debitCardContainer">
                              <img src={Card} />
                              <span className="card_last_digits">{value.card_last_digits}</span>
                              <span className="exp">{value.exp_month+'/'+value.exp_year}</span>
                              <span className="name">Akil Badshah</span>
                            </div>
                          )
                        })}
                        <div className="deletCard">
                          <DeleteForeverIcon />
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
                          {/* <AddCircleIcon onClick={RemoveIt} /> */}
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
                    <Elements stripe={stripePromise} mode="billing">
                        <CheckoutForm onSuccessfullyAdded={() => onSuccessfullyAdded()} />
                    </Elements>
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
                              // onClick={(e) => modalOnSubmit(e)}
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

export default Payment;
