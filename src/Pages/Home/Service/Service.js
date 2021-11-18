import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Service = (props) => {
    const {name, discription, img} = props.service;
    return (
      
            <Grid item xs={4} sm={4} md={4}  >
            <Card sx={{ minWidth: 275,boxShadow: 0 , border: 0 }} style={{padding:'10px',marginTop:'60px' }} >
            <CardMedia
        component="img"
        style={{width:'auto', height: '80px', margin:'0 auto'}}
        image={img}
        alt="Paella dish"
      />
      <CardContent>
      
        <Typography variant="h5" component="div" style={{textAlign:'center' ,margin:'20px 0'}}>
        {name}
        </Typography>
        <Typography variant="body2" style={{textAlign:'center'}} color="text.secondary">
         {discription}
         
        </Typography>
      </CardContent>
    </Card>
            </Grid>
            
       
    );
};

export default Service;