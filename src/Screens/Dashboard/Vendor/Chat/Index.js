import React, { useEffect, useState } from "react";
import { Container, Row,Col } from "react-bootstrap";
import ActiveUsers from 'src/Screens/Dashboard/Vendor/Chat/ActiveUsers/Index';
import ChatScreen from "src/Screens/Dashboard/Vendor/Chat/ChatScreen/Index";
import Wrapper from "src/Utlilities/Wrapper";
import { useParams } from "react-router-dom";
import useGetPosts from "src/Hooks/useGetPosts";
import useAddVendorSocket from "src/Hooks/UseAddVendorSocket";
import "src/Screens/Dashboard/Vendor/Chat/style.scss";

const wrapperHeight = "11vh";
let socketon=false;
function Index() {

  const {data: chatList}=useGetPosts({url: "vendor_proposal_list",data:{}})
  let { id } = useParams();
  useAddVendorSocket(id)

  
  return (
    <>
    
    <Wrapper wrapperHeight={wrapperHeight} />
    <Container fluid>
      <Row className="vendorscreens">
        <Col xs={3} md={3}>
          <ActiveUsers proposals={chatList} />
        </Col>
        <Col xs={9} md={9}>
          <ChatScreen />
        </Col>
      </Row>
    </Container>
    
  </>
  );
}

export default Index;
