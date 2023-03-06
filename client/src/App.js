import { useState, useEffect } from "react";
import {Routes, Route} from "react-router-dom"
import Login from './components/Login'
import HomeList from './components/HomeList'
import Signup from './components/Signup'
import Navbar from "./components/Navbar";

function App() {
 

  return (
    <div>
        <Navbar/>
          <Routes>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<HomeList/>}/>
          </Routes>
      

    </div>
  );
}

export default App;