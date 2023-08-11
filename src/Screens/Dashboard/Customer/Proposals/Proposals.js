import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "src/Screens/Dashboard/Customer/Components/Sidebar/Sidebar";
import ProposalListing from "src/Screens/Dashboard/Customer/Proposals/Components/ProposalListing";
import Wrapper from "src/Utlilities/Wrapper";

const wrapperHeight = "11vh";
function Proposals() {
  return (
    <>
      <Wrapper wrapperHeight={wrapperHeight} />
      <Container fluid>
        <Row>
          <Col xs={2} md={2}>
            <Sidebar />
          </Col>
          <Col xs={10} md={10}>
            <ProposalListing />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Proposals;
