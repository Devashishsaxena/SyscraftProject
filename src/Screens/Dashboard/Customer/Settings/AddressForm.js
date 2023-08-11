import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useState,useRef } from "react";
import useGetPosts from "src/Hooks/useGetPosts";

import LocationOnIcon from "@mui/icons-material/LocationOn";

function AddressForm({defaultvalues,submitAddress,validations}){
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
      submitAddress(formdata)
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

            <Row>
              <Col>
                <div className="addAddresContainer">
                  <form className="addAddressForm">
                    <div className="nickName">
                      <label>NickName</label>
                      <input type="text" name="nick_name" value={formdata?.nick_name} onChange={(e) => handleChange(e)} placeholder="Enter Nick Name" />
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12} sm={12}>
                <Container>
                  <Row>
                    <Col md={6}>
                      <div className="riteContainer">
                        <div className="country-dropdown countryContainer">
                          <label for="lang">Country/Region</label>
                          <select name="country" id="lang" onChange={(e) => handleChange(e)}>
                            <option value="India">India</option>
                            <option value="Norway">Norway</option>
                            <option value="Iceland">Iceland</option>
                          </select>
                        </div>
                        <div className="city-dropdown  streetfeild">
                          <label>Apartment No.</label>
                          <input type="text" value={formdata?.apartment} name="apartment" placeholder="00000" onChange={(e) => handleChange(e)} />
                        </div>
                        <div>
                          <label for="lang">State</label>
                          <select name="state" id="lang" onChange={(e) => handleChange(e)}>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Delhi">Delhi</option>
                          </select>
                        </div>
                        <div className="checkBoxContainer">
                          <input type="checkbox"   onChange={(e) => handleChange(e)} />
                          <label>Use this as the main address</label>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="leftContainer">
                        <div className="state-dropdown  ">
                          <label>Street Address</label>
                          <input
                            type="text"
                            name="address"
                            value={formdata?.address}
                            onChange={(e) => handleChange(e)}
                            placeholder="Enter Street Address"
                          />
                        </div>
                        <div>
                          <label for="lang">City</label>
                          <select name="city" id="lang" onChange={(e) => handleChange(e)}>
                            <option value="Bidar">Bidar</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Delhi">Delhi</option>
                          </select>
                        </div>
                        <div id="zipCode">
                          <label>Zip Code</label>
                          <input type="text" name="zipcode" value={formdata?.zipcode} placeholder="Enter Zip Code" onChange={(e) => handleChange(e)} />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <button className="saveChanges" onClick={(e) => {  e.preventDefault(); handleSubmit(e) }}>Save Changes</button>
      </>
    )
}
export default AddressForm;
