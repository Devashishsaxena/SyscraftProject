import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomerWrapper from "src/Screens/Dashboard/Customer/CustomerWrapper";
import useDeletePost from "src/Hooks/useDeletePost";
import SweetAlert from "react-bootstrap-sweetalert";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "react-bootstrap";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import {
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBContainer,
  MDBNavbar,
} from "mdb-react-ui-kit";
import ProjectCard from "./ServiceCard.js";
import useGetPosts from "src/Hooks/useGetPosts";
import ServiceCard from "./ServiceCard.js";

function Index() {
  const [age, setAge] = React.useState("");
  const [jobStatus, setJobStatus] = useState(true);
  const [jobsOpen, setjobsOpen] = useState(true);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const navigation = useNavigate();
  const { type } = useParams();
  console.log(type, "aaaaa");
  const { data:services, isLoading, getdata } = useGetPosts({
    url: "vendor_service_list",
    data: { status: type ? type : "active" },
  });
  const { apply, data: deleted_status } = useDeletePost("delete_service");

  const [deleteModel, setDeleteModel] = useState({
    status: false,
    project_id: 0,
  });
  const [deleteConfirmation, setDeleteConfirmation] = useState({
    status: false,
  });

  const delete_service = async () => {
    await apply({ service_id: deleteModel.service_id });
    await getdata({ status: type });
    setDeleteModel({ status: false, service_id: 0 });
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
          delete_service();
        }}
        onCancel={() => {
          setDeleteModel({ status: false, service_id: 0 });
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
                      <h3>Services</h3>
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
                <div className="project-lisitng">
                    {/* <BsFillBookmarkFill /> */}
                    <div className="project-listing-title">
                    <BusinessCenterIcon />
                    {jobsOpen ? <p>Active Services</p> : <p>Inactive Services</p>}
                    </div>
                    <div className="project-listing-action-buttons">
                    <Button>
                        <Link to="/vendor/service/add">Add Service</Link>{" "}
                    </Button>

                    <FormControl>
                        <Select
                        labelId="demo-simple-select-label"
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        id="demo-simple-select"
                        renderValue={(selected) => {
                            if (selected === "") {
                            console.log("Not selected");
                            }
                            {
                            console.log("selected");
                            return <em>Select...</em>;
                            }
                        }}
                        onChange={(e) => {
                            setJobStatus(e.target.value);
                            navigation(
                            "/vendor/services/" + e.target.value
                            );
                        }}
                        IconComponent={MoreVertIcon}
                        >
                        <MenuItem value="active">Active</MenuItem>
                        <MenuItem value="inactive">In active</MenuItem>
                        </Select>
                    </FormControl>
                    </div>
                </div>
                </Col>
            </Row>

            {
              services?.data && services.data.length ? (
                services.data.map((service) => (            
                    <Row>
                        <ServiceCard service={service} deleteService={(service_id) =>
                          setDeleteModel({
                            status: true,
                            service_id: service_id,
                          }) } />
                    </Row>
                  ))) : (
                    <p>{isLoading ? "Loading..." : "data not found"}</p>
                  )
            }
            </Container>
        </Col>
        </Row>

        </Container>
      </Col>
    </CustomerWrapper>
  );
}

export default Index;
