//import { text } from 'body-parser';
//import {Auth} from 'firebase/auth';
//import { app } from 'firebase-admin';
//import { IdTokenResult, User } from 'firebase/auth';
import React, { useState } from "react";
import { Button, InputGroup, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Login(): JSX.Element {
    
    /*
    const [password,setPassword] = useState<string>('');
    const [email,setEmail] = useState<string>('');


    function handleLoginUser(){

        
        const user = firebase.fbauth.signInWithEmailAndPassword(firebase.auth, email, password).catch(function(error) {

            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);

        });

        alert(JSON.stringify(user));
        

    }
    */


    return(
        <div>
            <Link to="/register">HERE</Link> to register!
        </div>
    )
}

export default Login;

/*
            <Form onSubmit={handleLoginUser}>
                <h2>Login</h2>
                <InputGroup>
                    <InputGroup.Text id='username'>
                        <FormControl onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setEmail(ev.target.value)} placeholder='Username'></FormControl>
                    </InputGroup.Text>  
                    <InputGroup.Text id='password'>
                        <FormControl onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setPassword(ev.target.value)} placeholder='Password'></FormControl>
                    </InputGroup.Text>  
                </InputGroup>
                <Button type='submit' variant='primary'>Login</Button>
                Or click <Link to="/register">HERE</Link> to register!
            </Form>
*/