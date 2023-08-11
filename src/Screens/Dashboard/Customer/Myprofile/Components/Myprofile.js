import React from "react";
import './Myprofile.css'
import {Link} from 'react-router-dom'
import { Container, Row, Col,Card,Button } from "react-bootstrap";
import CustomerWrapper from "src/Screens/Dashboard/Customer/CustomerWrapper";
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import {BiSolidEdit} from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineHome } from 'react-icons/ai';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { CiLocationOn } from 'react-icons/ci';
function Myprofile() {
    return (
        <CustomerWrapper>
            <Col xs={12} md={12}>
                <Container fluid>
                    <Row>
                        <Col xs={12} md={12}>
                            <div className="Main">
                                <Col>
                                    <Row>
                                        <div className="Main-Header">
                                            <div className="Main-div">
                                                <div className="card-H">
                                                    <h5> <FolderOpenIcon size={23} className="mx-2 mb-1" /> <Link to="/customer/changepersonal" className="card-A-B">Personal Information </Link></h5>
                                                </div>
                                                <div className="card-A mx-1">
                                                    <h5><CiLocationOn size={23} className="mx-2 mb-1" /><Link to="/customer_myprofile" className="card-A-A">Address/Location</Link></h5>
                                                </div>
                                                <div className="card-H mx-1">
                                                    <h5><RiLockPasswordLine size={23} className="mx-2 mb-1" /><Link to="/customer/changepassword" className="card-A-B">Change Password</Link></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </Col>
                                <Col>
                                    <div className="Main-body">
                                        <Col>
                                            <Row>
                                        <div className="card-Header">
                                                    <h5><CiLocationOn size={23} className="Color mx-2 mb-1"  />Address /Location</h5>
                                                    <Button className="Button-A"><Link to="/customer/add_address_address" style={{color: "#ece5fe",fontWeight: "bold",textDecoration: "none",}}>Add Address</Link></Button>
                                                    <hr
                                                        style={{
                                                            background: 'gray',
                                                            color: 'gray',
                                                            borderColor: 'gray',
                                                            height: '1px',
                                                        }}
                                                    />
                                                    <Card className="card-Body mt-4">
                                                        <h6 className="Headline"><AiOutlineHome size={23} className="Color mx-3 mb-1" /><span className="span-A">Sweet Home</span><span className="d-block mx-5 span-1">2773 Morningside Street,San Diego CA - 92139</span></h6>
                                                        <div className="Icons-A" id="Icons-B"><span className="Main-Address mx-2">Main Address</span><BiSolidEdit size={20} className="mx-3" /><RiDeleteBin6Line size={20} /></div>
                                                    </Card>
                                                    <Card className="card-Body mt-4">
                                                        <h6 className="Headline"><HiOutlineBuildingOffice2 size={23} className="Color mx-3 mb-1" /><span className="span-A">Office</span><span className="d-block mx-5 span-1">2310 Morningside Street,San Diego CA - 92139</span></h6>
                                                        <div className="Icons-A"><BiSolidEdit className="mx-3" size={20} /><RiDeleteBin6Line size={20} /></div>
                                                    </Card>
                                                    <Card className="card-Body mt-4">
                                                        <h6 className="Headline"><AiOutlineHome size={23} className="Color mx-3 mb-1" /><span className="span-A">My Home</span><span className="d-block mx-5 span-1">2773 Morningside Street,San Diego CA - 92139</span></h6>
                                                        <div className="Icons-A"><BiSolidEdit className="mx-3" size={20} /><RiDeleteBin6Line size={20} /></div>
                                                    </Card>
                                                </div>
                                               
                                            </Row>
                                        </Col>
                                    </div>
                                    
                                </Col>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </CustomerWrapper>
    );
}

export default Myprofile;
