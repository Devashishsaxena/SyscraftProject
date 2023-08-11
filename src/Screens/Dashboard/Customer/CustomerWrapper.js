import Sidebar from "src/Screens/Dashboard/Customer/Components/Sidebar/Sidebar";
import "src/Screens/Dashboard/Customer/Customer.scss";
import { Col,Row } from "react-bootstrap";
import Wrapper from "src/Utlilities/Wrapper";

const wrapperHeight = "11vh";
const CustomerWrapper = (props) => {
  return (
    <>
      <Wrapper wrapperHeight={wrapperHeight} />
      <Row>
      <Col xs={2} md={2}>
        <Sidebar />
      </Col>
      <Col xs={10} md={10}>
        
        {props.children}
      </Col>
      </Row>

    </>
  );
};

export default CustomerWrapper;
