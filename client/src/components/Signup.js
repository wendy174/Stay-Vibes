import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon
} from 'mdb-react-ui-kit';
import './Signup.css';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
  
    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password}),
      });
  
      if (response.ok) {
        navigate('/login');
      } else {
        alert('Signup failed. Please try again later.');
      }
    } catch (error) {
      alert(`An error occurred: ${error.message}`);
    }
  }


  return (
    <MDBContainer fluid className='signup-page'>
      <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md='10'
              lg='6'
              className='order-2 order-lg-1 d-flex flex-column align-items-center'
            >
              <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>
                Sign up
              </p>

              <div className='d-flex flex-row align-items-center mb-4 '>
                <MDBIcon fas icon='user me-3' size='lg' />
                <MDBInput
                  label='Your Name'
                  id='form1'
                  type='text'
                  className='w-100'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className='d-flex flex-row align-items-center mb-4'>
                <MDBIcon fas icon='envelope me-3' size='lg' />
                <MDBInput
                  label='Your Email'
                  id='form2'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className='d-flex flex-row align-items-center mb-4'>
                <MDBIcon fas icon='lock me-3' size='lg' />
                <MDBInput
                  label='Password'
                  id='form3'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <MDBBtn className='mb-4' size='lg' onSubmit={handleSubmit}>Register</MDBBtn>   
            </MDBCol>
            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>
            
          </MDBRow>
        </MDBCardBody>
      </MDBCard>



      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        rel="stylesheet"
        />
      <link
        href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
        rel="stylesheet"
        />

    </MDBContainer>
  );
}

export default Signup;