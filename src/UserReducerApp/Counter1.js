import React, { useReducer } from 'react'

import { reducer } from './Reducer';
import Api_Data from '../API_DATA/Api_Data';

const Counter1 = () => {

    let InitialState = {
        API_DATA:[],
        counter: 0
    }



    let [state, dispatch] = useReducer(reducer, InitialState);


    let Decreament = () => {
        dispatch({ type: "Decreament_Value" })
    }


    let Get_Api_Data = () => {
       if(state.API_DATA.length === 0)
        
        GetApiData()


    }
    let GetApiData = async()=>{
        let data = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
        let res = await data.json()
        dispatch({type:"CAll_API",payload:res})
    }



    return (
        <>
        <button className='btn btn-sm btn-info' onClick={Get_Api_Data}>Fetch API DATA</button>
        {
            state.API_DATA.map((elem)=>{
                return(
                    <Api_Data title={elem.title}/>
                )
            })
        }
            <button className='btn btn-sm btn-success' onClick={() => { dispatch({ type: "Increament_Value" }) }}>PLUS+</button>
            <h3>{state.counter}</h3>
            <button className='btn btn-sm btn-danger' onClick={Decreament}>MINUS-</button>
        </>
    )
}

export default Counter1