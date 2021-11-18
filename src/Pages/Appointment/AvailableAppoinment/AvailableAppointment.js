import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const appointment= [
    {
        id:1,
        name:'Teeth Orthodontics',
        time:'09.00 AM - 12.00 PM',
        space:6,
        price:20
    },
    {
        id:2,
        name:'Cosmetic Denstry',
        time:'10.00 AM - 12.30 PM',
        space:9,
        price:25
    },
    {
        id:3,
        name:'Teeth Cleaning',
        time:'5.00 PM - 7.30 Pm',
        space:'23',
        price:30
    },
    {
        id:4,
        name:'Cavity Potection',
        time:'06.00 PM - 09.00 PM',
        space:5,
        price:24
    },
    {
        id:5,
        name:'Pediatric Dental',
        time:'11.00 AM - 03.00 PM',
        space:10,
        price:22
    },
    {
        id:6,
        name:'Oral Surgery',
        time:'07.00 PM - 10.00 PM',
        space:6,
        price:27
    }
]



const AvailableAppointment = ({date}) => {
    const [bookingSuccess, setBookingSuccess] =useState(false)
    return (
        <Container>
           <Typography variant='h4' sx={{ color: 'warning.main',mb:4 }} style={{textAlign:'center'}} component='div'>
           Available Appointment on <Typography variant='h4' style={{color:'#a600ff',display:'inline-block'}}>{date.toDateString()}</Typography>
           </Typography>
           {
            bookingSuccess &&<Alert>Booking successfully</Alert>
           }
            <Grid container spacing={2}> 
           { 
           
           appointment.map(appoint=> <Booking 
            key={appoint.id}
             date={date}
              appoint={appoint}
              setBookingSuccess={setBookingSuccess}
             ></Booking>)

           }

            </Grid>


        </Container>
    );
};

export default AvailableAppointment;