import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ChatProposal from './ChatProposal';
import UpdateProposalRequest from "../UpdateProposalRequest"
import useSavePosts from "src/Hooks/useSavePosts";
// import ChatLineItems from "./ChatLineItems";
import { useParams } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";
import { useEffect } from "react";
//import PaymentModel from "../../Components/Payment/PaymentModel";

const Index = () => {
    let { id } = useParams();
    const getState = useSelector((state) => state);
    const [confirmStatus,setConfirmStatus] = useState({msg:"",status:false});

    const [inputs,setInput] = useState({proposal_id:id});

    const [modalState,setModalState]=useState(false)
    const [paymentModalState,setPaymentModalState]=useState(false)

    const [line_items,setLineItems]=useState([])
    const [paymentRequestData,setPaymentRequestData]=useState({})

    
    const {sendData}=useSavePosts('accept_proposal')
 
    
    const {sendData:sendMessage}=useSavePosts('vendor_send_message')

    
    async function SendMessage(){
        await sendMessage(inputs)  
        setInput({...inputs,message:""})
        document.getElementById('chatboxid').scrollTo(0, document.getElementById('chatboxid').scrollHeight);
    }
    async function updateProposalRequest(updated_line_items){ 
        setModalState(false) 
        setPaymentRequestData({proposal_id: id,line_items:updated_line_items,reqest_for: 'accept_project'})
        setPaymentModalState(true);
    }
    const PaymentDone = async (response) =>{
        if(response.status){
            sendData({proposal_id:id,line_items:response.data.line_items}); 
            setConfirmStatus({msg:"Payment Done, Project Started successfully",status:true})
        }
    }


    useEffect(() => {
        setInput({...inputs,proposal_id:id})
        setModalState(false)
    },[id])
    return (<>
        <div className="chatbody" id="chatboxid">
        <SweetAlert
            success
            title={confirmStatus.msg}
            show={confirmStatus.status}
            onConfirm={()=>{ setConfirmStatus({msg:"",status:false});  }}
        >
            Successfully
        </SweetAlert>
        <UpdateProposalRequest 
            proposal_show={modalState} 
            onOutSideClick={() => setModalState(false)}  
            onSendData={(updated_line_items) => updateProposalRequest(updated_line_items) }  
            line_items={line_items} 
        />
        {/* <PaymentModel 
            payment_show={paymentModalState} 
            request_data={paymentRequestData} 
            onOutSideClick={() => setPaymentModalState(false)}
            onPaymentDone={(response) => PaymentDone(response)}
        /> */}
        {
            getState?.NewChats?.messages?.map((value,index)=>{
                return (
                    <div  className={"chatbox message-"+ value.type +" message-"+value.from}>
                       
                        {console.log(value.is_actionable,'chatcheck')}

                        {value.type!='system' &&
                        <img  
                               src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
                              className="rounded-circle chatimg"
                              
                            />
                        }
                       {value.type=='message' && (<div className="chat"><p>{value.message}</p></div>)}
                        {value.type=='proposal_update' && (<ChatProposal message={value} onPropsalRequest={({inline_items}) => { console.log(inline_items,'dfr'); setModalState(true);  setLineItems(inline_items) } } />) }
                       {/*{value.type=='add_line_items' && (<ChatLineItems message={value} onPropsalRequest={({inline_items}) => { } } />) }
                       {value.type=='system' && (<div className="chat chatcenter system"><p>{value.message}</p></div>) }   */}
                    </div>
                    
                )
            
            })
        }
        </div>
        <div className="chatinput">
            <textarea name="message" placeholder="type text here...." onKeyUp={(e) => {  (e.key == "Enter" && !e.shiftKey) && SendMessage() }} onChange={(e) => setInput({...inputs,message:e.target.value })} value={inputs?.message} />
            <button className="btn btn-info  blue" >Start Call</button> <button className="btn btn-info white" >Contact Admin</button>
        </div>
            <br /><br /><br />

    </>)
}

export default Index;
