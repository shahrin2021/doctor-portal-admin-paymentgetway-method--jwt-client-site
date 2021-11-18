import { Grid } from '@mui/material';
import React, { useState } from 'react';
import Calender from '../../../Shared/Calender/Calender';
import Appointments from '../Appointments/Appointments';


const DashboardHome = () => {
   
    const [date, setDate] = useState(new Date())
    return (
        <div>
             <Grid container spacing={2}>
        <Grid item xs={12} sm={5} md={4}>
         <Calender
         date={date}
         setDate={setDate}
         
         ></Calender>
        </Grid>
        <Grid item xs={12} sm={7} md={7} >
        <Appointments date={date}></Appointments>
        </Grid>
       
      </Grid>
        </div>
    );
};

export default DashboardHome;