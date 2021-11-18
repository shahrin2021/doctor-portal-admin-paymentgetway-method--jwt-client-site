import { Grid } from '@mui/material';
import React from 'react';

const Doctor = ({doctor}) => {
    const {name , image} = doctor;
    return (
        <Grid lg={4} md={6} sm={12}>
            <img style={{width: '300px', objectFit:'cover',height:'200px',borderRadius:'20px'}} src={`data:image/jpeg;base64,${image}`} alt="" />
            <h3 style={{textAlign:'center'}}>{doctor.name}</h3>
        </Grid>
    );
};

export default Doctor;