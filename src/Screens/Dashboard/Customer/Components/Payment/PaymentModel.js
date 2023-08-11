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
  import useGetPosts from "src/Hooks/useGetPosts";
  import useSavePosts from "src/Hooks/useSavePosts";
  function PaymentModel({payment_show,onOutSideClick, request_data,onPaymentDone}){
    const [modalState,setModalState]=useState(false)
    const [error,setError]=useState('')
    const [paymentMethod,setPaymentMethod]=useState({})
    const {data:get_checkout_info,getdata:getCheckoutInfo}=useGetPosts({url: "get_checkout_info",onLoad:false})
    const {sendData:pay}=useSavePosts('pay')
   
    const modalOnSubmit=async (e)=>{
      e.preventDefault();
      setError('');
      const result=await pay({...request_data,payment_method: paymentMethod})
      console.log(result,'pay')
      if(result.status==true){
        onPaymentDone(result);
        setModalState(false)      
      } else{
        setError(result.error)
      }
    }
    useEffect(() =>{
      if(modalState===false){
        onOutSideClick()
      } else{
        getCheckoutInfo(request_data)
      }
    },[modalState])
  
  
    useEffect(() =>{
    //  setLine_items(line_items)
    },[])
  
    return(
    <MDBModal show={payment_show} setShow={setModalState} tabIndex="-1">
      <MDBModalDialog className="proposal-review">
            <MDBModalContent>
                <MDBModalHeader>
                    <MDBModalTitle>
                        Checkout
                    </MDBModalTitle> 
                </MDBModalHeader>  
                <MDBModalBody>
                    {error && error!='' && <div className="alert alert-danger">{error}</div>}
                    <form className="paymentform"
                            onSubmit={(e) => e.preventDefault()} >
                        <div className=" category-dropdown mb-12 sharediv" style={{ width:"100%" }}>
                                <h3 className="paymenttitle">Line Items</h3>
                                <table className="table  products">
                                    
                                    <tbody>
                                        {get_checkout_info?.data?.line_items?.map((value,index) =>{
                                            return (
                                                <tr>
                                                    <th>{value.title}</th>
                                                    <td>${value.budget}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>    
                                    <tfoot>
                                        <tr>
                                            <th>Total Billed Amount</th>
                                            <td>$611</td>
                                        </tr>
                                    </tfoot>
                                </table>
                                <h3 className="methodtitle">Choose Payment Method</h3>
                                
                                <table className="table paymentmethods">
                                    
                                        <tr className="paymentmm">
                                                <td><div className="circle checked"></div></td>
                                                <td colspan="2">Debit/Credit/ATM Cards</td>
                                        </tr>
                                        {get_checkout_info?.data?.methods?.map((value,index) =>{
                                            return (
                                                <tr onClick={(e) =>setPaymentMethod(value.payment_id)} 
                                                    
                                                >
                                                    <td><div className={value.payment_id==paymentMethod?"box checked":"box"} ></div></td>
                                                    <td>{value.type}</td>
                                                    <td className="text-right"><>XXXX XXXX XXXX {value.card_last_digits}</></td>
                                                </tr>
                                            )
                                        })}

                                </table>
                        </div>
                    </form>
                    <div>
                        <MDBBtn
                        onClick={(e) => modalOnSubmit(e)}
                        className="btn btn-secondary float-end"
                        >
                        Send
                        </MDBBtn>
                    </div>
                </MDBModalBody>
            </MDBModalContent>
        </MDBModalDialog>
    </MDBModal>
    )
}
export default PaymentModel;
