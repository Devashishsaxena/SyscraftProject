import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomerWrapper from "src/Screens/Dashboard/Customer/CustomerWrapper";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useSavePosts from "src/Hooks/useSavePosts";
import ProfileForm from "./ProfileForm";
import SweetAlert from "react-bootstrap-sweetalert";
import useGetPosts from "src/Hooks/useGetPosts";
import {
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBContainer,
  MDBNavbar,
} from "mdb-react-ui-kit";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LocationOnIcon from "@mui/icons-material/LocationOn";
function ProfileUpdate() {
  const [formStatus, setFormStatus] = useState({msg:"",status:false,id:0});
  const [formdata, setFormData] = useState({});
   const {sendData:saveProfile}= useSavePosts("profile_update");
const {data:profile_detail}= useGetPosts({url: "profile_detail"});

  

  let validations={
  }
  const  submitProfile=async (data) => {
    const result=await saveProfile(data)
    result?.status==true && setFormStatus({msg:'Updated',status:true,id:result.data._id})
    setFormData(data);
  }
  useEffect(() =>{
    if(profile_detail?.data){
      setFormData(profile_detail.data)
    }

  },[profile_detail])
  return (
    <CustomerWrapper>
      { console.log(profile_detail,'pdvv')
 }
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
                        Setting <ArrowForwardIosIcon /> Profile/Location
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
          <ProfileForm defaultvalues={formdata}  validations={validations} submitProfile={submitProfile} />
        </Container>
      </Col>
    </CustomerWrapper>
  );
}

export default ProfileUpdate;
