import React, { useState } from 'react'

const Hideshow = () => {
    let arr = [100,200,300];
    let[GetHide , ShowHide] = useState(null);
    let [CheckValue,SetValue] = useState('') 
    let [GetError,SetError] = useState(null)

    const ClickMe = ()=>{
      //  ShowHide(!GetHide);

       let NewValue = arr.find(elem => elem == Number(CheckValue));
       SetError(NewValue)
    }

  return (

    <>
    <button type='button' onClick={ClickMe} >CLICK ME</button>
   <input type='text' placeholder='Enter Disount Code' onChange={(e)=>{SetValue(e.target.value)}} />

   
    <h3 style={{fontSize:"30px", fontWeight:"600"}}> {GetError && GetError !=null && "Service Avaialble"  }</h3>
    <h3 style={{fontSize:"30px", fontWeight:"600",color:"red"}}> {!GetError && GetError !== null && "Service Not Avaialble"  }</h3>
    


    </>
  )
}

export default Hideshow