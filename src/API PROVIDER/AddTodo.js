import React, { useState } from 'react';
import { UserContext } from './UserProvider';
import { useContext } from 'react';
import {Link } from 'react-router-dom';


let AddTodo = () => {

    const [users, setUsers] = useContext(UserContext);
   // let push = useHistory()
   console.log(users)
    const [name, setName] = useState('');


    let handle_event = (event) => {
        let value = event.target.value;
        setName(value)

    }

    let submit = () => {
        setUsers([...users, { id: Number(new Date().getMilliseconds()), name: name }])
        // push.push('/React-New-Crud/newtodolist')
       
    }
 /*--------------------------------------DELETE USER----------------------------------------*/
 let deleteUser = (id) => {
    let record = users.filter(elem => id !== elem.id)
    setUsers(record)
}

    
    return (
        <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6" style={{ border: "1px solid black", margin: "20px 0px" }}>
                    <h1>ADD TODO</h1>
                    <div className="form-group">
                        {/* <label htmlFor="id">ID</label>
                        <input type="text" className="form-control"   /> */}
                        <label htmlFor="Name">Name</label>
                        <input type="text" className="form-control" onChange={handle_event} value={name} /><br />
                        <button type="submit" className="btn btn-sm btn-success btn-block" onClick={submit}>ADD</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row justify-content-center ">
                <div className="col-md-8" style={{margin:"20px 0px"}}>
                   
                   
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
                        users.map((current) => {
                                    return (
                                        <tr key={current.id}>

                                           
                                            <td>{current.name}</td>
                                            <td><Link to={`/React-New-Crud/newtodolist/view/${current.id}`}  className="btn btn-block btn-sm btn-success">VIEW</Link></td>
                                            <td><Link to={"/addtodo/edittodo/"+current.id}  className="btn btn-block btn-sm btn-warning">EDIT</Link></td>
                                            <td><Link className="btn btn-block btn-danger btn-sm" onClick={() => deleteUser(current.id)} >DELETE</Link></td>

                                        </tr>
                                    )
                                })
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>

</>

    )
}

export default AddTodo;