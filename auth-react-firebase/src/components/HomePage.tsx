//import { text } from 'body-parser';
//import {Auth} from 'firebase/auth';
//import { app } from 'firebase-admin';
//import { IdTokenResult, User } from 'firebase/auth';
import React from "react";
import firebase from "../utilities/firebase";
import { Button } from 'react-bootstrap';

function HomePage(): JSX.Element {

    //{login,setLogin}:{login:boolean,setLogin:(b:boolean)=>void}

    function handleSignout() {

        firebase.fbauth.signOut(firebase.auth);

    }

    return (
        <div>
            <h1>Hi, there!</h1>
            <Button onClick={handleSignout}>Sign Out</Button>
        </div>
    )
}

export default HomePage;