import React from "react";
import './AddAddressAddress.css'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CustomerWrapper from "src/Screens/Dashboard/Customer/CustomerWrapper";
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { RiLockPasswordLine } from 'react-icons/ri';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { AiOutlineLeft } from 'react-icons/ai';

import { CiLocationOn } from 'react-icons/ci';
function AddAddressAddress() {
    return (
        <CustomerWrapper>
            <Col xs={12} md={12}>
                <Container fluid>
                    <Row>
                        <Col xs={12} md={12}>
                            <div className="Address-Main">
                                <Col>
                                    <Row>
                                        <div className="Address-Main-Header">
                                            <div className="Address-Main-div">
                                                <div className="Address-card-H">
                                                    <h5><FolderOpenIcon size={23} className="mx-2 mb-1" /> <Link to="/customer/changepersonal" className="card-A-B">Personal Information </Link></h5>
                                                </div>
                                                <div className="Address-card-A mx-1">
                                                    <h5><CiLocationOn size={23} className="mx-2 mb-1" /><Link to="/customer_myprofile" className="card-A-A">Address/Location</Link></h5>
                                                </div>
                                                <div className="Address-card-H mx-1">
                                                    <h5><RiLockPasswordLine size={23} className="mx-2 mb-1" /><Link to="/customer/changepassword" className="card-A-B">Change Password</Link></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                        <div className="Back-Tag">
                                            <h5><AiOutlineLeft size={23} className="Address-Color-Tag mx-3 mb-1" /><Link to="/customer_myprofile" style={{ textDecoration: "none", color:"rgb(27, 18, 18)"}}>Back to Address/Location</Link></h5>
                                    </div>
                                    </Row>
                                </Col>
                                <Col>
                                    <div className="Address-Main-body">
                                        <Col>
                                            <Row>
                                                <div className="Address-card-Header">
                                                    <h5><IoBriefcaseOutline size={23} className="Address-Color mx-3 mb-1" />Add New Address</h5>
                                                </div>
                                                <hr
                                                    style={{
                                                        background: 'gray',
                                                        color: 'gray',
                                                        borderColor: 'gray',
                                                        height: '1px',
                                                        position: "relative",
                                                        top: "50px",
                                                        left: "10px",
                                                        width: "98%",
                                                    }}
                                                />
                                                <Col md={12}>
                                                    <Row className='mx-2 mt-5'>
                                                        <div className="form-outline">
                                                            <label className="form-label">Nick Name</label>
                                                            <input type="text" className="form-control" placeholder='My Home' />
                                                        </div>

                                                    </Row>
                                                </Col>
                                                <Col md={12}>
                                                    <Row>
                                                        <Col md={6}>
                                                            <div className="mt-4">
                                                                <label className="form-label mx-4" >Country/Region</label>
                                                                <select class="form-select mx-3" aria-label="Default select example">
                                                                    <option selected>United States</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                        </Col>
                                                        <Col md={6}>
                                                            <div className="form-outline mt-4 mx-5">
                                                                <label className="form-label" >Street Address</label>
                                                                <textarea className="form-control"  rows="1" placeholder="2773 Morningside Street San Diego,CA - 92139" style={{resize:"none"}}></textarea>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col md={12}>
                                                    <Row>
                                                        <Col md={6}>
                                                            <div className="form-outline mt-4">
                                                                <label className="form-label mx-4" >Aparrtment No.</label>
                                                                <input type="number" className="form-control mx-3" placeholder='000000' />
                                                            </div>
                                                        </Col>
                                                        <Col md={6}>
                                                            <div className="mt-4 mx-5">
                                                                <label className="form-label" >City</label>
                                                                <select class="form-select" aria-label="Default select example">
                                                                    <option selected>California</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col md={12}>
                                                    <Row>
                                                        <Col md={6}>
                                                            <div className="mt-4">
                                                                <label className="form-label mx-4" >State</label>
                                                                <select class="form-select mx-3" aria-label="Default select example">
                                                                    <option selected>CA</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                        </Col>
                                                        <Col md={6}>
                                                            <div className="form-outline mt-4 mx-5">
                                                                <label className="form-label" >Zip Code</label>
                                                                <input type="number" className="form-control" placeholder='92139' />
                                                            </div>
                                                        </Col>
                                                        <Col md={6}>
                                                            <div className="mt-2">
                                                                
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </div>
                                </Col>
                                <Row>
                                    <Col>
                                        <div>
                                            <Button className='button-d'>Save New Address</Button>
                                        </div>
                                    </Col>

                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </CustomerWrapper>
    );
}

export default AddAddressAddress;
