import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomerWrapper from "src/Screens/Dashboard/Customer/CustomerWrapper";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useSavePosts from "src/Hooks/useSavePosts";
import AddressForm from "./AddressForm";
import SweetAlert from "react-bootstrap-sweetalert";
import {
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBContainer,
  MDBNavbar,
} from "mdb-react-ui-kit";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LocationOnIcon from "@mui/icons-material/LocationOn";
function AddAddress() {
  const [formStatus, setFormStatus] = useState({msg:"",status:false,id:0});
  const [formdata, setFormData] = useState({});
  const {sendData:saveAddress}= useSavePosts("add_address");

  let validations={
  }
  const  submitAddress=async (data) => {
    console.log(data,'sf');
    const result=await saveAddress(data)
    result?.status==true && setFormStatus({msg:'Added',status:true,id:result.data._id})
    setFormData(data);
  }
  return (
    <CustomerWrapper>
      <SweetAlert
      success
      title={formStatus.msg}
      show={formStatus.status}
      onConfirm={()=>{ setFormStatus({msg:"",status:false});  }}
    >
      Successfully
    </SweetAlert>
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
          <AddressForm defaultvalues={formdata}  validations={validations} submitAddress={submitAddress} />
        </Container>
      </Col>
    </CustomerWrapper>
  );
}

export default AddAddress;
