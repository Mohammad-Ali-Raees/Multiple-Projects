import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios';
import { InitialState, Reducer } from './Reducer';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SingleProductUI from './SingleProductUI';

const SingleProduct = () => {
  const { id } = useParams();
  const [Quantity, SetQuantity] = useState(1);
  const [Items, SetItems] = useState(JSON.parse(localStorage.getItem('ITEMS')) || [])





  /*----USE REDUCER----*/
  const [state, dispatch] = useReducer(Reducer, InitialState);


  /*----CALL API----*/
  const GetApiData = (data) => {
    axios.get(`${data}`)
      .then(function (response) {
        dispatch({ type: "SingleProductData", payload: response.data })
      })
      .catch(function (error) {

        console.log(error);
      })

  }


  /*----ADD_TO_CART----*/
  const ADD_TO_CART = (e) => {



    const NewCartData = {
      ProductID: state.SingleProduct.id,
      ProductTitle: state.SingleProduct.title,
      ProductDescription: state.SingleProduct.description,
      ProductImage: state.SingleProduct.image,
      ProductQuantity: Quantity,
      ProductPrice: state.SingleProduct.price
    }

    let Exists = Items.find(e => e.ProductID === NewCartData.ProductID)
    if (Exists) {
      toast.error('Item Already In Cart', {
        position: "top-center",
      });

    }
    else {
      toast.success('Item Add In Cart Successfully', {
        position: "top-center",
      });
      dispatch({ type: "ADD_TO_CART", payload: NewCartData })


      //const storedItems = JSON.parse(localStorage.getItem('ITEMS')) || [];

      const NewUpdatedItems = [...Items, NewCartData]
      SetItems(NewUpdatedItems);
      localStorage.setItem('ITEMS', JSON.stringify(NewUpdatedItems));
      console.log(Items);
    }



  }



  /*----Increase Quantity----*/
  const IncreaseQuantity = () => {
    SetQuantity(preval => preval >= 5 ? 5 : preval + 1)

  }

  /*----Decrease Quantity----*/
  const DecreaseQuantity = () => {

    SetQuantity(preval => preval <= 1 ? 1 : preval - 1)

  }



  useEffect(() => {
    GetApiData(`https://fakestoreapi.com/products/${id}`);


    /*--------LOCAL STORAGE CODE--------*/
    

  }, [id, Items])

  return (
    <>
      <SingleProductUI CartButton={ADD_TO_CART} IncreaseQuantity={IncreaseQuantity} DecreaseQuantity={DecreaseQuantity} QuantityValue={Quantity} image={state.SingleProduct.image} title={state.SingleProduct.title} price={state.SingleProduct.price} description={state.SingleProduct.description} />
      <ToastContainer />
    </>

  )
}

export default SingleProduct