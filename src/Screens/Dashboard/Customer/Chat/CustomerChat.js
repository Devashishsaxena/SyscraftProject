import React, { useEffect, useState } from "react";
import { Container, Row,Col } from "react-bootstrap";
import ActiveUsers from 'src/Screens/Dashboard/Customer/Chat/Components/ActiveUsers';
import ChatScreen from "src/Screens/Dashboard/Customer/Chat/Components/ChatScreen";
import Wrapper from "src/Utlilities/Wrapper";
import { useParams } from "react-router-dom";
import useGetPosts from "src/Hooks/useGetPosts";
import useAddSocket from "src/Hooks/UseAddSocket";
import "src/Screens/Dashboard/Customer/Chat/style.scss";
const wrapperHeight = "11vh";
let socketon=false;
function CustomerChat() {

  const {data: chatList}=useGetPosts({url: "message_list",data:{}})
  let { id } = useParams();
  const [proposal,setProposal]=useState(id)
  let soc=useAddSocket(id)

  
  
  return (
    <>
    
    <Wrapper wrapperHeight={wrapperHeight} />
    <Container fluid>
      <Row className="customerscreen">
        <Col xs={3} md={3}>
          <ActiveUsers users={chatList} />
        </Col>
        <Col xs={9} md={9}>
          <ChatScreen />
        </Col>
      </Row>
    </Container>
    
  </>
  );
}

export default CustomerChat;
