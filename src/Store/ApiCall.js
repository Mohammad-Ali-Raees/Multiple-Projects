import React, { useEffect, useReducer } from 'react'
import axios from 'axios';
import { Reducer, InitialState } from './Reducer';
import Products from './Products';
import Pagination from './Pagination';
const ApiCall = () => {


    const [state, dispatch] = useReducer(Reducer, InitialState);
    

    const GetApiData = (data, ShowMore) => {
        axios.get(`${data}?limit=${ShowMore}`)
            .then(function (response) {
             //   console.log(response.data)
                dispatch({ type: "API_CALL", payload: response.data })

            })
            .catch(function (error) {

                console.log(error);
            })

    }

    const ShowProducts = () => {
        dispatch({ type: "ShowMoreProducts" })
    }

    useEffect(() => {
        GetApiData(`https://fakestoreapi.com/products`, !state.ShowMoreProduct ? 8 : state.ShowMoreProduct)

       
    }, [state.ShowMoreProduct])

    return (
        <div className='container text-center'>
            <div className='row aligin-items-center  '>
                {
                    state.StoreData.map((elem) => {
                        return (

                            <Products key={elem.id} Product_id={elem.id} Title={elem.title} Price={elem.price} Description={elem.description} Image={elem.image} />


                        )
                    })
                }
                <Pagination ClickMe={ShowProducts} />
            </div>

        </div>


    )
}

export default ApiCall