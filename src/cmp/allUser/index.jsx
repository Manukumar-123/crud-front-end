import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Stack } from '@mui/system';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { Grid} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {getUser ,deleteData} from '../axios/axios';
import Breadcrumbs from '@mui/material/Breadcrumbs';

const AllUser = () => {
const [data,allData] = useState([]);
const [redirect,setRedirect] = useState(false);

useEffect(()=>{
    getAllUser();
},[]);

const getAllUser = async () => {
    let response = await getUser();
    allData(response.data);
    setRedirect(true);
}

//deleteUser 

const deleteUser = async (id) => {
    await deleteData(id);
   await getAllUser();
}

const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" to="/">
    AddUser
  </Link>,
    <Typography  key="1" color="text.primary">All</Typography>
  ];

    return(
        <>
            <Stack sx={{p:5}}>
                <Breadcrumbs key="1" separator="›" aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>     
            </Stack> 
            <Stack sx={{px:5}}>
                <Grid container spacing={5} sx={{py:5}}>
                {
                    data.map((item,index)=>(
                        <Grid key={index} item xs={12} sm={12} md={6} lg={4}>
                            <Stack 
                                spacing={3}
                                sx={{ 
                                    borderColor:'#4488D1',
                                    mb:5,
                                    borderRadius:'10px',
                                    background:'whiteSmoke'
                                }}
                            >
                                <Stack 
                                    sx={{
                                        height:'150px',
                                        backgroundColor:'#37607D',
                                        borderRadius:'10px',
                                        borderBottomLeftRadius: '40%',
                                        borderBottomRightRadius: '40%',
                                        position:'relative'
                                    }}
                                >
                                    <Stack sx={{position:'absolute',top:'50px',right:'10px'}}>
                                        <IconButton 
                                            component={Link}
                                             to={`/edit/${item._id}`}
                                            >
                                            <EditIcon sx={{color:'white'}} />
                                        </IconButton>
                                    </Stack>

                                    <Stack sx={{position:'absolute',top:'10px',right:'10px'}}>
                                        <IconButton onClick={()=>deleteUser(item._id) }>
                                            <DeleteIcon sx={{color:'white'}} />
                                        </IconButton>
                                    </Stack>

                                    <Stack 
                                        sx={{
                                            width:'80px',
                                            height:'80px',
                                            borderRadius:'50%',
                                            margin:'auto',
                                        }}
                                    >
                                        <Avatar
                                            alt={item.name[0]}
                                            src="wap.png"
                                            sx={{
                                                width:'100%',
                                                height:'100%'
                                            }}
                                        />
                                    </Stack>
                                    <Typography variant="h6" sx={{textAlign:'center',mb:1,color:'white'}}>
                                        {item.firstName}
                                    </Typography>
                                </Stack>
                                
                                <Stack spacing={2} sx={{p:3}}>
                                    <Typography variant="body" sx={{fontFamily:'sans-serif',fontWeight:'bold'}}>
                                            ID NO : 000{index+1}
                                    </Typography>
                                    <Typography variant="body" sx={{fontFamily:'sans-serif',fontWeight:'bold'}}>
                                            NAME : {item.name} 
                                    </Typography>
                                   
                                    <Typography variant="body" sx={{fontFamily:'sans-serif',fontWeight:'bold'}}>
                                            EMAIL : {item.username}
                                    </Typography>
                                    <Typography variant="body" sx={{fontFamily:'sans-serif',fontWeight:'bold'}}>
                                            MOB NO : {item.mobile}
                                    </Typography>
                                    <Typography variant="body" sx={{fontFamily:'sans-serif',fontWeight:'bold'}}>
                                            DOB : {item.dob}
                                    </Typography>
                                </Stack>

                                <Stack>
                                    <Typography 
                                        variant="h5" 
                                        sx={{textAlign:'center', 
                                            fontFamily:'century',
                                            fontWeight:'bold',
                                            color:'#323232'
                                            }}>
                                        Company Name 
                                    </Typography>

                                    <Typography 
                                        variant="h6" 
                                        sx={{textAlign:'center', 
                                            fontFamily:'cursive',
                                            fontWeight:'bold',
                                            color:'#323232',
                                            }}>
                                        Google.com 
                                    </Typography>
                                </Stack>

                                <Stack 
                                    sx={{mb:4,
                                        height:'100px',
                                        backgroundColor:'#37607D',
                                        borderRadius:'10px',
                                        borderTopLeftRadius: '40%',
                                        borderTopRightRadius: '40%'
                                        }}
                                >
                                    <Typography 
                                        variant="body" 
                                        sx={{fontFamily:'sans-serif',
                                        m:'auto',fontWeight:'bold',
                                        color:'#fff'
                                        }}>
                                            THIS IS AN EMPOLYEE CARD 
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                    ))
                }

                </Grid>
            </Stack>
        </>
    )
}
export default AllUser;