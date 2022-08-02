import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';
import firebase from './utilities/firebase';
//import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    firebase.fbauth.onAuthStateChanged(firebase.auth, user => {
      console.log(login)
      if (user === null) {
        setLogin(false);
      } else {
        setLogin(true);
      }
    })
  });
  


  
    if (login === true) {
      return (
        <div className="body">
          <Routes>
            <Route path="/Auth-React-Firebase" element={<HomePage />}/>
          </Routes>
        </div>
    )
    } else {
    return (
      <div className="body">
        <Routes>
          <Route path="/Auth-React-Firebase" element={<Login />} />
          <Route path="/Auth-React-Firebase/register" element={<Register />} />
        </Routes>
      </div>
    )
  }
  
  
}


export default App;


