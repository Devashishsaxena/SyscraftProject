import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomerWrapper from "src/Screens/Dashboard/Customer/CustomerWrapper";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";
import useGetPosts from "src/Hooks/useGetPosts";
import useDeletePost from "src/Hooks/useDeletePost";
import {
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBContainer,
  MDBNavbar,
} from "mdb-react-ui-kit";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from "mdb-react-ui-kit";

function Settings() {
  const [addCardModal, setAddCardModal] = useState(false);
  const [addAddresModal, setAddAddresModal] = useState(false);
  const [iscontactRequest, setContactRequest] = useState(false);
  const { data:addresses,getdata,isLoading }=useGetPosts({url: "addresses"})
  const { apply, data: deleted_status } = useDeletePost("delete_address");

  const [deleteModel, setDeleteModel] = useState({
    status: false,
    address_id: 0,
  });
  const [deleteConfirmation, setDeleteConfirmation] = useState({
    status: false,
  });

  const delete_address = async () => {
    console.log(deleteModel,"addtest");
    await apply({ address_id: deleteModel.address_id });
    await getdata();
    setDeleteModel({ status: false, address_id: 0 });
    setDeleteConfirmation({ status: true });
  };

  return (
    <CustomerWrapper>
       <SweetAlert
        success
        title="Deleted"
        show={deleteConfirmation.status}
        onConfirm={() => {
          setDeleteConfirmation({ status: false });
        }}
      >
        Successfully
      </SweetAlert>
      <SweetAlert
        warning
        showCancel
        confirmBtnText="Yes, delete it!"
        title="Are you Sure"
        show={deleteModel.status}
        onConfirm={() => {
          delete_address();
        }}
        onCancel={() => {
          setDeleteModel({ status: false, address_id: 0 });
        }}
      ></SweetAlert>
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
                        Setting <ArrowForwardIosIcon /> Address/Location
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
                        <LocationOnIcon />
                        <p>Location</p>
                      </div>
                      <Link to="/customer_editaddress/:2222">
                        <button>Add Address</button>
                      </Link>
                    </div>
                  </Col>
                </Row>
                {addresses?.data && addresses.data.length ? (
                  addresses.data.map((address) => (
                <Row>
                  <Col>
                    <div className="addresContainer">
                      <div className="rightSideContainer">
                        <div className="homeIcon">
                          <HomeIcon />
                        </div>
                        <div>
                          <h3>{address.nick_name}</h3>
                          <p>{address.apparment} {address.address}, {address.city}, {address.state} - {address.zipcode}</p>
                        </div>
                      </div>

                      <div className="buttonContainer">
                        {address.default && (<button>Main Address</button>)}
                        <Link to={`/customer_editaddress/${address._id}`}><EditNoteIcon /></Link>
                        <DeleteForeverIcon onClick={(e) =>{
                          setDeleteModel({
                            status: true,
                            address_id: address._id,
                          })
                        }
} />
                      </div>
                    </div>
                  </Col>
                </Row>
                  ))) : (
                    <p>{isLoading ? "Loading..." : "data not found"}</p>
                  )}
                <Row>
                  <Col>
                    <div className="addresContainer">
                      <div className="rightSideContainer">
                        <div className="homeIcon">
                          <HomeIcon />
                        </div>
                        <div>
                          <h3>Sweet Home</h3>
                          <p>2773 Morningside Street, San Diego, CA - 92139</p>
                        </div>
                      </div>

                      <div className="buttonContainer">
                        {/* <button>Main Address</button> */}
                        <EditNoteIcon />
                        <DeleteForeverIcon />
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col></Col>
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
                              //   onClick={(e) => modalOnSubmit(e)}
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
