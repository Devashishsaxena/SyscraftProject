import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useState,useRef } from "react";
import useGetPosts from "src/Hooks/useGetPosts";

import LocationOnIcon from "@mui/icons-material/LocationOn";

function ProfileForm({defaultvalues,submitProfile,validations}){
  const imageRef = useRef();
  const [formdata, setFormData] = useState({});
  const [errors, seterrors] = useState({});

  useEffect(()=>{
    setFormData(defaultvalues)
  },[defaultvalues])

  const handleChange= (e) =>{
    setFormData({...formdata,[e.target.name]:e.target.value})
  }
  const handleSubmit = (e) =>{
    const temperrors={};
    console.log("d");
    Object.keys(validations).forEach(function(field) {
      validations[field].map((value) => {
          switch(value){
            case "required":
              console.log(formdata[field],field);
              if(!formdata[field] || formdata[field]==''){
                temperrors[field]=field+" is required";
              }
              break;
            default:
              break;
          }
        })
      })
      if(Object.keys(temperrors).length!=0){
        seterrors(temperrors);
        return;
      } else{
        seterrors({});
        console.log("no error")
      }
      submitProfile(formdata)
  }


return ( <>
      <Row>
        <Col md={12} xs={12}>
          <Container className="project-listing-container">
            <Row>
              <Col md={12} xs={12}>
                <div className="card-lisitng">
                  <div className="project-listing-title">
                    <LocationOnIcon />
                    <p>My Location</p>
                  </div>
                </div>
              </Col>
            </Row>
            <form>
            <Row>
              <Col md={12} sm={12}>
                <Container fluid>
                  <Row>
                    <Col md={3}>
                        <img style={{width:"200px",height:"200px"}} src={"http://170.187.251.211:3010/uploads/"+formdata?.profile_image?.[0]} />
                    </Col>
                    <Col md={9}>
                        <Row>
                            <Col md={6}>
                                <div className="city-dropdown  streetfeild">
                                    <label>First Name.</label>
                                    <input type="text" className="form-control" value={formdata?.first_name} name="first_name"  onChange={(e) => handleChange(e)} />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="city-dropdown  streetfeild">
                                    <label>Last Name.</label>
                                    <input type="text" className="form-control" value={formdata?.last_name} name="last_name"  onChange={(e) => handleChange(e)} />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="city-dropdown  streetfeild">
                                    <label>Email Name.</label>
                                    <input type="text" className="form-control" value={formdata?.email} name="email"  readOnly />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="city-dropdown  streetfeild">
                                    <label>Contact Number.</label>
                                    <input type="text" className="form-control" value={formdata?.contact_no} name="contact_no"  onChange={(e) => handleChange(e)} />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                                <div className="city-dropdown  streetfeild" style={{marginTop:"50px"}}>
                                    <label>Description</label>
                                    <textarea type="text" className="form-control"  name="description"  onChange={(e) => handleChange(e)} >{formdata?.description}</textarea>
                                </div>
                            </Col>
                    </Row>
                </Container>
              </Col>
            </Row>
            </form>
          </Container>
        </Col>
      </Row>
      <button className="saveChanges" onClick={(e) => {  e.preventDefault(); handleSubmit(e) }}>Save Changes</button>
      </>
    )
}
export default ProfileForm;
