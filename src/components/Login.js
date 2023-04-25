import React, { useRef, useState } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const Login = () => {
    const navigate = useNavigate();
    const emailRef  = useRef();
    const paswordRef  = useRef();
    const {login, signInWithGoogle, signInWithMicrosoft} = useAuth()
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e){
        console.log("Handle submit clicked");
        e.preventDefault();

        setLoading(true);
        try {
            setError('')
            
            await login(emailRef.current.value, paswordRef.current.value);
            navigate('/', {replace: true});
        } catch (error) {
            setError(error);
        }
        console.log("Handle submit Ended");
        setLoading(false);
       
    }

    async function handleGoogleLogin(e){
        console.log("Handle submit clicked");
        e.preventDefault();

        setLoading(true);
        try {
            setError('')
            
            await signInWithGoogle()
            navigate('/', {replace: true});
        } catch (error) {
            setError(error);
        }
        console.log("Handle submit Ended");
        setLoading(false);
       
    }

    async function handleMicrosoftLogin(e){
        console.log("Handle submit clicked");
        e.preventDefault();

        setLoading(true);
        try {
            setError('')
            
            await signInWithMicrosoft()
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
                <h2 className='text-center mb-4' >Login</h2>
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
 
                    <Button  disabled={loading} className='w-100 m-10 mt-2'  type='submit' >Login</Button>
                </Form>
                <p>OR</p>
                <MicrosoftLoginButton onClick={handleMicrosoftLogin} />
                <GoogleLoginButton onClick={handleGoogleLogin} className='mt-4'  />

            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2' >
            Dont have an account? <Link to='/signup' >Sign up</Link>
        </div>
    </div>
  )
}
