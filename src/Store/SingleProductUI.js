import React from 'react'

const SingleProductUI = ({image,title,description,price,CartButton,QuantityValue,IncreaseQuantity,DecreaseQuantity}) => {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Product Image */}
        <div className="col-md-6">
          <img src={image} style={{ aspectRatio: "3/3", objectFit: "contain" }} alt="Product" className="img-fluid" />  </div>

        {/* Product Details */}
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <div>
            <h2>{title}</h2>
            <p className="fs-4 text-info">${Math.floor(price)}</p>
            <p className="text-muted">
              {description}
            </p>
          </div>

          <div className="mb-3" style={{ width: "120px" }}>
            <label htmlFor="quantity" className="form-label">Quantity</label>
            <div className="input-group">
              <button className="btn btn-danger" type="button" onClick={DecreaseQuantity}  > - </button>
              <input type="number" className="form-control text-center" readOnly value={QuantityValue}  />
              <button className="btn btn-success" type="button" onClick={IncreaseQuantity}> + </button>
            </div>
          </div>

          <button className="btn btn-dark p-2" onClick={CartButton}> Add to Cart </button>
        </div>
      </div>
    </div>
  )
}

export default SingleProductUI