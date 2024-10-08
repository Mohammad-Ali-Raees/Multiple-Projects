
import React from 'react';
import {Link} from 'react-router-dom';
import {UserGlobalContext } from './UserProvider';


let NewTodoList = () => {

    const [get_users, set_Users] = UserGlobalContext()

 
   /*--------------------------------------DELETE USER----------------------------------------*/
   let deleteUser = (id) => {
    let record = get_users.filter(elem => id !== elem.id)
    set_Users(record)
}
    return (
        <div className="container">
            <div className="row justify-content-center ">
                <div className="col-md-8" style={{margin:"20px 0px"}}>
                    <Link to="/addtodo"  className="btn btn-sm btn-warning" style={{margin:"10px 0px"}}>ADD-USER</Link>
                   
                    <table className="table table-striped table-sm ">
                        <thead className="thead-dark">
                            <tr>
                              
                                <th scope="col">Names</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>   

                            </tr>
                        </thead>
                        <tbody>
                            {
                                get_users.map((current) => {
                                    return (
                                        <tr key={current.id}>

                                           
                                            <td>{current.name}</td>
                                            <td><Link to={`/React-New-Crud/newtodolist/view/${current.id}`}  className="btn btn-block btn-sm btn-success">VIEW</Link></td>
                                            <td><Link to={"/React-New-Crud/newtodolist/edittodo/"+current.id}  className="btn btn-block btn-sm btn-warning">EDIT</Link></td>
                                            <td><Link className="btn btn-block btn-danger btn-sm" onClick={() => deleteUser(current.id)}>DELETE</Link></td>

                                        </tr>
                                    )
                                })
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


export default NewTodoList;