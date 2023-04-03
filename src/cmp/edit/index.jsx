import { Button, Stack, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { editUser ,getUserById  } from '../axios/axios';
import { useNavigate } from "react-router-dom";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {Link} from 'react-router-dom';

const EditUser = () => {
const navigate = useNavigate();

const userData = {
    name : '',
    username: '',
    dob :'',
    mobile : ''
}

const [user,setUser] = useState(userData);
const storeData = (e) =>{
    const key = e.target.name;
    setUser({...user,[key]:e.target.value});
}

// get data by id
const {id} = useParams();

const sendEditData = async () => {
   await editUser(user,id);
    navigate('/all')
}

useEffect(()=>{
    loadUserDetails();
},[]);

const loadUserDetails = async () => {
    const response = await getUserById(id);
    setUser(response.data);
}

const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" to="/">
      AddUser
    </Link>,
    <Typography key="2" color="text.primary">Edit</Typography>
  ];
    return(
        <>
        <Stack sx={{p:5}}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                {breadcrumbs}
            </Breadcrumbs>
            </Stack>
         <Stack sx={{p:5}} alignItems="center" spacing={3}>
            <Typography variant="h4">Edit User</Typography>
            <Stack spacing={3} sx={{width:{xs:'100%', sm:'100%', md:'40%', lg:'40%'}}}>
            <TextField name="name" label="Name" variant="outlined" onChange={ (e)=> storeData(e) } value={user.name} />
            <TextField name="username" label="Username" variant="outlined" onChange={ (e)=> storeData(e) } value={user.username} />
            <TextField name="dob" type='date' variant="outlined" onChange={ (e)=> storeData(e) } value={user.dob} />
            <TextField name="mobile" type="number" label="Phone No" variant="outlined" onChange={ (e)=> storeData(e) } value={user.mobile} />
            <Box>
                <Button variant="outlined" onClick={sendEditData}>
                    Edit
                </Button>
            </Box>
            </Stack>
         </Stack>
        </>
    );
}

export default EditUser;