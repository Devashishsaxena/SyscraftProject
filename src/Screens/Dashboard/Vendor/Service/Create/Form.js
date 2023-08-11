import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useState,useRef } from "react";
import useGetPosts from "src/Hooks/useGetPosts";
function Form({defaultvalues,submitService,validations}) {

  const imageRef = useRef();
  const [formdata, setFormData] = useState({});
  const {data:categories}= useGetPosts({url:"project_categories"});
  const [errors, seterrors] = useState({});


  const showOpenFileDlg = (e) => {
    e.preventDefault();
    imageRef.current.click()
  }

  const handleSubmit = (e) =>{
    const temperrors={};
    console.log("d");
    Object.keys(validations).forEach(function(field) {
      validations[field].map((value) => {
          switch(value){
            case "required":
              console.log(formdata[field],"validation");
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
      submitService(formdata)
  }

  const removeOldImage=(e,value) =>{
    setFormData({...formdata,removedImages:[...formdata.removedImages,value]})
    
    let tempimages=formdata.oldImages
    console.log(tempimages,value);
    const index = tempimages.indexOf(value);
    console.log(index);
    if (index > -1) { // only splice array when item is found
      tempimages.splice(index, 1); // 2nd parameter means remove one item only
    }
    setFormData({...formdata,oldImages:tempimages})

    setFormData({...formdata,removedImages:[...formdata.removedImages,value]})
  }
  const removeNewImage=(e,value)=>{
    let tempimages=formdata.images
    console.log(tempimages,value);
    const index = tempimages.indexOf(value);
    console.log(index);
    if (index > -1) { // only splice array when item is found
      tempimages.splice(index, 1); // 2nd parameter means remove one item only
    }
    setFormData({...formdata,images:tempimages})
  }
  const handleFileRead = async (event) => {
    const file = event.target.files[0]
    const base64 = await convertBase64(file)
    setFormData({...formdata,images:[...formdata.images,base64]})
    console.log(formdata.images)
  }

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }

  useEffect(()=>{
    setFormData(defaultvalues)
  },[defaultvalues])


  return (
  <Container>
    <form className="customer_add_form">
      <Row>
        <Col md={6} sm={6} lg={6}>
          <label>Service Name:</label>
          <input type="text" name="title" placeholder="Title" value={formdata?.title}  onChange={(e) => setFormData({...formdata,["title"]:e.target.value })}/>
          { errors?.title && (<div className='error'>{errors?.title}</div>) }
        </Col>
        <Col md={6} sm={6} lg={6}>
          <label>Service Charge:</label>
          <input type="text" name="service_charge" placeholder="Charge" value={formdata?.service_charge}  onChange={(e) => setFormData({...formdata,["service_charge"]:e.target.value })}/>
          { errors?.service_charge && (<div className='error'>{errors?.service_charge}</div>) }
        </Col>
        <Col md={6} sm={6} lg={6}>
          <label>Service Type:</label>
          <select name='category' value={formdata?.category} onChange={(e) => setFormData({...formdata,["category"]:e.target.value })}>
              {categories?.data?.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.title}
                </option>
              ))}
            </select>  
            { errors?.category && (<div className='error'>{errors?.category}</div>) }                    
        </Col>
        <Col md={6} sm={6} lg={6}>
          <label>Service Category:</label>
          <select name='sub_category' value={formdata?.sub_category} onChange={(e) => setFormData({...formdata,["sub_category"]:e.target.value })}>
              {categories?.data?.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.title}
                </option>
              ))}
            </select>    
            { errors?.sub_category && (<div className='error'>{errors?.sub_category}</div>) }                  
        </Col>
        <Col md={12} sm={12} lg={12}>
          <label>Skill Set:</label>
          <input type="text" name="street_name" placeholder="Street Name" value={formdata?.street_name}  onChange={(e) => setFormData({...formdata,["street_name"]:e.target.value })}/>
          { errors?.street_name && (<div className='error'>{errors?.street_name}</div>) }      
        </Col>

        <Col md={12} sm={12} lg={12}>
          <label>Service Description:</label>
          <input
            type="textarea"
            name="description"
            placeholder="Description"
            value={formdata?.description} 
            onChange={(e) => setFormData({...formdata,["description"]:e.target.value })}
          />
          { errors?.description && (<div className='error'>{errors?.description}</div>) }
        </Col>

        <Col md={6} sm={6} lg={6}>
          <button
            className="btn"
            type="submit"
            onClick={(e) => {  e.preventDefault(); handleSubmit(e) }}
          >
            Add Service
          </button>
        </Col>
      </Row>
    </form>
  </Container>
             
  );
}

export default Form;
