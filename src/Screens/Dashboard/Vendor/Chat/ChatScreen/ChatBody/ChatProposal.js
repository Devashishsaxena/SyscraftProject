import { useState } from "react"
import useSavePosts from "src/Hooks/useSavePosts";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import SweetAlert from "react-bootstrap-sweetalert";
import Moment from 'moment';
//import PaymentModel from "../../Components/Payment/PaymentModel";
const ChatProposal = ({message,onPropsalRequest}) => {
    const {NewChats: {proposal}}=useSelector((state) => state);
    const [confirmStatus,setConfirmStatus] = useState({msg:"",status:false});
    const {data,sendData}=useSavePosts('accept_proposal')

    const [paymentRequestData,setPaymentRequestData]=useState({})
    const [paymentModalState,setPaymentModalState]=useState(false)

    let { id } = useParams();
    
    const onAcceptProposal =async () =>{
        //await sendData({proposal_id: id})
        //setConfirmStatus({msg:"Payment Done, Project Started successfully",status:true})
        setPaymentRequestData({proposal_id: id,reqest_for: 'accept_project'})
        setPaymentModalState(true);
    }
    const PaymentDone = async (response) =>{
        if(response.status){
            await sendData({proposal_id: id})
            setConfirmStatus({msg:"Payment Done, Project Started successfully",status:true})
        }
    }
    
    return (<div className="project-proposal-details chat">
        <SweetAlert
            success
            title={confirmStatus.msg}
            show={confirmStatus.status}
            onConfirm={()=>{ setConfirmStatus({msg:"",status:false});  }}
        >
            Successfully
        </SweetAlert>
        {/* <PaymentModel 
            payment_show={paymentModalState} 
            request_data={paymentRequestData} 
            onOutSideClick={() => setPaymentModalState(false)}
            onPaymentDone={(response) => PaymentDone(response)}
        /> */}
        <h3>Proposal</h3>
 
        <div className="desc">
            {console.log(message.data.line_items,'msg')}
            {message.data.description} 
        </div>
        <div className="desc">
            <h3 className="item-service-title">Service Items</h3>
            <ul className='line-item-container'>
                
            {message?.data?.line_items?.map((mvalue)=>{
                return (<li>
                    <div className='line-items'>
                        <div className='details'>
                            <div className='title-wrapper'>
                                <h4>{mvalue.title} -<span>${mvalue.budget}</span></h4>
                                <div className='status'>
                                    {mvalue.status && mvalue.status=='approved' && (
                                        <>
                                        <span className='alert alert-success'>Approved</span>
                                        </>
                                    )}
                                    {mvalue.status && mvalue.status=='rejected' && (
                                        <>
                                        <span className='alert alert-danger'>Rejected</span>
                                        </>
                                    )}
                                </div>
                            </div>
                            <p>{mvalue.description}</p>
                        </div>
                    </div>
                    

                    
                </li>)     
            })}
            </ul>
             
        </div>
        <div className="amount">
            <span className="amounttitle">Total Amount <b>${message.data.budget}</b></span>
        </div>
        <div className="actionbuttons">
        {message.is_actionable && (
            <>
            <a onClick={(e) => onAcceptProposal()}  className="btn btn-success">Accept All</a>
            <a  onClick={(e) => onPropsalRequest({inline_items:proposal.line_items})} className="btn btn-primary">Request To Update Proposal</a>
            </>
        )}
        </div>
        <div className="proposalid">
            <div className="proposaldate">
                <span>{Moment(message.created_at).format('DD MMMM, YYYY')}</span>
            </div>    
            <h5>Proposal ID: {message.proposal_id}</h5>
        </div>
        </div>)
}

export default ChatProposal;
