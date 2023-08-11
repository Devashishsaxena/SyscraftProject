import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container, Navbar, Nav } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function ProjectListing() {
  return (
    <>
      <Container style={{ marginTop: "3em" }}>
        <Row>
          <Col md={1}>1</Col>
          <Col md={3}>
            <div>
              <div>
                <p>Location</p>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control type="text" placeholder="Location" rows={3} />
                  </Form.Group>
                </Form>
              </div>
            </div>
          </Col>
          <Col md={7}>1</Col>
          <Col md={1}>1</Col>
        </Row>
      </Container>
    </>
  );
}

export default ProjectListing;
