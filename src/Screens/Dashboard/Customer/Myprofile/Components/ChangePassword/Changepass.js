import React from 'react';
import './Changepass.css';
import CustomerWrapper from "src/Screens/Dashboard/Customer/CustomerWrapper";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { CiLocationOn } from 'react-icons/ci';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiFillEye } from 'react-icons/ai';


function Changepass() {
    return (
        <React.Fragment>
            <CustomerWrapper>
                <Col xs={12} md={12}>
                    <Container fluid>
                        <Row>
                            <Col xs={12} md={12}>
                                <div className="Changepass-Main">
                                    <Col>
                                        <Row>
                                            <div className="Changepass-Main-Header">
                                                <div className="Changepass-Main-div">
                                                    <div className="Changepass-card-H">
                                                        <h5> <FolderOpenIcon size={23} className="mx-2 mb-1" /> <Link to="/customer/changepersonal" className="Changepass-card-A-B"  >Personal Information </Link></h5>
                                                    </div>
                                                    <div className="Changepass-card-H mx-1">
                                                        <h5><CiLocationOn size={23} className="mx-2 mb-1" /><Link to="/customer_myprofile" className="Changepass-card-A-B">Address/Location</Link></h5>
                                                    </div>
                                                    <div className="Changepass-card-A mx-1">
                                                        <h5><RiLockPasswordLine size={23} className="mx-2 mb-1" /><Link to="/customer/changepassword" className="Changepass-card-A-A">Change Password</Link></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <div className="Changepass-Main-body">
                                            <Col>
                                                <Row>
                                                    <div className="Changepass-card-Header">
                                                        <h5><RiLockPasswordLine size={23} className="Changepass-Color mx-2 mb-1" />Change Password</h5>
                                                        <hr
                                                            style={{
                                                                background: 'gray',
                                                                color: 'gray',
                                                                borderColor: 'gray',
                                                                height: '1px',
                                                            }}
                                                        />
                                                        <Col md={12}>
                                                            <Row className='mx-2 mt-4'>
                                                                <div className="form-outline">
                                                                    <label className="form-label">Current Password</label>
                                                                    <input type="text" className="form-control" placeholder='Enter Current Password' />
                                                                </div>
                                                               
                                                            </Row>
                                                        </Col>
                                                        <Col md={12}>
                                                            <Row className='mx-2 mt-4'>
                                                                <div className="form-outline">
                                                                <AiFillEye size={25} className='icon-c'/> 
                                                                    <label className="form-label">New Password</label>
                                                                    <input type="text" className="form-control" placeholder='Enter New Password' />
                                                                </div>
                                                            </Row>
                                                        </Col>
                                                        <Col md={12}>
                                                            <Row className='mx-2 mt-4'>
                                                                <div className="form-outline">
                                                                    <AiFillEye size={25} className='icon-c' />
                                                                    <label className="form-label">Confirm Password</label>
                                                                    <input type="text" className="form-control" placeholder='Re-enter New Password' />
                                                                </div>
                                                            </Row>
                                                        </Col>        
                                                    </div>
                                                </Row>
                                            </Col>
                                        </div>
                                    </Col>

                                    <Row>
                                        <Col>
                                            <div>
                                                <Button className='button-c'>Update Password</Button>
                                            </div>
                                        </Col>

                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </CustomerWrapper>
        </React.Fragment>
    );
}

export default Changepass;