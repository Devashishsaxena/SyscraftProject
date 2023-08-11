import React, { useEffect, useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BsSearch } from "react-icons/bs";
import ServiceCard from "../components/ServiceCard";
import { useParams } from "react-router-dom";
import Wrapper from "../../../Utlilities/Wrapper";
import useFetchPost from "../../../Hooks/useFetchPost";
import Rating from "../../../Components/rating/Rating";
import AddBoxIcon from "@mui/icons-material/AddBox";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function ServiceList() {
  //states
  const [name, setName] = useState("Tom Cruise");
  const [rate, setRate] = useState(60);
  const [successRate, setSuccessrate] = useState(95);
  const [params, setParams] = useState("");
  const [changeLocation, setChangeLocation] = useState("");
  const [range, setRange] = useState();
  const wrapperHeight = "14vh";
  const { id } = useParams();
  const handleChange = (e) => {
    setParams(e.target.value);
  };
  const handleChangeLocation = (e) => {
    setChangeLocation(e.target.value);
  };
  var search = {
    cat_id: id,
    s: params,
    location: changeLocation,
    service_charge: range,
  };
  var body = JSON.stringify(search);
  const { fetchByPost, data: services } = useFetchPost(
    process.env.REACT_APP_URL + "/front/services",
    body
  );
  useEffect(() => {
    fetchByPost();
  }, [body]);
  return (
    <>
      <Wrapper wrapperHeight={wrapperHeight} />
      <Container className="">
        <Row>
          <Col sm={3} md={3}>
            <Container>
              <Row>
                <Col md={12} sm={12} xs={12}>
                  <div className="my-3 select-category-div">
                    <p
                      style={{
                        fontFamily: "Nunito Sans",
                        fontWeight: "600",
                        fontSize: "20px",
                        lineHeight: "27px",
                        color: "#3D3939",
                      }}
                    >
                      Category
                    </p>
                    <Dropdown>
                      <Dropdown.Toggle
                        id="dropdown-basic"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          border: "none",
                          background: "#FFFFFF",
                          boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.08)",
                          borderRadius: "5px",
                        }}
                      >
                        <span>Category</span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {services?.data.map((categoryList) => {
                          return (
                            <Dropdown.Item href="#/action-1">
                              {categoryList.category.title}
                            </Dropdown.Item>
                          );
                        })}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12} sm={12} xs={12}>
                  <div className="my-3 select-category-div">
                    <p
                      style={{
                        fontFamily: "Nunito Sans",
                        fontWeight: "600",
                        fontSize: "20px",
                        lineHeight: "27px",
                        color: "#3D3939",
                      }}
                    >
                      Filters
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12} sm={12} xs={12}>
                  <div className="my-3">
                    <p
                      style={{
                        fontFamily: "Nunito Sans",
                        fontWeight: "600",
                        fontSize: "20px",
                        lineHeight: "27px",
                        color: "#3D3939",
                      }}
                    >
                      Location
                    </p>
                    <div
                      className="search"
                      style={{
                        display: "flex",
                        justifyContent: "spaceBetween",
                        flexDirection: "revert",
                        alignItems: "center",
                        padding: "0px 10px 0px 10px",
                        height: "48px",
                      }}
                    >
                      <input
                        type="text"
                        className="form-control z-depth-1"
                        placeholder="Location"
                        onChange={(e) => handleChangeLocation(e)}
                        style={{
                          textIndent: "0px",
                          outline: "none",
                          border: "none",
                          minHeight: "100%",
                        }}
                      />
                      <LocationOnIcon />
                    </div>
                  </div>
                </Col>
              </Row>
              <Row></Row>
              <Row>
                <Col md={12} sm={12} xs={12}>
                  <div className="my-3">
                    <p
                      style={{
                        fontFamily: "Nunito Sans",

                        fontWeight: "600",
                        fontSize: "20px",
                        lineHeight: "27px",
                        color: "#3D3939",
                      }}
                    >
                      Reviews
                    </p>
                    <div className="rating-div">
                      <div
                        className="rating-div"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "95%",
                          }}
                        >
                          <input type="checkbox" />
                          <div
                            style={{
                              display: "flex",
                              flex: "auto",
                              marginLeft: "5px",
                            }}
                          >
                            <Rating rating={5} maxRating={5} />
                          </div>
                          <span
                            style={{
                              fontFamily: "Nunito Sans",
                              fontWeight: "600",
                              fontSize: "18px",
                              lineHeight: "27px",
                              color: "#3D3939",
                            }}
                          >
                            5
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <input type="checkbox" />
                          <div
                            style={{
                              display: "flex",
                              flex: "auto",
                              width: "146px",
                              marginLeft: "5px",
                            }}
                          >
                            <Rating rating={4} maxRating={4} />
                          </div>
                          <span
                            style={{
                              fontFamily: "Nunito Sans",
                              fontWeight: "600",
                              fontSize: "18px",
                              lineHeight: "27px",
                              color: "#3D3939",
                            }}
                          >
                            4+
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                          }}
                        >
                          <input type="checkbox" />
                          <div
                            style={{
                              display: "flex",
                              flex: "auto",
                              width: "146px",
                              marginLeft: "5px",
                            }}
                          >
                            <Rating rating={3} maxRating={3} />
                          </div>
                          <span
                            style={{
                              fontFamily: "Nunito Sans",
                              fontWeight: "600",
                              fontSize: "18px",
                              lineHeight: "27px",
                              color: "#3D3939",
                            }}
                          >
                            3+
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                          }}
                        >
                          <input type="checkbox" />
                          <div
                            style={{
                              display: "flex",
                              flex: "auto",
                              width: "146px",
                              marginLeft: "5px",
                            }}
                          >
                            <Rating rating={2} maxRating={2} />
                          </div>
                          <span
                            style={{
                              fontFamily: "Nunito Sans",
                              fontWeight: "600",
                              fontSize: "18px",
                              lineHeight: "27px",
                              color: "#3D3939",
                            }}
                          >
                            2+
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                          }}
                        >
                          <input type="checkbox" />
                          <div
                            style={{
                              display: "flex",
                              flex: "auto",
                              width: "146px",
                              marginLeft: "5px",
                            }}
                          >
                            <Rating rating={1} maxRating={1} />
                          </div>

                          <span
                            style={{
                              fontFamily: "Nunito Sans",
                              fontWeight: "600",
                              fontSize: "18px",
                              lineHeight: "27px",
                              color: "#3D3939",
                            }}
                          >
                            1+
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12} sm={12} xs={12}>
                  <p
                    style={{
                      fontFamily: "Nunito Sans",
                      fontWeight: "600",
                      fontSize: "20px",
                      lineHeight: "27px",
                      color: "#3D3939",
                    }}
                  >
                    Keywords
                  </p>
                  <div className="my-3 skills-buttons-div">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "248px",
                        height: "48px",
                        left: "88px",
                        top: "782px",
                        background: "#FFFFFF",
                        boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.08)",
                        borderRadius: "5px",
                      }}
                    >
                      <input
                        type="text"
                        placeholder="e.g task title"
                        style={{
                          border: "none",
                          outline: "none",
                        }}
                      />
                      <AddBoxIcon
                        style={{
                          color: "#6A2FF9",
                          fontSize: "2.3rem",
                        }}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12} sm={12} xs={12}>
                  <p
                    style={{
                      fontFamily: "Nunito Sans",
                      fontWeight: "600",
                      fontSize: "20px",
                      lineHeight: "27px",
                      color: "#3D3939",
                    }}
                  >
                    Sub Category
                  </p>
                  {services?.data?.map((service) => (
                    <div className="my-3 skills-buttons-div">
                      <div
                        className="sub-category"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          color: "#707070",
                          fontSize: "16px",
                          justifyContent: "space-between",
                        }}
                      >
                        <span
                          style={{ backgroundColor: "#ffff", padding: "5px" }}
                        >
                          {service.sub_category.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </Col>
              </Row>
            </Container>
          </Col>
          <Col md={9} sm={9} xs={9}>
            <Container>
              <Row>
                <Col md={12} sm={12} xs={12}>
                  <div className="search-panel-service">
                    <p
                      style={{
                        fontFamily: "Nunito Sans",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "20px",
                        lineHeight: "27px",
                        color: "#3D3939",
                      }}
                    >
                      Search List
                    </p>
                    <span>{<BsSearch />}</span>
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="Search by relevance"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={(e) => handleChange(e)}
                      />
                    </InputGroup>
                  </div>
                </Col>
              </Row>
              <Row>
                {services?.data?.map((service) => (
                  <ServiceCard
                    key={service._id}
                    name={name}
                    title={service.title}
                    rating={service.rating}
                    vertified={service.vertified}
                    location={service.location}
                    rate={rate}
                    successRate={successRate}
                    id={service._id}
                    subtitle={service.category.title}
                    serviceCharge={service.service_charge}
                    displayImage={service.display_image}
                  />
                ))}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ServiceList;
