import React, { useEffect, useState } from 'react';
import {  useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from './UserProvider';

let EditTodo = () => {


    let [users, setUser] = useContext(UserContext);
    let [name, setName] = useState('');
    let { id } = useParams();
    const navigate = useNavigate();
    console.log(users);



    /*---------------FIND USER AND SHOW VALUE IN INPUT TEXT-----------------*/
    useEffect(() => {
        let UserFind = users.find(elem => elem.id == id);
        setName(UserFind.name)

    }, [])


    /*---------------ONCHANGE INPUT TEXT-----------------*/
    let handle_event = (e) => {
        let value = e.target.value;
        setName(value);
    }


    /*---------------EDIT USER-----------------*/
    let edit = (e) => {
        e.preventDefault();

        // Update the user
        const updatedUsers = users.map(elem => {
            // Check if the user ID matches
            if (elem.id === parseInt(id)) {

                return { ...elem, name };
            }
            return elem
        });

        // Update the users state
        setUser(updatedUsers);
        navigate("/addtodo")
        console.log(updatedUsers);




    }


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6" style={{ border: "1px solid black", margin: "20px 0px" }}>
                    <h1>EDIT DIV</h1>
                    <div className="form-group">

                        <label htmlFor="Name">Name</label>
                        <input type="text" className="form-control" onChange={handle_event} value={name} /><br />
                        <button type="button" className="btn btn-sm btn-success btn-block" onClick={edit}>UPDATE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditTodo;