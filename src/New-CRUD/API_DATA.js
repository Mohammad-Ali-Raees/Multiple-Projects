import React from 'react'
import axios from 'axios';



const Api_Data = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com/posts`
});

export const Get_All_Api_Data = async () => {
   
    console.log(Api_Data());

}
