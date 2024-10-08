import React from 'react'

const Api_Data = ({title}) => {
console.log(title)


    

    return (



        <div className="container">
         

            <div className='row justify-content-start'>
             
                        <div className='col-md-6'>
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src="..." alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                  
            </div>
        </div>



    )
}

export default Api_Data