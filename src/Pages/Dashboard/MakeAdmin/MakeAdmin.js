import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../Home/Hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail]= useState('');
    const [success, setSuccess] = useState(false);
    const {token}= useAuth()


    const handleOnBlur= e=>{
        const value = e.target.value;
        setEmail(value)
    }


    const handleAdminSubmit= e=>{
        const user={email}
            fetch(`http://localhost:5000/users/admin`,{
                method:'PUT',
                headers:{
                    'authorization':`Bearer ${token}`,
                    'content-type':'application/json'
                },
                body:JSON.stringify(user)
            
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.modifiedCount){
                    setSuccess(true)
                }
                
                console.log(data)
            })
        e.preventDefault()
    }

  
    return (
        <div style={{textAlign:'center'}} >
           <form onSubmit={handleAdminSubmit} >
               <TextField 
               sx={{width:"50%"}}
               id="standard-basic"
                label="Email" 
                variant="standard" 
                onBlur={handleOnBlur}
                type='email'

                />
                <Button type='submit' variant='contained'>Make Admin </Button>
           </form>
           {
                success && <Alert onClose={() => {}}>user successfully registerd</Alert>
                
            }
        </div>
    );
};

export default MakeAdmin;