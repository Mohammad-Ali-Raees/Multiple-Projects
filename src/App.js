import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CounterApp from './Counter/CounterApp';
import Counter1 from './UserReducerApp/Counter1';
import ApiData from './API_DATA/Api_Data';
import Calc from './Counter/Calc';
import ApiCall from './Store/ApiCall';
import Navigation from './Store/Navigation';
import SingleProduct from './Store/SingleProduct';
import Cart from './Store/Cart';
import Hideshow from './Practice/Hideshow';
import { UserProvider } from './API PROVIDER/UserProvider';
import NewTodoList from './API PROVIDER/NewTodoList';
import AddTodo from './API PROVIDER/AddTodo';
import EditTodo from './API PROVIDER/EditTodo';
import Infinite from './Infinite Scroll/Infinite';
import GetData from './New-CRUD/GetData';
import FieldsAdd from './APP FIELDS/FieldsAdd';
const App = () => {
  return (
   
    <Router>
      <Navigation/>
      <UserProvider>
      <Routes>
        <Route path="/counter" element={<CounterApp />} />
        <Route path="/counterNew" element={<Counter1 />} />
        <Route path="/apidata" element={<ApiData />} />
        <Route path="/calc" element={<Calc />} />
        <Route path="/store" element={<ApiCall />} />
        <Route path="/store/singleproduct/:id" element={<SingleProduct/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/prac1" element={<Hideshow />} />
        
       
        <Route path="/newtodo" element={<NewTodoList />} />
        <Route path="/addtodo" element={<AddTodo />} />
        <Route exact path="/addtodo/edittodo/:id" element={<EditTodo />} /> 
        <Route exact path="/Infine" element={<Infinite />} /> 
        <Route exact path="/getdata" element={<GetData />} /> 
        <Route exact path="/appfields" element={<FieldsAdd />} /> 

      </Routes>
      </UserProvider>
    </Router>


  )
}

export default App