//import { text } from 'body-parser';
//import {Auth} from 'firebase/auth';
//import { app } from 'firebase-admin';
//import { IdTokenResult, User } from 'firebase/auth';
import React, { useState } from "react";
import { Button, InputGroup, Form, FormControl } from "react-bootstrap";
import { Link } from 'react-router-dom';


function Register(): JSX.Element {

    
    const [username,setUsername] = useState<string>('');
    const [password,setPassword] = useState<string>('');
    const [email,setEmail] = useState<string>('');
    const [rePassword,setRePassword] = useState<string>('');

        
    function handleRegisterUser() {
        /*
        let auth = firebase.auth;

        if (password !== rePassword) {
            alert("Passwords do not match!");
            return;
        }

        const initailTask = {
            taskName: "My first task!",
            taskDescription: "Make some more tasks",
            taskCreated: new Date().getTime(),
            taskCompleted: "No",
        }

        alert("1")
    
        firebase.fbauth.createUserWithEmailAndPassword(auth,email, password).then(data=>{

            alert("2")

            let uid = data.user.uid;
            let userRef = firebase.rtdb.ref(firebase.db, `/users/${uid}`);

            const userTemplate = { 
                uid : {
                    username: username,
                    email: email,
                    taskList: [initailTask],
                    friendList: ["tom"],
                } 
            }

            alert(JSON.stringify(userTemplate));
    
            firebase.rtdb.set(userRef, userTemplate).then(data=>{console.log(data)}).catch(function(error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
        
              }).catch(function(error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode);
                alert(errorMessage);
            });

            firebase.createUser(email,password,username);
            

            
            
        }
        
    
    return(
        <div>
            <Form onSubmit={handleRegisterUser}>
                <h2>Register</h2>
                    <InputGroup>
                        <InputGroup.Text id='email'>
                        <FormControl onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setEmail(ev.target.value)} placeholder='Email'></FormControl>
                        </InputGroup.Text>
                        <InputGroup.Text id='username'>
                        <FormControl onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setUsername(ev.target.value)} placeholder='Username'></FormControl>
                        </InputGroup.Text>  
                        <InputGroup.Text id='password'>
                            <FormControl onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setPassword(ev.target.value)} placeholder='Password'></FormControl>
                        </InputGroup.Text>  
                        <InputGroup.Text id='rePassword'>
                            <FormControl onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setRePassword(ev.target.value)} placeholder='Retype-Password'></FormControl>
                        </InputGroup.Text>  
                    </InputGroup>
                    <Button type='submit' variant='primary'>Register</Button>
                    Or click <Link to="/login">HERE</Link> to login!
            </Form>
        </div>
    )

    */
    }

    return(
        <div>

                    Or click <Link to="/">HERE</Link> to login!

        </div>
    )

}

export default Register;