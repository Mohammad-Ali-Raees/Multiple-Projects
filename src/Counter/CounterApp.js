import React, { useState } from 'react'
import RightButton from './RightButton';
import LeftButton from './LeftButton';

const CounterApp = () => {

    let [Increase, SetIncrease] = useState(0);

    const IncreaseValue = () => {
       if(Increase >= 10){
        Increase = 9
       }else{
        SetIncrease(Increase + 1)
       }
    }

    const DecreaseValue = () => {
        if(Increase <= 0){
            Increase = 1
        }else{
            SetIncrease(Increase - 1)
        }
           
        
     
    }

    return (
        <div className='container'>
            <div className='row justify-content-center' style={{ margin: "30px 0px" }}>
            <div className="col-md-1"> <LeftButton DecreasebtnValue={DecreaseValue}/></div>
                <div className='col-md-2'>
                   

                        <input class="form-control form-control-sm" type="text" value={Increase} placeholder=".form-control-sm" />
                  
                   
                </div>
                <div className="col-md-1"> <RightButton IncreasebtnValue={IncreaseValue}/></div>
            </div>
        </div>
    )
}

export default CounterApp