import React from 'react'
import { Get_All_Api_Data } from "./API_DATA";

const GetData = () => {
    const GetAllData = async () => {
      const res = await Get_All_Api_Data();
    }
  
    return (
        <div>GetData</div>
    )
}

export default GetData