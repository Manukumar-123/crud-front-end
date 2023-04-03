import axios from 'axios';
const url = 'http://localhost:8000';

export const addUser = async (data) => {
    try{
       return await axios.post(`${url}/add`,data)
    }
    catch(error)
    {
        console.log('error while calling adduser',error)
    }
}

export const getUser = async () => {
    try{
        return await axios.get(`${url}/all`)
    }catch(error){
        console.log('error while getting all data',error);
    }
}

export const getUserById = async (id) =>{
    try{
        return await axios.get(`${url}/${id}`);

    }catch(error){
        console.log('error while calling getuserbyid api',error);
    }
}

export const editUser = async (user,id) => {
    try{
        return await axios.put(`${url}/${id}`,user)
    }catch(error){
        console.log('error while calling edit user api',error)
    }
}

export const deleteData = async (id) => {
    try{
        return await axios.delete(`${url}/${id}`)
    }catch(error){
        console.log('error while calling deleteData api',error)
    }
}