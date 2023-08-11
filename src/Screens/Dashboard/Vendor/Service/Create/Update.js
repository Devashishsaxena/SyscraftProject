import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState,useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useGetPosts from "src/Hooks/useGetPosts";
import useSavePosts from "src/Hooks/useSavePosts";
import SweetAlert from "react-bootstrap-sweetalert";
import ServiceFrom from "./Form";
import {
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBContainer,
  MDBNavbar,
} from "mdb-react-ui-kit";

import CustomWrapper  from  "../../Wrapper"


function Update(){
    
const {service_id} =useParams();

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
const {sendData:updateService}= useSavePosts("vendor_service_update");
const {data:service_detail}= useGetPosts({url: "vendor_service_detail", data:{service_id: service_id}});

const  submitService=async (data) => {
    const result=await updateService({...data,service_id:service_id})
      result?.status==true && setFormStatus({msg:'updated',status:true,id:result.data._id})
      setFormData(data);
  }

  useEffect(() =>{
    if(service_detail?.data){
        console.log(service_detail,"service_etail");
      setFormData(service_detail.data)
    }

  },[service_detail])  
      
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
export default Update;
