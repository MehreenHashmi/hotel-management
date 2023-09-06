import React, { useState } from 'react'
import login from '../assets/login.jpeg';
import { Link } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";


const Login = (props, closeModal) => {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const users = [{ username: "1234", password: "1234" }];
    const handleSubmit = (e) => {
        e.preventDefault()
        const account = users.find((user) => user.username === username);
        if (account && account.password === password) {
            console.log("Correct");
            alert("Login successful");
        }

         else {
            alert("Incorrect username or password");
        }

    };

    return (
        

<section className="vh-100">
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-6 text-black">


        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

          <form >

            <h3 className="fw-normal mb-3 pb-3">Log in</h3>

            <div className="form-outline mb-4">
              <label className="form-label" for="form2Example18">Email address</label>
              <input className='form-control form-control-lg' id="form2Example18"
                    type="text"
                    name="Username"
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" for="form2Example28">Password</label>
              <input className='form-control form-control-lg' id="form2Example28"
                    type="password"
                    name="Password"
                    onChange={(e) => setpassword(e.target.value)}
                />
            </div>

            <div className="pt-1 mb-4">
            <button type="submit" className="btnsub" id="sub" onClick={handleSubmit}>
                  Submit                </button>
               <button type="submit" className="btn" onClick={(e) => {
                   closeModal();
              }}>                  Cancel               </button>
            </div>

            <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p>
            <p>Don't have an account? <Link to='/register' className="link-info">Register here</Link></p>
            <GoogleOAuthProvider clientId="671414036205-kvo4asqlrml64oh5gbu3ckgiakg7hmfq.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={credentialResponse => {
                var decoded = jwt_decode(credentialResponse.credential)
                console.log(decoded);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          </GoogleOAuthProvider> 

          </form>

        </div>

      </div>
      <div className="col-sm-6 px-0 d-none d-sm-block">
        <img src={login}
          alt="Login image" className="w-100 vh-100" />
      </div>
    </div>
  </div>
</section>

        
    )
};




export default Login;



