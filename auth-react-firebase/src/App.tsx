
import { BrowserRouter as Router, Route, Link, Routes, Outlet } 
from "react-router-dom";

import './App.css';
import React, { useState,useEffect } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';
import firebase from './utilities/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [login,setLogin] = useState(false);

  useEffect(()=>{
    firebase.fbauth.onAuthStateChanged(firebase.auth,user=>{
      if (user === null) {
        setLogin(false);
      } else {
        setLogin(true);
      }
    })
  })
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


