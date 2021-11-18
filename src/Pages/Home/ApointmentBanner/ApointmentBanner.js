import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png'
import { Button, Container, Typography } from '@mui/material';

const appointmentBanner ={
    background: `url(${bg})`,
    marginTop:'100px',
    backgroundPosition:'center',
    backgroundColor:'RGBA(14, 18, 51,.8) ',
    backgroundBlendMode:'darken, luminosity',
    backgroundSize:'cover',
    backgroundRepeat: ' no-repeat',
    marginBottom:'20px',
    padding:'50px 0'
    
}

const ApointmentBanner = () => {
    return (
        <div>
           <Container>
            <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} >
        <Grid item xs={12} md={6} style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
         <img 
         style={{width:'400px', marginTop:'-150px'}}
         
         src={doctor} alt="" />
        </Grid>
        <Grid item xs={12} md={6} style={{display:'flex',justifyContent:'flex-start', alignItems:'left'}}>
        <Typography variant='div' style={{maxWidth:'400px',padding:'0 15px'}}>
          <Typography variant='h6' sx={{ mb: 2 }} style={{color:'#fff', }}>
              Appointment
          </Typography>
          <Typography sx={{ mb: 2 }} variant='h4' style={{color:'#fff', }}>
             Make an Appointment Today
          </Typography>
          <Typography variant='p'  style={{color:'#fff',marginBottom:'20px'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sunt, maiores illo sequi impedit consequuntur velit
          </Typography>

          <Typography sx={{mt:2}}>
          <Button variant="contained">Appointment Now</Button>
          </Typography>
          </Typography>
        </Grid>
       
      </Grid>
    </Box>
    </Container>
        </div>
    );
};

export default ApointmentBanner;