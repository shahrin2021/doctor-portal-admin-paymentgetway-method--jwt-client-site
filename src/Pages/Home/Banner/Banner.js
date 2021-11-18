import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';
import { height, padding } from '@mui/system';

const bannerBg= {
    background:`url(${bg})`,
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    backgroundSize:'cover',
    height:'80vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
}
const bannerItem = {
  
   



}

const Banner = () => {
    return (
        <div>
            
             <Box sx={{ width: '100%' }} style={bannerBg}>
             <Container>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={bannerItem} >
        <Grid item xs={12} md={5}>
        <Box>
        <Typography sx={{mb:2}} variant='h3'> 
            Your New Smile <br />
            Start Here
        </Typography>
        <Typography sx={{mb:2}} variant='h6'> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sunt, maiores illo sequi impedit consequuntur velit  
        </Typography>
        <Button variant="contained" color="success">Get Appointment</Button>
        </Box>
        </Grid>
        <Grid item xs={12} md={7} style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
                <img 
                style={{maxWidth:'400px'}}
                src={chair} alt="" />
        </Grid>
      
      </Grid>
      </Container>
    </Box>
   
        </div>
    );
};

export default Banner;