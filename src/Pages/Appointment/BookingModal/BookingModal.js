import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import useAuth from '../../Home/Hooks/useAuth';


const BookingModal = ({open,handleBookingClose,appoint,date ,setBookingSuccess}) => {
  const {name,time,price } =appoint;
  const {user}= useAuth();
  const initialInfo = {patientName:user.displayName, email:user.email, phone:''}
  const [bookingInfo, setBookingInfo] = useState(initialInfo);
 
 

const handleOnBler = e=>{
  const field = e.target.name;
  const value= e.target.value;
  const newInfo={...bookingInfo}
  newInfo[field]= value;
  console.log(newInfo)
  setBookingInfo(newInfo);
}




const style = {
    width: 400,
    background:'#fff',
    border: '2px solid #000',
    p: 2,
    px: 4,
    pb: 3,
    padding:"10px"
  };

  const handleBookingSubmit = e=>{
    const appointment= {
      ...bookingInfo, 
      time,
      price,
      serviceName: name,
      date:date.toLocaleDateString()
      
    }
    console.log(appointment)
   
    
    
        // console.log(appointment
   

    // send to the server
    fetch('http://localhost:5000/appointments',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },body:JSON.stringify(appointment)
    }).then(res=>res.json())
    .then(data=>{
      if(data.insertedId){
        setBookingSuccess(true)
        handleBookingClose()
      }
    })

    e.preventDefault();

  }
    return (
        <Modal
        keepMounted
        open={open}
        onClose={handleBookingClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        style={{display:'flex', justifyContent:'center', alignItems:'center'}}
      >
        <Box style={{...style}}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
           {name}
          </Typography>
         <form onSubmit={handleBookingSubmit} >
         
        <TextField
        disabled
     
          sx={{width:'90%',m:1 }}
          id="outlined-size-small"
          defaultValue={time}
          size="small"
        />
         <TextField
        
          sx={{width:'90%',m:1 }}
          defaultValue={user?.displayName}
          id="outlined-size-small"
          name="patientName"
          onBlur={handleOnBler}
         
          size="small"
        />
       
        <TextField
          
          sx={{width:'90%',m:1 }}
          id="outlined-size-small"
          type='text'
          name="email"
          defaultValue={user?.email}
          onBlur={handleOnBler}
          size="small"
        />
        <TextField
        
          sx={{width:'90%',m:1 }}
          id="outlined-size-small"
          onBlur={handleOnBler}
          defaultValue="Phone Number"
          name="phone"
          size="small"
        />
        <TextField
        disabled
          sx={{width:'90%',m:1 }}
          id="outlined-size-small"
          value={date.toDateString()}
          size="small"
        />

        

          <Button type='submit' variant='contained'>Booking</Button>
         </form>

        
        </Box>
      </Modal>
    );
};

export default BookingModal;