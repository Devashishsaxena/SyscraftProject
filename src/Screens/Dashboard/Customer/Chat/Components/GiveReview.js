import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBTextArea,
  } from "mdb-react-ui-kit";
  import { Rating } from "@mui/material";
  import { useEffect, useState } from "react";
  import useSavePosts from "src/Hooks/useSavePosts";
  
  function GiveReview({show, proposal_id,onOutSideClick}){
    const [modalState,setModalState]=useState(false)
    const [input,setInput]=useState({})
    
    const {data,sendData}=useSavePosts('complete_project')
    const modalOnSubmit=async (e)=>{
      console.log(input)
      e.preventDefault();
      const result=await sendData({...input,proposal_id: proposal_id})
      if(result.status==true){
        setModalState(false)      
      }
    }
    useEffect(() =>{
      if(modalState===false){
        onOutSideClick()
      }
    },[modalState])
  
  
    useEffect(() =>{
    //  setLine_items(line_items)
    },[])
  
    return(
      <MDBModal show={show} setShow={setModalState} tabIndex="-1">
      <MDBModalDialog className="proposal-review">
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle
              
            >
              Review's Vendors Work 
            </MDBModalTitle>
  
          </MDBModalHeader>
          <MDBModalBody>
              <form
                className="shareForm"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="category-dropdown mb-12 sharediv" style={{ width:"100%" }}>
                    <ul>
                        <li class="grid">
                            <label>Would you recommend others customers to work with David?</label>
                            <div className="actionbuttons">
                                <a href='#' className={"alert alert-link border "+(input.recommendation?"border-secondary":"")} onClick={(e) => setInput({...input,recommendation:true})}>Yes</a>
                                <a href='#' className={"alert alert-link border "+(input.recommendation===false?"border-secondary":"")} onClick={(e) => setInput({...input,recommendation:false})}>No</a>
                            </div>
                        </li>
                        <li class="grid">
                            <label>Was David able to complete all the service that you were looking for?</label>
                            <div className="actionbuttons">
                            <a className={"alert alert-link border  "+(input.on_time?"border-secondary":"")} onClick={(e) => setInput({...input,on_time:true})}>Yes</a>
                                <a className={"alert alert-link border "+(input.on_time===false?"border-secondary":"")} onClick={(e) => setInput({...input,on_time:false})}>No</a>
                            </div>
                        </li>
                        <li class="">
                            <label>Share your comments.</label>
                            <textarea name='comment' onChange={(e) => setInput({...input,comment:e.target.value})}></textarea>
                        </li>
                        <li class="">
                            <label>Rate Your experience with David</label>
                            <Rating name="rating" value={input.rating} onChange={(e) => setInput({...input,rating:e.target.value})} />
                        </li>
                    </ul>
                
                </div>
  
                <div>
                  <MDBBtn
                    onClick={(e) => modalOnSubmit(e)}
                    className="btn btn-secondary float-end"
                  >
                    Send
                  </MDBBtn>
                </div>
              </form>
            
          </MDBModalBody>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>)
  
  }
  export default GiveReview;
  