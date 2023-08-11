import React from 'react';
import './Personal.css';
import CustomerWrapper from "src/Screens/Dashboard/Customer/CustomerWrapper";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { CiLocationOn } from 'react-icons/ci';
import { HiOutlinePencil } from 'react-icons/hi2';
import { RiLockPasswordLine } from 'react-icons/ri';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import img1 from '../../../../../../assets/images/Men-Model-Img.jpg'
import ClearIcon from '@mui/icons-material/Clear';
function Personal() {
    return (
        <React.Fragment>
            <CustomerWrapper>
                <Col xs={12} md={12}>
                    <Container fluid>
                        <Row>
                            <Col xs={12} md={12}>
                                <div className="Personal-Main">
                                    <Col>
                                        <Row>
                                            <div className="Personal-Main-Header">
                                                <div className="Personal-Main-div">
                                                    <div className="Personal-card-A">
                                                        <h5> <FolderOpenIcon size={23} className="mx-2 mb-1" /> <Link to="/customer/changepersonal" className="Personal-card-A-A"  >Personal Information </Link></h5>
                                                    </div>
                                                    <div className="Personal-card-H mx-1">
                                                        <h5><CiLocationOn size={23} className="mx-2 mb-1" /><Link to="/customer_myprofile" className="Personal-card-A-B">Address/Location</Link></h5>
                                                    </div>
                                                    <div className="Personal-card-H mx-1">
                                                        <h5><RiLockPasswordLine size={23} className="mx-2 mb-1" /><Link to="/customer/changepassword" className="Personal-card-A-B">Change Password</Link></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <div className="Personal-Main-body">
                                            <Col>
                                                <Row>
                                                    <div className="Personal-card-Header">
                                                        <h5><AccountCircleOutlinedIcon size={23} className="Personal-Color mx-2 mb-1" />Personal Details</h5>
                                                        <hr
                                                            style={{
                                                                background: 'gray',
                                                                color: 'gray',
                                                                borderColor: 'gray',
                                                                height: '1px',
                                                            }}
                                                        />
                                                        <Row>
                                                            <Col md={12}>
                                                                <Row>
                                                                    <Col md={3}>
                                                                        <img src={img1} className='img-fluid img-A' />
                                                                        <div className='icon-b'></div>
                                                                        <HiOutlinePencil size={19} style={{ position: "relative", left: "62%", bottom: "37px", color: "#fdfcff"  }}/>
                                                                    </Col>
                                                                    <Col md={8}>
                                                                        <Row>
                                                                            <Col md={6}>
                                                                                <div className="form-outline">
                                                                                    <label className="form-label" >First Name</label>
                                                                                    <input type="text" className="form-control" placeholder='Enter First Name' />
                                                                                </div>
                                                                            </Col>
                                                                            <Col md={6}>
                                                                                <div className="form-outline">
                                                                                    <label className="form-label">Last Name</label>
                                                                                    <input type="text" className="form-control" placeholder='Enter Last Name' />
                                                                                </div>
                                                                            </Col>
                                                                            <Col md={6} className='mt-3'>
                                                                                <div className="form-outline">
                                                                                    <label className="form-label">Email </label>
                                                                                    <input type="email" className="form-control" placeholder='Enter Email ID' />
                                                                                </div>
                                                                            </Col>
                                                                            <Col md={6} className='mt-3'>
                                                                                <div className="form-outline">
                                                                                    <label className="form-label">Contact Number</label>
                                                                                    <input type="number" className="form-control" placeholder='(00) 00000 00000' />
                                                                                </div>
                                                                            </Col>
                                                                        </Row>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Row>
                                            </Col>
                                        </div>
                                    </Col>
                                    <Row>
                                        <Col>
                                            <div className='Personal-Main-body-A'>
                                                <Col>
                                                    <Row>
                                                        <div className="Personal-card-Header-A">
                                                            <h5><ArticleOutlinedIcon size={23} className="Personal-Color mx-2 mb-1" />Description</h5>
                                                            <hr
                                                                style={{
                                                                    background: 'gray',
                                                                    color: 'gray',
                                                                    borderColor: 'gray',
                                                                    height: '1px',
                                                                }}
                                                            />
                                                            <Row>
                                                                <Col md={11} className='mx-4'>
                                                                    <div className="form-outline">
                                                                        <label className="form-label">Introduction Yourself  (option)</label>
                                                                        <div className="form-outline">
                                                                            <textarea className="form-control" id="textAreaExample" rows="4" placeholder='Introduction Yourself' style={{resize:"none"}}></textarea>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Row>
                                                </Col>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className='Personal-Main-body-B'>
                                                <Col>
                                                    <Row>
                                                        <div className="Personal-card-Header-B">
                                                            <h5><ArticleOutlinedIcon size={23} className="Personal-Color mx-2 mb-1" />Upload Driving License</h5>
                                                            <hr
                                                                style={{
                                                                    background: 'gray',
                                                                    color: 'gray',
                                                                    borderColor: 'gray',
                                                                    height: '1px',
                                                                }}
                                                            />
                                                            <Row>
                                                                <Col md={5} className='mx-4'>
                                                                    <div className="form-outline">
                                                                        <label className="form-label">Upload Driving License</label>

                                                                            <ClearIcon className='Icon-A'/>
                                                                        <div className="form-outline mb-3">
                                                                            <input
                                                                                className="form-control input-a"
                                                                                type="text"
                                                                                placeholder="Identity-Card-document.pdf"
                                                                                aria-label="disabled input example"
                                                                                disabled
                                                                            />
                                                                            
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Row>
                                                </Col>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div>
                                        <Button className='button-b'>Save Change</Button>
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

export default Personal;