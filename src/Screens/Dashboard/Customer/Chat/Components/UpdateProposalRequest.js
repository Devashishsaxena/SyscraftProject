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
import { useEffect, useState } from "react";
import useSavePosts from "src/Hooks/useSavePosts";

function UpdateProposalRequest({proposal_show,line_items,onSendData,onOutSideClick}){
  const [updated_line_items,setLine_items]=useState(false)
  const [modalState,setModalState]=useState(false)
  
  const {data,sendData}=useSavePosts('proposal_update_request')
  const modalOnSubmit=(e)=>{
    e.preventDefault();
    onSendData(updated_line_items)
    
  }
  const setDecision =(dec,key) =>{
    let temp_items=[...updated_line_items];
    temp_items[key]={...temp_items[key],status: dec}
    setLine_items(temp_items)
  }


  useEffect(() =>{
    setLine_items(line_items)
  },[line_items])

  useEffect(() =>{
    setModalState(proposal_show)
  },[proposal_show])

  useEffect(() =>{
    if(modalState===false){
      onOutSideClick()
    }
  },[modalState])

  return(
    <MDBModal show={modalState} setShow={setModalState}  tabIndex="-1" >
    <MDBModalDialog className="proposal-update">
      <MDBModalContent>
        <MDBModalHeader>
          <MDBModalTitle>
            Line Items
          </MDBModalTitle>

        </MDBModalHeader>
        <MDBModalBody>
            <form
              className="shareForm"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="category-dropdown mb-12 sharediv" style={{ width:"100%" }}>
              <h3 className="item-service-title">Service Items</h3>
              <ul className='line-item-container'>
                {line_items?.map((mvalue,key)=>{
                    return (<li>
                        <div class='line-item-title-container'>
                            <h4>{mvalue.title} -<span>${mvalue.budget}</span></h4>
                            <p>{mvalue.description}</p>
                        </div>
                        <div class='status-container'>
                                <>
                                <button onClick={(e) => { e.preventDefault(); setDecision('approved',key)}} style={updated_line_items[key]?.status && updated_line_items[key].status=='approved'?{border:'1px solid #000'}:{}} className='alert alert-success'>Approved</button> &nbsp;
                                <button onClick={(e) => { e.preventDefault(); setDecision('rejected',key)}} style={updated_line_items[key]?.status && updated_line_items[key].status=='rejected'?{border:'1px solid #000'}:{}} className='alert alert-danger'>Reject</button>

                                </>
                            
                        </div>
                    </li>)     
                })}
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
export default UpdateProposalRequest;
