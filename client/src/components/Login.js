import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
} from 'mdb-react-ui-kit';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [user, setUser] = useState([]);

  const handleLogin = async (e) => {
    e.preventDefault();
      fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
      })
      .then(res => {
      if(res.ok){
        res.json().then(setUser)
      } else {
        //Display errors
        res.json().then(data => setErrors(data.errors))
      }
    }) 
      
  }
    //   .then(response => response.json())
    //   .then((data) => {
    //     if (data.errors) {
    //       setErrors(data.errors);
    //     } else {
    //       setUser(data);
    //     }
    // } )  }


  return (

  
    <div className="login-page">


    errors.map((error) => {
       return <p>{error}</p>
    })

      <MDBContainer fluid className="p-3 my-5 h-custom login-form">
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </MDBCol>
          <MDBCol col="4" md="6">
            <form onSubmit={handleLogin}>
              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="text-center text-md-start mt-4 pt-2">
                <MDBBtn className="mb-0 px-5" size="lg" type="submit">
                  Login
                </MDBBtn>
                <p className="small fw-bold mt-2 pt-1 mb-2">
                  Don't have an account?{' '}
                  <a href="#!" className="link-danger">
                    Register
                  </a>
                </p>
              </div>
            </form>
   
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Login;