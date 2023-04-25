import React, { useRef, useState } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';


export const Signup = () => {
    const navigate = useNavigate();
    const emailRef  = useRef();
    const paswordRef  = useRef();
    const confirmPaswordRef  = useRef();
    const {signup} = useAuth()
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e){
        console.log("Handle submit clicked");
        e.preventDefault();
        
        if(paswordRef.current.value !== confirmPaswordRef.current.value){
            return setError("Passwords did not match");
        }
        setLoading(true);
        try {
            setError('')
            
            await signup(emailRef.current.value, paswordRef.current.value);
            navigate('/', {replace: true});
        } catch (error) {
            setError(error);
        }
        console.log("Handle submit Ended");
        setLoading(false);
       
    }
    
  return (
    <div className="w-100 justify-content-center" style={{maxWidth: '400px', border: '0px solid red'}} >
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4' >Sign up</h2>
                {error && <Alert variant='danger' >{JSON.stringify(error)}</Alert>}
                <Form onSubmit={handleSubmit} >
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' required ref={emailRef}></Form.Control>
                    </Form.Group>
 
                    <Form.Group id='pasword'>
                        <Form.Label>Pasword</Form.Label>
                        <Form.Control type='pasword' required ref={paswordRef}></Form.Control>
                    </Form.Group>
 
                    <Form.Group id='confirmpassword'>
                        <Form.Label>Confirm Pasword</Form.Label>
                        <Form.Control type='pasword' required ref={confirmPaswordRef}></Form.Control>
                    </Form.Group>
                    <Button  disabled={loading} className='w-100 m-10 mt-2'  type='submit' >Sign up</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2' >
            Already have an account? <Link to='/login' >Log In</Link>
        </div>
    </div>
  )
}
