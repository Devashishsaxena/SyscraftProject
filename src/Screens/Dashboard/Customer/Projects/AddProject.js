import { Container, Row, Col } from "react-bootstrap";
import ProjectFrom from "./Components/ProjectFrom";
import CustomerWrapper from "../CustomerWrapper";
import { Link } from "react-router-dom";
import { useState,useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useGetPosts from "src/Hooks/useGetPosts";
import useSavePosts from "src/Hooks/useSavePosts";
import SweetAlert from "react-bootstrap-sweetalert";
import {
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBContainer,
  MDBNavbar,
} from "mdb-react-ui-kit";
function AddProject() {
  
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
    max_radius: ["required"],
    lat: ["required"],
    long: ["required"]
  }

  const navigate = useNavigate();
  const getState = useSelector((state) => state);
  const [formStatus, setFormStatus] = useState({msg:"",status:false,id:0});
  const [formdata, setFormData] = useState(defaultvalues);
  
  // get categories

  // save project custom hook
  const {sendData:saveProject}= useSavePosts("add_project");

  const  submitProject=async (data) => {
    const result=await saveProject(data)
    result?.status==true && setFormStatus({msg:'Added',status:true,id:result.data._id})
    setFormData(data);
  }

 
  return (
    <CustomerWrapper>
      <Col xs={12} md={12}>
        <Container>
          <Row>
            <Col xs={12} md={12}>
              <div className="customer mngPro">
                <div className="customerContainer">
                  <div className="breadcrumb-n-title">
                    <div className="dashboard-headline">
                      <h3>Manage Projects</h3>
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
                              <Link href="#">Project</Link>
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
                  onConfirm={()=>{ setFormStatus({msg:"",status:false}); navigate("/customer_projects") }}
                >
                  Successfully
                </SweetAlert>
                <ProjectFrom defaultvalues={formdata}  validations={validations} submitProject={submitProject}  />
              </Container>
            </Col>
          </Row>
        </Container>
      </Col>
    </CustomerWrapper>
  );
}

export default AddProject;
