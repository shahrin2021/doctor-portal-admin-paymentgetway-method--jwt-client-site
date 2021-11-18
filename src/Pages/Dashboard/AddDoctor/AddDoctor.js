import { Alert, Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [image, setImage] = useState(null)
const [success, setSuccess] = useState(false)

const handleSubmit =(e)=>{
   
    if(!image){
        return
    }
    console.log('hello')
    const formData = new FormData();

    formData.append('name', name);
    formData.append('email', email);
    formData.append('image', image);

    fetch('http://localhost:5000/doctors', {
        method: 'POST',
        body: formData
    })
    .then(res=>res.json())
    .then(result=>{
        if(result.insertedId){
            setSuccess('doctor added successfully')
        }
    }).catch((error)=>{
        console.log(error)
    })

    e.preventDefault()
}

    return (<div>
        <div style={{display:'block' , height: '800px', margin:'0 auto', display:'flex', justifyContent:'center', }}>
           <form onSubmit={handleSubmit} style={{display:'block' , maxWidth: '1000px', margin:'0 auto'  }} >
          
        <TextField 
          required
          style={{display:'block',width: '75%', marginBottom:"20px" }}
          id="standard-textarea"
          label="Name"
          type="name"
          onChange={e=> setName(e.target.value)}
          placeholder="Name"
          
          variant="standard"
        />
        
          
        <TextField 
          required
          style={{display:'block',width: '75%' , marginBottom:"20px"}}
          id="standard-textarea"
          label="EMail"
          onChange={e=> setEmail(e.target.value)}
          type="email"
          placeholder="email"
         
          variant="standard"
        />


        <Input   onChange={e => setImage(e.target.files[0])} name='image'  style={{display:'block',width: '75%' ,marginBottom:"20px"  }} accept="image/*"   type="file" />
        <Button  variant="contained" type="submit">
            Upload
        </Button>
          
       
           </form>

           
        </div>
        {
            success && <Alert>{success}</Alert>
        }
        </div>
    );
};

export default AddDoctor;