import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, Typography, } from '@mui/material';
import React, { useState, } from 'react';
import login from '../../../images/login.png'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { NavLink,useLocation ,useHistory} from 'react-router-dom';
import useAuth from '../../Home/Hooks/useAuth';





const Login = () => {
    const {user,singInWithGmailPassword,isLoading, error,singInWithGoogle }= useAuth()
    const [loginData , setLoginData] = useState({});
    
    const history = useHistory();
    const location = useLocation();
const handleOnChange= e =>{
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData= {...loginData}
    newLoginData[field]= value;
    setLoginData(newLoginData)
    console.log(value)
};

const handleGoogleLogin =()=>{
    singInWithGoogle(location, history)
}

    const handleLoginSubmit = e =>{
      
        singInWithGmailPassword(loginData.email, loginData.password,location, history)
        e.preventDefault();
    };
    return (
        <Container>
            <Grid container spacing={2}>
            <Grid item sm={12} md={6} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Box>
                <Typography variant='h4'>Login Please</Typography>
                <form onSubmit={handleLoginSubmit}>
         
                        <TextField
                        sx={{width:1, mb:1}}
                        id="standard-password-input"
                        label="Email"
                        type="email"
                        name="email"
                        onBlur={handleOnChange}
                        autoComplete="current-password"
                        variant="standard"
                        />

 
                    <TextField
                        sx={{width:1, mb:2}}
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        name="password"
                        onBlur={handleOnChange}
                        autoComplete="current-password"
                        variant="standard"
                        />
           
           <NavLink style={{textDecoration:'none'}} to='/register'><Button  style={{display:'block',margin:'0 auto',marginBottom:'20px'}}>Register Now</Button></NavLink>
    
           <Button sx={{width:'50%'}} style=
           {{display:'block',margin:'0 auto'}} variant="contained" type='submit'>Login</Button>
           
      
                </form>
                <p>-----------------------------------------</p>
                <Button onClick={handleGoogleLogin} sx={{width:'50%'}} style=
           {{display:'block',margin:'0 auto'}}  type='submit'>Sign in with google</Button>
              
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

export default Login;