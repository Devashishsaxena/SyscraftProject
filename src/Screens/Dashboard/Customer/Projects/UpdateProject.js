import { Container, Row, Col } from "react-bootstrap";
import CustomerWrapper from "../CustomerWrapper";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useGetPosts from "src/Hooks/useGetPosts";
import useSavePosts from "src/Hooks/useSavePosts";
import { useEffect, useRef } from "react";
import { useState } from "react";
import ProjectForm from "./Components/ProjectFrom";
import SweetAlert from "react-bootstrap-sweetalert";
import {
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBContainer,
  MDBNavbar,
} from "mdb-react-ui-kit";
function UpdateProject() {
  


  const imageRef = useRef();
  const {project_id} =useParams();
  const navigate = useNavigate();
  const getState = useSelector((state) => state);
  const [formStatus, setFormStatus] = useState({msg:"",status:false,id:0});
  const [formdata, setFormData] = useState({});


  
  let validations={
    title: ["required"],
    category: ["required"],
    sub_category: ["required"],
    max_radius: ["required"],
    description: ["required"]
  }

  // update project custom hook
  const {sendData:updateProject}= useSavePosts("update_project");

  // get project detail on edit page
  const {data:project_detail}= useGetPosts({url: "customer_project_detail", data:{project_id: project_id}});

  const  submitProject=async (data) => {
    const result=await updateProject({...data,project_id:data._id})
      result?.status==true && setFormStatus({msg:'updated',status:true,id:result.data._id})
      setFormData(data);
  }
  useEffect(() =>{
    if(project_detail?.data){
      const prodata=project_detail.data;
      prodata.oldImages=prodata.images;
      prodata.images=[];
      prodata.removedImages=[];
      setFormData(prodata)
    }

  },[project_detail])

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
                <ProjectForm defaultvalues={formdata} validations={validations} submitProject={submitProject} />
              </Container>
            </Col>
          </Row>
        </Container>
      </Col>
    </CustomerWrapper>
  );
}

export default UpdateProject;
