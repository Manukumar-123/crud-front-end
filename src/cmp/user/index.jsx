import * as yup from 'yup';
import { Button, Stack, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { addUser } from '../axios/axios';
import { useNavigate } from "react-router-dom";

const User = () => {
const navigate = useNavigate();
const [isDisabled,setDisabled] = useState(true)
const userData = {
    name : '',
    username: '',
    dob:'',
    mobile : ''
}

const [user,setUser] = useState(userData);
const [error,setError] = useState({
    name: {
        state:false,
        message:''
    },
    username: {
        state:false,
        message:''
    },
    dob: {
        state:false,
        message:''
    },
    mobile: {
        state:false,
        message:''
    }


})
const storeData = (e) =>{
const key = e.target.name;
    setUser({
        ...user,
        [key]:e.target.value
    });

}
const Schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    username: yup.string().email('Invalid email').required('Email is required'),
    dob: yup.date().required('Date of birth is required'),
    mobile: yup.string().matches(/^[0-9]{9}$/, 'Invalid phone number').required('Phone number is required'),
})

const validateInput = async (e) => {
    const key = e.target.name;
    try{
        await Schema.validateAt(key,user);
        return setError((oldData)=>{
            return {
                ...oldData,
                [key] : {
                    state:false,
                    message:''
                }
            }
        });
    }
    catch(err){
            let message = err.errors[0]; 
        return setError((oldData)=>{
            return {
                ...oldData,
                [key] : {
                    state:true,
                    message:message
                }
            }
        })
    }
}
const validateSubmit = async () =>{
    const isValid = await Schema.isValid(user);
    setDisabled(!isValid)
}


const sendData = async () => {
   await addUser(user);
   navigate('/all')
}
    return(
        <>       
         <Stack sx={{p:5, mt:5}} alignItems="center" spacing={3}>
            <Typography variant="h4">Add User</Typography>
            <Stack spacing={3} sx={{width:{xs:'100%', sm:'100%', md:'40%', lg:'40%'}}}>
                <TextField 
                    autoComplete="off" 
                    name="name" 
                    value={user.name} 
                    label="Name" 
                    variant="outlined" 
                    error={error.name.state}
                    helperText={error.name.message}
                    onKeyDown={validateSubmit}
                    onInput={validateInput}
                    onChange={ (e)=> storeData(e)} 
                />
                <TextField 
                    name="username" 
                    label="Username" 
                    value={user.username}
                    variant="outlined" 
                    error={error.username.state}
                    helperText={error.username.message}
                    onKeyDown={validateSubmit}
                    onInput={validateInput}
                    onChange={ (e)=> storeData(e) } 
                />
                <TextField 
                    name="dob" 
                    type="date"  
                    variant="outlined" 
                    error={error.dob.state}
                    helperText={error.dob.message}
                    value={user.dob} 
                    onKeyDown={validateSubmit}
                    onInput={validateInput}
                    onChange={ (e)=> storeData(e) }
                />
                <TextField 
                    name="mobile" 
                    type="number" 
                    label="Phone No" 
                    error={error.mobile.state}
                    helperText={error.mobile.message}
                    value={user.mobile} 
                    variant="outlined" 
                    onKeyDown={validateSubmit}
                    onInput={validateInput}
                    onChange={ (e)=> storeData(e) } 
                />
            <Box>
                <Button variant="contained" disabled={isDisabled} onClick={sendData}>
                    Submit
                </Button>
            </Box>
            </Stack>
         </Stack>
        </>
    );
}

export default User;