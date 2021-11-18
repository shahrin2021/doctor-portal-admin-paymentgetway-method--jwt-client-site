import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';


const Booking = ({appoint, date,setBookingSuccess}) => {
    const {name, time, space,price } = appoint;
    const [open, setOpen] = React.useState(false);
        const handleBookingOpen = () => setOpen(true);
        const handleBookingClose = () => setOpen(false);
    return (
        

         <>
            <Grid item xs={12} sm={6} md={4}> 
            <Paper elevation={3} sx={{py:5 , textAlign:'center',}}>
                <Typography variant='h6' gutterBottom component='div' sx={{color: 'success.main'}}>
                    {name}
                </Typography>
                <Typography variant='h6' gutterBottom  >
                    {time}
                </Typography>
                <Typography variant='h6' gutterBottom  >
                   Price: {price}
                </Typography>
                <Typography variant='caption' gutterBottom component='div' >
                    {space} Spaces Available
                </Typography>
                <Button onClick={handleBookingOpen} variant="contained">Book Appointment</Button>

            </Paper >
            </Grid>
            <BookingModal 
            date={date}
            appoint={appoint}
            open ={open}
            setBookingSuccess={setBookingSuccess}
            handleBookingClose ={handleBookingClose}
           
            ></BookingModal>
         
         
         </>
    
     
    );
};

export default Booking;