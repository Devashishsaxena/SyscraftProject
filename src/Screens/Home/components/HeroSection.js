import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";

import useFetchPost from "../../../Hooks/useFetchPost";
function HeroSection() {
  const [params, setParams] = useState("");
  const handleChange = (e) => {
    setParams(e.target.value);
  };
  var search = { s: params };
  var body = JSON.stringify(search);
  // console.log(body);
  // const {
  //   data: search,
  //   error: searchError,
  //   loading,
  // } = useSearch("http://170.187.251.211:3010/front/category_search", params);
  // console.log(search, searchError);
  // var raw = '{"s": "plum"}';
  // var requestOptions = {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: raw,
  //   redirect: "follow",
  // };
  // fetch("http://170.187.251.211:3010/front/category_search", requestOptions)
  //   .then((response) => response.json())
  //   .then((result) => console.log(result))
  //   .catch((error) => console.log("error", error));

  const {
    response,
    error,
    isLoading,
    fetchByPost,
    data: services,
  } = useFetchPost(process.env.REACT_APP_URL + "/front/services", body);
  useEffect(() => {
    fetchByPost();
  }, [params, body]);

  // console.log(response);
  return (
    <>
      {/* content row */}
      <Container
        fluid
        className="hero-section-container"
        style={{ borderBottom: "0.5px solid lightgrey" }}
      >
        <Row>
          <Col md={10} sm={12} xs={12}>
            <div className="content-div-hero mx-4">
              <h1 className="black-font-h1">
                Hire expert or be hired for any job, any time
              </h1>
              <h1 className="gray-font-h1">
                Thousand of small businesss use <span>Geegr</span> to turn their
                ideas into reality
              </h1>
            </div>
          </Col>
        </Row>

        {/* search bar row */}
        <Row className="search-bar-row mx-3">
          {/* <Col md={4} className="custom-search-bar-p-right-0">
            <div class="search">
              <i class="fa fa-location"></i>
              <input
                type="text"
                className="form-control z-depth-1"
                placeholder="Location"
              />
            </div>
          </Col> */}
          <Col md={8} className="custom-search-bar-p-left-0">
            <div class="search">
              <i class="fa fa-search"></i>
              <input
                type="text"
                className="form-control z-depth-1"
                placeholder="How can we help?"
                onChange={(e) => handleChange(e)}
              />
              <button className="btn btn-primary custom-btn-geegr">
                Search
              </button>
            </div>
          </Col>
        </Row>
        {/* additional information row */}
        <Row className="mx-3">
          <Col md={2} xs={3} className="border-right">
            <div className="extra-information-hero">
              <p>1,586</p>
              <p>Jobs Posted</p>
            </div>
          </Col>
          <Col md={2} xs={3} className="border-right">
            <div className="extra-information-hero2">
              <p>3,456</p>
              <p>Tasks Posted</p>
            </div>
          </Col>
          <Col md={2} xs={3}>
            <div className="extra-information-hero2">
              <p>1,286</p>
              <p>Vendors</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HeroSection;
