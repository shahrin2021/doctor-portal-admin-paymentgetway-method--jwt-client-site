import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Service from '../Service/Service';
import { Container, Typography } from '@mui/material';


const Services = () => {

  const services = [
    {
      name:'Fluoride Treatment',
      discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sunt, maiores illo sequi impedit consequuntur velit illum animi non natus nesciunt molestias consectetur, accusantium quo! Doloribus esse beatae odit eius.',
      img:'https://i.ibb.co/GTjGc14/fluoride.png'
    },
    {
      name:'Cavity Filling',
      discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sunt, maiores illo sequi impedit consequuntur velit illum animi non natus nesciunt molestias consectetur, accusantium quo! Doloribus esse beatae odit eius.',
      img:'https://i.ibb.co/mby20xj/cavity.png'
    },
    {
      name:'Teeth Whitening',
      discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sunt, maiores illo sequi impedit consequuntur velit illum animi non natus nesciunt molestias consectetur, accusantium quo! Doloribus esse beatae odit eius.',
      img:'https://i.ibb.co/pPMDPwP/whitening.png'
    }
  ]
   
     
    return (
        <div>
              <Box sx={{ flexGrow: 1 }}>
     <Container>
       <Typography variant='h6'  sx={{ textAlign: 'center',color: 'success.main',m:2,mb:3 }}>
         Our services 
       </Typography>
       <Typography variant='h4'  sx={{ fontWeight: 'medium' ,textAlign: 'center' }}>
         service we provide
       </Typography>

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>  
          {
            services.map(service=> <Service
              service={service}
              key={service.name}
              ></Service>
              )
          }

          </Grid>
     </Container>
    </Box>
        </div>
    );
};

export default Services;