import { useState, useEffect } from "react";
import {Routes, Route} from "react-router-dom"
import Login from './components/Login'
import HomeList from './components/HomeList'
import Signup from './components/Signup'
import Navbar from "./components/Navbar";

function App() {
 

  return (
    <div>
      <Routes>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<HomeList/>}/>
      </Routes>
      
     <Navbar/>
    </div>
  );
}

export default App;