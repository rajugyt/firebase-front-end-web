import React from 'react';
import { Button, Card, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const Dashboard = () => {
  const navigate = useNavigate();
  const {currentUser, logout} = useAuth();

  async function logoutHandler(){
    try {
      await logout();
      navigate('/login', {replace: true});
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="w-100 justify-content-center" style={{maxWidth: '400px', border: '0px solid red'}} >
     <Navbar></Navbar>
      <Card>
        <Card.Body>
          <h2 className='text-center' >Profile</h2>
          <strong>Email:</strong> {currentUser.email}
        </Card.Body>
      </Card>
      <div className='w-100 text-center pt-4'  >
      <Button type='submit' onClick={logoutHandler} > Logout</Button>
      </div>
    </div>
  )
}
