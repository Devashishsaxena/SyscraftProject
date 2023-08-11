import {
    Elements,
    CardElement,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement,
    useElements,
    AddressElement,
    useStripe
  } from "@stripe/react-stripe-js";
import useSavePosts from "src/Hooks/useSavePosts";
import { useState } from "react";
const CheckoutForm = ({onSuccessfullyAdded}) => {
    const stripe = useStripe();
    const [paymentAddress,setPaymentAddress]=useState({});
    const [error,setError]=useState("");
    const elements = useElements();
    const {sendData}=useSavePosts('create_source');
  
    const handleSubmit = (stripe, elements) => async () => {
        // let cardElement=[];
        setError("")
        const cardElement= elements.getElement(CardNumberElement);
          stripe.createToken(cardElement,paymentAddress).then(async function(result) {
            console.log(paymentAddress,"address")
            const response= await sendData({token: result.token.id})
            if(response.status){
              onSuccessfullyAdded();
            } else{
              setError(response.error);
            }
          });
      
      };

    return (
      <>
        {error && error!='' && <div className="alert alert-danger">{error}</div>}
        <CardNumberElement
          options={{
              style: {
                base: {
                  border: `1px solid #d4d4d4`,
                  iconColor: '#c4f0ff',
                  fontWeight: '500',
                  fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
                  fontSize: '16px',
                  color:"#000"
                },
                invalid: {
                  iconColor: 'red',
                  color: 'red',
                },
                placeholder: {
                  color: '#d4d4d4',
                },
              },
            }
          }
        />
        <CardCvcElement />
        <CardExpiryElement />
        <AddressElement options={{mode: "billing"}} onChange={(event) => {
          if (event.complete) {
            setPaymentAddress(event.value);
          }
        }}  />
        <button className='btn btn-success' onClick={handleSubmit(stripe, elements)}>Create</button>
      </>
    );
};

export default CheckoutForm;