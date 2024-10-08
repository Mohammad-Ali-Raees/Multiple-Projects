import React, { useEffect, useRef } from 'react'
import { useReducer } from 'react';

const Calc = () => {
    let buttons = ["1", "2", "3", "4", "5", "+", "-", "=", "C"]

    let colorRef = useRef();

    let InitialState = {
        calculator: ""
    }

    let reducer = (state, action) => {
        console.log(state);
        switch (action.type) {
            case "TypeValue":
                return {
                    ...state,
                    calculator: action.payload
                }
            case "Calculate_Result":
                return {
                    ...state,
                    calculator: eval(action.payload)
                }
            case "ClearAll":
                return {

                    calculator: ""
                }
            default:
                return state;
        }

    }
    const [state, dispatch] = useReducer(reducer, InitialState)


    const clickMe = (e) => {
        let btnValue = e.target.name
        if (btnValue === "=") {
            dispatch({ type: "Calculate_Result", payload: state.calculator })
        }
        else if (btnValue === "C") {
            dispatch({ type: "ClearAll" })
        } else {
            let result = state.calculator + btnValue;
            dispatch({ type: "TypeValue", payload: result });
        }


    }

    useEffect(() => {
        if (colorRef.current.name === "C") {
            colorRef.current.style.backgroundColor = 'red';
        }
    })

    return (
        <>
            <input type='text' className='form-control' readOnly value={state.calculator} style={{ width: "300px" }} />
            {
                buttons.map((btn, index) => {
                    return (
                        <div key={index} style={{ display: "flex", flexDirection: "row" }}>
                            <button ref={colorRef} style={{ margin: "10px" }} className='btn btn-info' onClick={clickMe} name={btn}>{btn}</button>
                        </div>
                    )
                })
            }

        </>
    )
}

export default Calc