import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, Typography, } from '@mui/material';
import React, { useState } from 'react';
import login from '../../images/login.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { NavLink,useHistory } from 'react-router-dom';
import useAuth from '../Home/Hooks/useAuth';

const Register = () => {
    const {user, registerUser ,isLoading,error}= useAuth();

    const [loginData , setLoginData] = useState({});
    const history = useHistory()
    const handleOnBlur= e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData= {...loginData}
        newLoginData[field]= value;
        setLoginData(newLoginData)
        console.log("field",field ,"value", value,newLoginData)
    };
    
        const handleLoginSubmit = e =>{
            if(loginData.password !== loginData.password2){
                return alert('your password did not match');
                
            }
            registerUser(loginData.email, loginData.password,loginData.name ,history)
            e.preventDefault();
        };
    return (
        <Container>
        <Grid container spacing={2}>
        <Grid item sm={12} md={6} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Box>
            <Typography variant='h4'>please Register</Typography>
            { !isLoading && <form onSubmit={handleLoginSubmit }>

                    <TextField
                    sx={{width:1, mb:1}}
                    id="standard-name"
                    type="text"
                    label="Your name"
                    name="name"
                    onBlur={handleOnBlur}
                    autoComplete="Your name"
                    variant="standard"
                    />
                     <TextField
                    sx={{width:1, mb:1}}
                    id="standard-password-input"
                    type="email"
                    label="Email"
                    name="email"
                    onBlur={handleOnBlur}
                    autoComplete="current-password"
                    variant="standard"
                    />


                <TextField
                    sx={{width:1, mb:2}}
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    name="password"
                    onBlur={handleOnBlur}
                    autoComplete="current-password"
                    variant="standard"
                    />
                <TextField
                    sx={{width:1, mb:2}}
                    id="standard-password-input"
                    label="Re-typy your Password"
                    type="password"
                    name="password2"
                    onBlur={handleOnBlur}
                    autoComplete="Re-typy your Password"
                    variant="standard"
                    />
       
       <NavLink style={{textDecoration:'none'}} to='/login'><Button variant='text' style={{display:'block',margin:'0 auto',marginBottom:'20px'}}>All ready registered please login</Button></NavLink>

       <Button sx={{width:'50%'}} style=
       {{display:'block',margin:'0 auto'}} variant="contained" type='submit'>Register</Button>
  
            </form>}
            {
                isLoading && <CircularProgress />
            }

            {
                user?.email   && <Alert onClose={() => {}}>user successfully registerd</Alert>
                
            }

            {
                error && <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {error}
              </Alert>
            }
       
            </Box>
        </Grid>
        <Grid item sm={12} md={6}>
          
          <img style={{maxWidth: '100%'}} src={login} alt=''/>
           
        </Grid >

        </Grid>

    </Container>
    );
};

export default Register;
