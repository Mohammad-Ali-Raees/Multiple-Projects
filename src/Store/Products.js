import React from 'react'
import { Link } from "react-router-dom";


const Products = ({ Title, Image, Product_id, Description, Price }) => {

    return (


        <div className='col-md-6 col-lg-3 col-12 gy-3 px-2 ' >
            <div className="card p-3">
                <img src={Image} style={{ aspectRatio: "2/3", objectFit: "contain" }} className="card-img-top object-fit-cover" alt="..." />
                <div className="card-body d-flex flex-column justify-content-end ">
                    <h6 className="card-title display-6 fs-2">{Title.slice(0, 12)}</h6>
                    <p className="card-text">{Description.slice(0, 80)}</p>
                    <div className="d-grid gap-2">
                        <Link to={`/store/singleproduct/${Product_id}`} className="btn btn-dark p-2 br-0 fs-5 fw-semibold" >${Math.floor(Price)}</Link>


                    </div>

                </div>
            </div>
        </div>



    )
}

export default Products;