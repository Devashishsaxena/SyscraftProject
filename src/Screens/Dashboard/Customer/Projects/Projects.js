import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomerWrapper from "src/Screens/Dashboard/Customer/CustomerWrapper";
import useDeletePost from "src/Hooks/useDeletePost";
import SweetAlert from "react-bootstrap-sweetalert";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBContainer,
  MDBNavbar,
} from "mdb-react-ui-kit";
import ProjectCard from "./Components/ProjectCard";
import useGetPosts from "src/Hooks/useGetPosts";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "react-bootstrap";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
function Projects() {
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
          deletepro();
        }}
        onCancel={() => {
          setDeleteModel({ status: false, project_id: 0 });
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
                      <h3>Projects</h3>
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
                        {jobsOpen ? <p>Open Jobs</p> : <p>In Active jobs</p>}
                      </div>
                      <div className="project-listing-action-buttons">
                        <Button>
                          <Link to="/customer_project_add">Post Project</Link>{" "}
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
                                return <em>Select Project</em>;
                              }
                            }}
                            onChange={(e) => {
                              setJobStatus(e.target.value);
                              navigation(
                                "/customer_projects/" + e.target.value
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
                {data?.data && data.data.length ? (
                  data.data.map((d) => (
                    <Row key={d._id}>
                      <ProjectCard
                        data={d}
                        title={d.title}
                        createdAt={d.created_at}
                        count={10}
                        status={d.status}
                        proposalID={d._id}
                        deleteProject={(project_id) =>
                          setDeleteModel({
                            status: true,
                            project_id: project_id,
                          })
                        }
                      />
                    </Row>
                  ))
                ) : (
                  <p>{isLoading ? "Loading..." : "data not found"}</p>
                )}
                {/* <Row>
                  <ProjectCard title="" status={status} count={count} />
                </Row> */}
                {/* <Row>
                  <ProjectCard title="" status="expiring" count={count} />
                </Row>
                <Row>
                  <ProjectCard title="" status="expired" count={count} />
                </Row> */}
              </Container>
            </Col>
          </Row>
        </Container>
      </Col>
    </CustomerWrapper>
  );
}

export default Projects;
