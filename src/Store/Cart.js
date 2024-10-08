import React, { useEffect, useReducer, useState } from 'react';
import { InitialState, Reducer } from './Reducer';

const Cart = () => {
    const [state, dispatch] = useReducer(Reducer, InitialState);
    const [cartData, setCartData] = useState(JSON.parse(localStorage.getItem("ITEMS")) || []);
    const [totalPrice, setTotalPrice] = useState(0);

    // Function to calculate total price
    const calculateTotalPrice = () => {
        const total = cartData.reduce((acc, elem) => acc + elem.ProductPrice, 0)
        setTotalPrice(total);
    };

    // Increase quantity and update price
    const increaseQuantity = (productId) => {
        const updatedCart = cartData.map(item => {
            if (item.ProductID === productId) {
                item.ProductQuantity += 1;
                item.ProductPrice = item.ProductPrice * item.ProductQuantity;
            }
            return item;
        });
        setCartData(updatedCart);
        localStorage.setItem("ITEMS", JSON.stringify(updatedCart));
        calculateTotalPrice();
    };

    // Decrease quantity and update price
    const decreaseQuantity = (productId) => {
        const updatedCart = cartData.map(item => {
            if (item.ProductID === productId && item.ProductQuantity > 1) {
                item.ProductQuantity -= 1;
                let NewPrice = (item.ProductPrice / (item.ProductQuantity + 1))
                item.ProductPrice = NewPrice * item.ProductQuantity;
            }
            return item;
        });
        setCartData(updatedCart);
        localStorage.setItem("ITEMS", JSON.stringify(updatedCart));
        calculateTotalPrice();
    };


    const deleteItem = (e) => {
        const updatedData = cartData.filter(item => item.ProductID !== e);

        // Update the state with the filtered data
        setCartData(updatedData);

        // Update localStorage with the new cart data
        localStorage.setItem("ITEMS", JSON.stringify(updatedData));

        // Optionally, recalculate the total price if needed
        calculateTotalPrice();

    }

    // Calculate total price when cart data changes
    useEffect(() => {
        calculateTotalPrice();
    }, [cartData]);

    return (
        <div className='container mt-5'>
            {
                cartData.length == 0 ? <h2 className='d-flex justify-content-center'>Cart Is Currently Emplty</h2> : <div className='row'>
                    <div className='col-md-12'>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Option</th>
                                    <th scope="col" className='d-none'>ID</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartData.map((item) => (
                                    <tr key={item.ProductID}>
                                        <td>
                                            <button type='button' className='btn btn-danger' onClick={() => { deleteItem(item.ProductID) }}>X</button>
                                        </td>
                                        <td className='d-none'>{item.ProductID}</td>
                                        <td>
                                            <img style={{ width: "100px", height: "100px" }} src={item.ProductImage} alt={item.ProductTitle} />
                                        </td>
                                        <td>{item.ProductTitle}</td>
                                        <td>{item.ProductDescription.slice(0, 250)}</td>
                                        <td>
                                            <div className="mb-3" style={{ width: "120px" }}>
                                                <label htmlFor="quantity" className="form-label">Quantity</label>
                                                <div className="input-group">
                                                    <button className="btn btn-danger" type="button" onClick={() => decreaseQuantity(item.ProductID)}> - </button>
                                                    <input type="number" className="form-control text-center" readOnly value={item.ProductQuantity} />
                                                    <button className="btn btn-success" type="button" onClick={() => increaseQuantity(item.ProductID)}> + </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{Math.floor(item.ProductPrice)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='col-md-6'></div>
                    <div className='col-md-6'>
                        <h4>Cart Total</h4>
                        <table className="table table-bordered">
                            <tbody>
                                <tr className='p-3'>
                                    <td className='pt-3 pb-3'>SubTotal</td>
                                    <td>{totalPrice.toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td className='pt-3 pb-3'>Total</td>
                                    <td>{totalPrice.toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </div>
    );
};

export default Cart;
