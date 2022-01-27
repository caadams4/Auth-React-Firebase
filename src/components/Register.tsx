import React, { useState } from "react";
import '../App.css';
import {Form,Button, Container, Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import firebase from "../utilities/firebase";

function Register(): JSX.Element {
    
    let navigate = useNavigate();
    
    const [username,setUsername] = useState<string>('');
    const [password,setPassword] = useState<string>('');
    const [email,setEmail] = useState<string>('');
    const [rePassword,setRePassword] = useState<string>('');
        
    function handleRegisterUser() {

        if (password !== rePassword) {
            alert("Passwords do not match!");
            return;
        }

        console.log("creating " + username + "'s account!")

        firebase.fbauth.createUserWithEmailAndPassword(firebase.auth,email, password).catch(function(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode);
            alert(errorMessage);
        });
        
        
        /* --> ** Can be used to push user data to rtdb with above function **

        .then(data=>{

            let uid = data.user.uid;
            let userRef = firebase.rtdb.ref(firebase.db, `/users/${uid}`);

            const initailTask = {
                taskName: "My first task!",
                taskDescription: "Make some more tasks",
                taskCreated: new Date().getTime(),
                taskCompleted: "No",
            }

            const userTemplate = { 
                uid : {
                    username: username,
                    email: email,
                    taskList: [initailTask],
                    friendList: ["tom"],
                } 
            }
    
            firebase.rtdb.set(userRef, userTemplate).then(data=>{console.log(data)}).catch(function(error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
            */

            navigate('/');            
        }
        
    
    return(
        <Container>
            <Row>
                <Col className='center-block'>
                    <div className='cards'>
                        <Container className='cardGuts'>
                        <Form>
                            <h2 className="text-center">Create Account</h2>

                            <Form.Group>
                                <label className="mb-1">Email</label>
                                <Form.Control onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setEmail(ev.target.value)} placeholder='Email'></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <label className="mb-1">Username</label>
                                <Form.Control onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setUsername(ev.target.value)} placeholder='Username'></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <label className="mb-1">Password</label>
                                <Form.Control type="password" onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setPassword(ev.target.value)} placeholder='Password'></Form.Control>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <label className="mb-1">Verify Password</label>
                                <Form.Control type="password" onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setRePassword(ev.target.value)} placeholder='Retype-Password'></Form.Control>
                            </Form.Group>
                            
                            <Form.Group>
                                <div  className='col text-center'>
                                    <Button className="mb-2" variant='primary' onClick={handleRegisterUser}>Create Account</Button>
                                    <br></br>
                                    Already have an account? Click <Link to="/">HERE</Link> to login!
                                </div>
                            </Form.Group>

                        </Form>
                        </Container>
                    </div>
                </Col>
            </Row>
        </Container>
    )

    
    }


export default Register;

