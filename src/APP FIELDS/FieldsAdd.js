import React, { useEffect, useState } from 'react'

const FieldsAdd = () => {

    const [INPUT, SET_INPUT] = useState([]);

    // Function to add a new input field
    const ADD_INPUT = () => {
        const NewInput = { 
            ID: new Date().getMilliseconds(), // Unique ID for each input
            type: "text", 
            className: 'form-control mt-2', 
            value: "" // Initial value
        };
        SET_INPUT([...INPUT, NewInput]);
    };

    // Function to handle input change
    const HandleEvent = (e, id) => {
        const updatedInputs = INPUT.map(input => {
            if (input.ID === id) {
                return { ...input, value: e.target.value }; // Update the input value for the matching ID
            }
            return input;
        });
        SET_INPUT(updatedInputs); // Update the state with new values
        console.log(updatedInputs);
    };

    useEffect(() => {
        // Any side effects related to INPUT change can be added here
    }, [INPUT]);

    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className='col-md-6 mt-3'>
                    <input type='text' className='form-control' />
                    {
                        INPUT.map(e => (
                            <div key={e.ID}>
                                <input 
                                    type={e.type} 
                                    className={e.className} 
                                    value={e.value} 
                                    onChange={(event) => HandleEvent(event, e.ID)} // Pass the input ID and event
                                />
                            </div>
                        ))
                    }
                    <button className='btn btn-light mt-2' onClick={ADD_INPUT}>ADD</button>
                </div>
            </div>
        </div>
    )
}

export default FieldsAdd;
