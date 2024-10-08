import React, { useEffect, useState } from 'react'
import "../CSS/MyNewCss.css";
const Infinite = () => {


    let [Counter, SetCounter] = useState(10);
    let [GetApidata, SetApidata] = useState([])
    let [loading, SetLoading] = useState(true)


    /*--GET API FETCH DATA--*/

    let GetAllData = async () => {
        let data = await fetch(`https://jsonplaceholder.typicode.com/posts/?_limit=${Counter}`);
        let response = await data.json();
        SetApidata(response);
        console.log(response)
        SetLoading(false);

    }

     /*-- FETCH DATA--*/
    useEffect(() => {
        GetAllData()

    }, [Counter])

 /*--WHEN SCREEN SIZE IS GREATER THAN PLUS COUNTER AND FETCH NEW POSTS--*/
    async function ScrollFunction() {
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight) {
            SetCounter(prev => prev + 10)
        }
    }

 /*--SCROLL FUNCTION WITH CLEANUP--*/
    useEffect(() => {
        window.addEventListener("scroll", ScrollFunction)
        return () => window.removeEventListener("scroll", ScrollFunction)
    }, [])

    return (
        <div className='containers' >

            {
                loading ? (
                    <h3 style={{ color: 'white', fontSize: '20px', fontWeight: '600', margin: '20px 0px', position: "absolute", left: "50%", top: "50%" }}>Loading ...</h3>
                ) : GetApidata.map((elem) => {
                    return (

                        <div key={elem.id} className='box'>
                            <h3>{elem.id}</h3>
                            <h6>{elem.title}</h6>
                        </div>



                    )
                })
            }

        </div >
    )
}

export default Infinite