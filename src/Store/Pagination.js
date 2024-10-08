import React from 'react'

const Pagination = ({ClickMe}) => {
    return (
        <div className='justify-content-center mt-4 mb-4'>
            <button type="button" onClick={ClickMe} class="btn btn-primary" style={{ width: "20%" }}>Show More Products</button>
        </div>


    )
}

export default Pagination