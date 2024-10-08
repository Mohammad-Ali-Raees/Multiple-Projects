import React from 'react'
import { useEffect,useState } from 'react';
import { SlBag } from "react-icons/sl";
import {Link}  from "react-router-dom";
const Navigation = () => {
    let [GetData , SetData] = useState(JSON.parse(localStorage.getItem("ITEMS"))|| []);
     
    useEffect(()=>{

    },[GetData])
    
    return (
        <nav className="navbar navbar-expand-lg bg-dark p-3">
            <div className="container">
                <a className="navbar-brand text-light fs-4" to="/store">OUTLOOKS</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li> */}
                        
                        <li className="nav-item ">
                        <Link to="http://localhost:3000/cart" className='text-decoration-none'><SlBag color='white' size="25"/><span className='fs-5 text-white fw-bold'>{!GetData.length ? "0" : GetData.length}  </span></Link>
                        </li>
                    </ul>
                   
                </div>
            </div>
        </nav>


    )
}

export default Navigation