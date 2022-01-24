
import { BrowserRouter as Router, Route, Link, Routes, Outlet} 
from "react-router-dom";

import './App.css';
import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';


function App() {

  const [login,setLogin] = useState<boolean>(false)

  
    //todo - create custom auth object with multiple states 


    //todo - create offshore authenication handler

    //todo - create firebase file in a utilities folder

    //todo - rollover n cry

    if (login === true) {

      return (
            <Routes>
              <Route path="/" element={<HomePage />}/>
            </Routes>
      )
    
    } else {

      return (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
      )
    
    }

}

export default App;


