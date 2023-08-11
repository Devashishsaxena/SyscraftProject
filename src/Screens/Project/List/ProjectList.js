import React, { useState, useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Slider from "@mui/material/Slider";
import SearchIcon from "@mui/icons-material/Search";
import useFetchPost from "../../../Hooks/useFetchPost";
import ProjectCard from "../components/ProjectCard";
// import useFetch from "../../../Hooks/useFetch";
import Wrapper from "../../../Utlilities/Wrapper";
import LocationOnIcon from "@mui/icons-material/LocationOn";
function ProjectList() {
  const [time, setTime] = useState("4 hrs");
  const wrapperHeight = "14vh";
  const [value, setValue] = React.useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //csutom - fetch hook
  const { fetchByPost, data: projects } = useFetchPost(
    process.env.REACT_APP_URL + "/front/projects"
  );
  useEffect(() => {
    fetchByPost();
  }, []);
  console.log(projects, "dataaa");
  return (
    <>
      <Wrapper wrapperHeight={wrapperHeight} />
      <Container className="">
        <Row>
          <Col sm={3} md={3} xs={3}>
            <Container>
              <Row>
                <Col md={12} sm={12} xs={12}>
                  <div className="my-3 categoryContainer">
                    <p>Category</p>
                    <div className="categorys">
                      <input
                        type="checkbox"
                        className="form-control z-depth-1"
                      />
                      <p>Plumber</p>
                    </div>
                    <div className="categorys">
                      <input
                        type="checkbox"
                        className="form-control z-depth-1"
                      />
                      <p>Plumber</p>
                    </div>
                    <div className="categorys">
                      <input
                        type="checkbox"
                        className="form-control z-depth-1"
                      />
                      <p>Plumber</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12} sm={12} xs={12}>
                  <div className="my-3 filterContainer">
                    <p>Filters</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12} sm={12} xs={12}>
                  <div className="my-3 locationsContainer">
                    <p>Location</p>
                    <div className="search">
                      <input
                        type="text"
                        className="form-control z-depth-1"
                        placeholder="Location"
                      />
                      <LocationOnIcon />
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12} sm={12} xs={12}>
                  <div className="my-3 skills-buttons-div">
                    <p>Duration</p>
                    <div>
                      <input type="text" placeholder="Duration" />
                      <AddBoxIcon />
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12} sm={12} xs={12}>
                  <div className="my-3 rangeContainer">
                    <p>Price Range</p>
                    <Slider
                      getAriaLabel={() => "Temperature range"}
                      value={value}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      classes={".sliderContainer"}
                      style={{
                        color: "#6A2FF9",
                        height: "2px",
                        marginLeft: "10px",
                        width: "215px",
                      }}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12} sm={12} xs={12} className="tagsContainer">
                  <p>Tags</p>
                  <div className="my-3 skills-buttons-div">
                    <button>Plumbing</button>
                    <button>Electrician</button>
                    <button>Carpenter</button>
                    <button>Carpenter</button>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col md={9} sm={9} xs={9}>
            <Container>
              <Row>
                <Col md={12} sm={12} xs={12}>
                  <div className="search-panel-service searchResultContainer">
                    <p>Search Results</p>
                    <div className="searchCont">
                      <div className="serchIconTextCantainer">
                        <SearchIcon style={{ color: "#707070" }} />
                        <input type="text" placeholder="Search" />
                      </div>
                      <div className="sortContainer">
                        <p id="sortBy">
                          Sort by:<p id="relv">Rlevance</p>
                        </p>
                        <Dropdown className="relevancedropedown">
                          <Dropdown.Toggle id="dropdown-basic"></Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Testing
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                {projects?.data?.map((project) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    time={time}
                    budget={project.budget}
                    datePosted={project.created_at}
                    id={project._id}
                    is_immidieat={project.is_immediate}
                    street_name={project.street_name}
                    created_at={project.created_at}
                  />
                ))}
                {projects?.data?.map((project) =>
                  console.log(project, "okkkkkkkk")
                )}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProjectList;
