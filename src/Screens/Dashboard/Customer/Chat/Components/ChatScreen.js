import React from "react";
import {
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBContainer,
  MDBNavbar,
} from "mdb-react-ui-kit";
import { Container, Row, Col } from "react-bootstrap";
import ChatBody from 'src/Screens/Dashboard/Customer/Chat/Components/ChatBody';
import ProposalView from 'src/Screens/Dashboard/Customer/Chat/Components/ProposalView';
import { Accordion } from "react-bootstrap";
import ProposalToDo from "./ProposalToDO";
import AboutVendor from "./AboutVendor";
import ActiveUsers from 'src/Screens/Dashboard/Customer/Chat/Components/ActiveUsers';
import { BsFillBookmarkFill } from "react-icons/bs";
// import useFetchPost from "../../../Hooks/useFetchPost";
import { useSelector } from "react-redux";

const ChatScreen = () => {
  return (
    <>
    <Col xs={12} md={12}>
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <div className="customer">
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
                            <a href="#">Home</a>
                          </MDBBreadcrumbItem>
                          <MDBBreadcrumbItem>
                            <a href="#">Library</a>
                          </MDBBreadcrumbItem>
                          <MDBBreadcrumbItem active>
                            <a href="#">Data</a>
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
            <Container className="customer-chat-container">
              <Row>
                <Col md={8} xs={8}>
                    <div className="chatmainbody">
                      <ChatBody />
                    </div>
                </Col>
                <Col md={4} xs={4}>
                 <div className="chatrightbar">

                    <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h3>About Vendor</h3></Accordion.Header>
                        <Accordion.Body>
                          <AboutVendor />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header><h3>Proposal</h3></Accordion.Header>
                        <Accordion.Body>
                          <ProposalView />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header><h3>To Do</h3></Accordion.Header>
                        <Accordion.Body>
                          <ProposalToDo />
                        </Accordion.Body>
                      </Accordion.Item>
                      
                  </Accordion>

                  </div>
                </Col>
              </Row>     
            </Container>
          </Col>
        </Row>
      </Container>
    </Col>
  </>
  );
};

export default ChatScreen;
