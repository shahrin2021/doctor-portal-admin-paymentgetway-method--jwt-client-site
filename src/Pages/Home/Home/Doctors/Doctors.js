import { GridView } from '@mui/icons-material';
import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors , setDoctors] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/doctors')
        .then(res=>res.json())
        .then(data=>{
            setDoctors(data)
        })
    },[])
    return (
        <Container>
            <h4 style={{textAlign:'center'}}> Our Doctors : {doctors.length}</h4>

            <Grid container spacing={2}>
                {
                    doctors.map(doctor=><Doctor
                        key= {doctor._id}
                        doctor={doctor}
                    />)
                }
            </Grid>
        </Container>
    );
};

export default Doctors;