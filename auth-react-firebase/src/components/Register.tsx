//import { text } from 'body-parser';
//import {Auth} from 'firebase/auth';
//import { app } from 'firebase-admin';
//import { IdTokenResult, User } from 'firebase/auth';
import React, { useState } from "react";
import {Form,Button, InputGroup, Container, Row, Col, Card} from 'react-bootstrap'
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

        const initailTask = {
            taskName: "My first task!",
            taskDescription: "Make some more tasks",
            taskCreated: new Date().getTime(),
            taskCompleted: "No",
        }
    
        firebase.fbauth.createUserWithEmailAndPassword(firebase.auth,email, password).then(data=>{

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
            navigate('/');
        
              }).catch(function(error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode);
                alert(errorMessage);
            });
            
        }
        
    
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card>
                        <Form>
                            <h2>Register</h2>

                            <Form.Group className="mb-3">
                                <Form.Control onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setEmail(ev.target.value)} placeholder='Email'></Form.Control>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setUsername(ev.target.value)} placeholder='Username'></Form.Control>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setPassword(ev.target.value)} placeholder='Password'></Form.Control>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control  onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setRePassword(ev.target.value)} placeholder='Retype-Password'></Form.Control>
                            </Form.Group>
                            
                            <Form.Group>
                                <Button variant='primary' onClick={handleRegisterUser}>Register</Button>
                                click <Link to="/">HERE</Link> to login!
                            </Form.Group>

                        </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )

    
    }


export default Register;

/*
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







*/