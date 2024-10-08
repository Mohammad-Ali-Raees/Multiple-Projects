import { ActionTypes } from "./ActionTypes";

export const InitialState = {
    StoreData: [],
    ShowMoreProduct: 8,
    SingleProduct: [],
    CartData: [],
    CartItems:[]
}

export const Reducer = (state, action) => {
    
    switch (action.type) {
        case ActionTypes.API_CALL:
            return {
                ...state,
                StoreData: action.payload
            }
        case ActionTypes.ShowMoreProducts:
            return {
                ...state,
                ShowMoreProduct: state.ShowMoreProduct + 4
            }

        case ActionTypes.SingleProductData:
            return {
                ...state,
                SingleProduct: action.payload
            }

        case ActionTypes.ADD_TO_CART:
            // Check if item already exists in cart

            const itemExists = state.CartData.some(item => item.ProductID === action.payload.ProductID);

            if (itemExists) {
                // Handle item already exists scenario
                return state; // Do not change the state
            }

            return {
                ...state,
                CartData: [...state.CartData, action.payload] // Append new item to existing cart data
            };




        default:
            return state;
    }
}