import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState,useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useGetPosts from "src/Hooks/useGetPosts";
import useSavePosts from "src/Hooks/useSavePosts";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "react-bootstrap";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


import SweetAlert from "react-bootstrap-sweetalert";
import ServiceFrom from "./Form";
import {
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBContainer,
  MDBNavbar,
} from "mdb-react-ui-kit";

import CustomWrapper  from  "../../Wrapper"


function Add(){
let defaultvalues={
    title: "",
    category:"",
    images:[],
    is_immediate:false,
    is_shareable: false,
    max_radius: 200,
    lat: 10,
    long: 15
}

let validations={
    title: ["required"],
    category: ["required"],
    sub_category: ["required"],
    description: ["required"],
}

const navigate = useNavigate();
const getState = useSelector((state) => state);
const [formStatus, setFormStatus] = useState({msg:"",status:false,id:0});
const [formdata, setFormData] = useState(defaultvalues);


// save project custom hook
const {sendData:saveService}= useSavePosts("vendor_service_add");

const  submitService=async (data) => {
    const result=await saveService(data)
    result?.status==true && setFormStatus({msg:'Added',status:true,id:result.data._id})
    setFormData(data);
}
      
return (
    <CustomWrapper>
        <Col xs={12} md={12}>
            <Container>
            <Row>
                <Col xs={12} md={12}>
                <div className="customer mngPro">
                    <div className="customerContainer">
                    <div className="breadcrumb-n-title">
                        <div className="dashboard-headline">
                        <h3>Services</h3>
                        </div>
                        <div className="breadcrum-ui-kit">
                        <MDBNavbar expand="lg" light bgColor="dark">
                            <MDBContainer fluid>
                            <MDBBreadcrumb>
                                <MDBBreadcrumbItem>
                                <Link href="/">Home</Link>
                                </MDBBreadcrumbItem>
                                <MDBBreadcrumbItem>
                                <Link href="#">Dashboard</Link>
                                </MDBBreadcrumbItem>
                                <MDBBreadcrumbItem active>
                                <Link href="#">Services Profiles</Link>
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
                    <div className="project-lisitng">
                      {/* <BsFillBookmarkFill /> */}
                      <div className="project-listing-title">
                        <BusinessCenterIcon />
                        Add New Services
                      </div>
                      <div className="project-listing-action-buttons">
                        <Button>
                          <Link to="/vendor/service/add">Add Service</Link>{" "}
                        </Button>


                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                    <Col md={12} xs={12}>
                    <Container className="project-listing-container">
                        <SweetAlert
                        success
                        title={formStatus.msg}
                        show={formStatus.status}
                        onConfirm={()=>{ setFormStatus({msg:"",status:false}); navigate("/vendor/services") }}
                        >
                        Successfully
                        </SweetAlert>
                        <ServiceFrom defaultvalues={formdata}  validations={validations} submitService={submitService}  />
                    </Container>
                    </Col>
                </Row>
            </Container>
        </Col>
    </CustomWrapper>
    )
}
export default Add;
