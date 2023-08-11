
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useSavePosts from "src/Hooks/useSavePosts";
import SweetAlert from "react-bootstrap-sweetalert";
import useProposalsActions from "src/Hooks/useProposalsActions";
import GiveReview from "./GiveReview";
const ProposalToDo = () => {
    let { id } = useParams();
    const [confirmStatus,setConfirmStatus] = useState({msg:"",status:false});
    const [reviewAccess,setReviewAccess] = useState(false);
    const [reviewModalState,setReviewModalState] = useState(false);
    const {data,sendData}=useSavePosts('change_status')
    const {sendData: giveReview}=useSavePosts('complete_project')
    const {NewChats:{proposal}} = useSelector((state) => state);
    const {setProposal}=useProposalsActions();
    const approveLineItem =async (e,line_item_id) =>{
        e.preventDefault();
        await sendData({proposal_id: id,line_item_id,line_item_id,status:"completed"})
        setProposal(id)
        setConfirmStatus({msg:"Payment Release, Service Lineitem Completed",status:true})
    }
    useEffect(()=>{
        let cstatus=true
        proposal?.todo?.map((mvalue,key)=>{
            if(mvalue.status!='completed'){
                cstatus=false
            }
        })
        setReviewAccess(cstatus)
    },[proposal])
    return (<> 
    <div className="todo-container">
        <SweetAlert
            success
            title={confirmStatus.msg}
            show={confirmStatus.status}
            onConfirm={()=>{ setConfirmStatus({msg:"",status:false});  }}
        >
            Successfully
        </SweetAlert>
        <ul >
        {proposal?.todo?.map((mvalue,key)=>{
                        return (<li>
                            <div class='line-items'>
                                <div class="details">
                                    <div className="title-wrapper">
                                        <h4>{mvalue.title} -<span>${mvalue.budget}</span></h4>
                                        <div class="status">
                                            {mvalue.status=='' && <span className="alert alert-danger not_started">Not Started</span> }
                                            {mvalue.status=='completed' && <span className="alert alert-success completed">Completed</span> }
                                            {mvalue.status=='started' && <span className="alert alert-primary started">Started</span> }
                                            {mvalue.status=='payment_pending' && <span className="alert alert-warning payment_pending">Pending</span> }
                                        </div>
                                    </div>

                                    <p>{mvalue.description+' '+ "Ref:"+ mvalue._id}</p>
                                </div>
                            </div>
                            <div class='status-container'>
                                    <>
                                        {mvalue.status=='payment_pending' && (
                                            <>
                                                <button onClick={(e) => approveLineItem(e,mvalue._id)} className='btn btn-success'>Approved</button> &nbsp;
                                                <button onClick={(e) => {}} className='btn btn-outline-danger'>Still Pending</button>
                                            </>
                                        )}
                                    </>
                                
                            </div>
                            {/* <div className={"alert alert-info"}>I Information</div> */}
                            <hr/>
                           
                        </li>)     
                    })}
        </ul>
        {reviewAccess && (
            <>
                <GiveReview show={reviewModalState} onOutSideClick={() => setReviewModalState(false)} proposal_id={id}  />
                <a className="btn btn-primary" onClick={(e) => {setReviewModalState(true)}}>Complete Project & Give Review</a>
            </>
        )}
    </div>
    </>)
}

export default ProposalToDo;