import { useState } from "react"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useSavePosts from "src/Hooks/useSavePosts";
import SweetAlert from "react-bootstrap-sweetalert";
import PaymentModel from "../../Components/Payment/PaymentModel";
import Moment from 'moment';

const ChatLineItems = ({message}) => {
    const {NewChats: {proposal}}=useSelector((state) => state);
    const [confirmStatus,setConfirmStatus] = useState({msg:"",status:false});
    const [paymentRequestData,setPaymentRequestData]=useState({})
    const [paymentModalState,setPaymentModalState]=useState(false)


    const {data,sendData}=useSavePosts('accept_line_items')
    let { id } = useParams();
 
    const acceptLineItems =async (message_id) =>{
        setPaymentRequestData({proposal_id: id,message_id:message_id,reqest_for: 'add_line_items'})
        setPaymentModalState(true);

    }
    const PaymentDone = async (response) =>{
        if(response.status){
            await sendData({proposal_id: id,message_id: response.data.message_id,status: "approved"})
            setConfirmStatus({msg:"Line Items accepted",status:true})
        }
    }
    const declineLineItems= async (message_id) =>{
        await sendData({proposal_id: id,message_id: message_id,status: "rejected"})
        setConfirmStatus({msg:"Line Items accepted",status:true})
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
        <PaymentModel 
            payment_show={paymentModalState} 
            request_data={paymentRequestData} 
            onOutSideClick={() => setPaymentModalState(false)}
            onPaymentDone={(response) => PaymentDone(response)}
        />

        <h3>Add Line items</h3>
        <div className="desc">
            <h3 className="item-service-title">Service Items</h3>
            <ul className='line-item-container'>
                
            {message.data.line_items?.map((mvalue)=>{
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
                <a onClick={(e) => acceptLineItems(message._id)}  className="btn btn-success">Accept</a>
                <a  onClick={(e) => declineLineItems(message._id)} className="btn btn-danger">Reject</a>
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

export default ChatLineItems;
