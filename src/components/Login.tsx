import React, { useState } from "react";
import { Button, Form, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import firebase from "../utilities/firebase";


function Login(): JSX.Element {

    const [password,setPassword] = useState<string>('');
    const [email,setEmail] = useState<string>('');

    function handleLoginUser(){
        firebase.fbauth.signInWithEmailAndPassword(firebase.auth, email, password).catch(function(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
    }

    return(
        <Container>
            <Row>
                <Col className='center-block'>
                    <div className='cards'> 
                        <Container className='cardGuts'>
                        <Form>
                            <h2 className="text-center">Login</h2>

                            <Form.Group>
                                <label className="mb-1">Email</label>
                                <Form.Control onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setEmail(ev.target.value)} placeholder='Email'></Form.Control>
                            </Form.Group>

                            <Form.Group  className="mb-3">
                                <label className="mb-1">Password</label>
                                <Form.Control type="password" onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setPassword(ev.target.value)} placeholder='Password'></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <div  className='col text-center'>
                                    <Button className="mb-2" variant='primary' onClick={handleLoginUser}>Sign In</Button>
                                    <br></br>
                                     Don't have an account? Click <Link to="/register">HERE</Link> to sign up!
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

export default Login;
