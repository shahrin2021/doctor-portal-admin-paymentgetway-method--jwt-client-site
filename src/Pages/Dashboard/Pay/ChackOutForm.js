import React, { useEffect } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import{ useState } from 'react';
import useAuth from '../../Home/Hooks/useAuth';
import { CircularProgress } from '@mui/material';
const ChackOutForm = ({appointment}) => {
  const [error , setError] = useState()
    const elements = useElements()
    const stripe = useStripe();
    const [clientSecret,setClientSecret] = useState('');
    const {price,patientName, _id} =appointment;
    const {user}= useAuth();
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);

    useEffect(()=>{
      fetch('http://localhost:5000/create-payment-intent',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify({price})
      })
      .then(res=>res.json())
      .then(data=> {
        setClientSecret(data.clientSecret)
      })
    },[price])
    const handleSubmit= async (e)=>{
      e.preventDefault()
            if(!stripe || !elements){
                return;
            }

            const card = elements.getElement(CardElement);
            if(card === null){
                return ;
            }
            setProcessing(true)
            const {error , paymentMethod}= await stripe.createPaymentMethod({
              
              type: 'card',
              card
            });

            if(error){
              setError(error.message)
              setSuccess('')
            }else{
              setError('')
              console.log(paymentMethod)
              
            }

            // payment intent

            const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
              clientSecret,
              {
                payment_method: {
                  card: card,
                  billing_details: {
                    name:patientName,
                    email: user.email
                    ,
                  },
                },
              },
            );
            if(intentError){
              setError(intentError.message)
              setSuccess('')
            }else{
              setError('')
              console.log(paymentIntent)
              setSuccess('your prament successfullyu')
              setProcessing(false);
              const payment={
                amount: paymentIntent.amount, 
                created:paymentIntent.created,
                lastFour: paymentMethod.card.last4,
                transaction:paymentIntent.client_secret.slice('_secret')[0]
              }
              const url =`http://localhost:5000/appointments/${_id}`;
              fetch(url,{
                method: 'PUT',
                headers:{
                  'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
              })
              .then(res=>res.json())
              .then(data=> {
                console.log(data)
              })
            }
        
            
    }



    return (
        
        <div>
            <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
     { processing ? <CircularProgress/> : <button className='d-block mx-auto' type="submit" disabled={!stripe || success} >
        Pay ${appointment.price}
      </button>}
    </form>
    {
        error && <p style={{color:'red'}}>{error}</p>
    }
    {
        success && <p style={{color:'green'}}>{success}</p>
    }
        </div>
    );
};

export default ChackOutForm;