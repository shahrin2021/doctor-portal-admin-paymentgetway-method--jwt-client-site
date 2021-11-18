import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {loadStripe,} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import ChackOutForm from './ChackOutForm';
const stripePromise= loadStripe('pk_test_51Jwkb6FYv54k5fWBNzAHRc8LeLh5YAldlkE5h7c8mWmFClXgjN7CpQYawEk5x9k9ZA0XzgOuR4c0AHvOKJQEyGcB00LMTf36xD')
const Pay = () => {
    const {appoinmenttId} = useParams()

    const [appointment , setAppointment] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/appointments/${appoinmenttId}`)
        .then(res=> res.json())
        .then(data=> {
            setAppointment(data)
        })
    },[appoinmenttId])

    return (
        <div>
        <h3>plase pay for : {appointment.patientName} for : {appointment.serviceName}</h3>
       <h3>pay: $ {appointment.price}</h3>
    {  appointment.price &&  <Elements stripe={stripePromise}>
        <ChackOutForm appointment ={appointment} />
    </Elements>}
        </div>
    );
};

export default Pay;

/*

1.install stripe and stripe-react
2.set publishable key 
3.create elements 
4.checkout 
-------
5. create pament method 


*/
