import React from 'react'
import { Link } from 'react-router-dom'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

export default function Register() {
  return (
    <>
      <section className="h-100 bg-light">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4 bg-light">
                <div className="row g-0">
                  <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
                    <img src="https://bootstrapious.com/i/snippets/sn-registeration/illustration.svg" alt="" className="img-fluid mb-3 d-none d-md-block" />
                    <h1>Create an Account</h1>

                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">


                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="form3Example1m" className="form-control form-control-lg" required />
                            <label className="form-label" for="form3Example1m">First name</label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="form3Example1n" className="form-control form-control-lg" required />
                            <label className="form-label" for="form3Example1n">Last name</label>
                          </div>
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="email" id="form3Example97" className="form-control form-control-lg" required />
                        <label className="form-label" for="form3Example97">Email ID</label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="number" id="form3Example97" className="form-control form-control-lg" required />
                        <label className="form-label" for="form3Example97">Phone No.</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example9" className="form-control form-control-lg" />
                        <label className="form-label" for="form3Example9">DOB</label>
                      </div>


                      <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                        <h6 className="mb-0 me-4">Gender: </h6>

                        <div className="form-check form-check-inline mb-0 me-4">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                            value="option1" />
                          <label className="form-check-label" for="femaleGender">Female</label>
                        </div>

                        <div className="form-check form-check-inline mb-0 me-4">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                            value="option2" />
                          <label className="form-check-label" for="maleGender">Male</label>
                        </div>

                        <div className="form-check form-check-inline mb-0">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                            value="option3" />
                          <label className="form-check-label" for="otherGender">Other</label>
                        </div>

                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">

                          <select className="select">
                            <option value="1">State</option>
                            <option value="2">Option 1</option>
                            <option value="3">Option 2</option>
                            <option value="4">Option 3</option>
                          </select>

                        </div>
                        <div className="col-md-6 mb-4">

                          <select className="select">
                            <option value="1">City</option>
                            <option value="2">Option 1</option>
                            <option value="3">Option 2</option>
                            <option value="4">Option 3</option>
                          </select>

                        </div>
                      </div>



                      <div className="form-check d-flex justify-content-center mb-5">
                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                        <label className="form-check-label" for="form2Example3">
                          I agree all statements in <a href="#!">Terms of service</a>
                        </label>
                      </div>
                      <div className="form-group col-lg-12 mx-auto mb-0">
                        <a href="#" className="btn btn-primary btn-block py-2">
                          <span className="font-weight-bold">Create your account</span>
                        </a>
                      </div>


                      <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                    
                        <span className="px-2 small">OR</span>
                        <div className="border-bottom w-100 mr-5"></div>
                      </div>

    

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="googlelogin">
                           Continue with Google
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
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
                          </div>
                        </div>
                      </div>

                      {/* <div className="form-group col-lg-12 mx-auto">
                        <a href="#" className="btn btn-primary btn-block py-2 btn-facebook">
                          <i className="fa fa-facebook-f mr-2"></i>
                          <span className="font-weight-bold"> Continue with Facebook</span>
                        </a>
                        <a href="#" className="btn btn-primary btn-block py-2 btn-google">
                          <i className="fa fa-google mr-2"></i>
                          <span className="font-weight-bold"> Continue with Google</span>
                        </a>
                        <div className="login w-1000">
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
                        </div>
                      </div> */}


                      <div className="text-center py-5 w-100">
                        <p className="text-muted font-weight-bold">Already Registered? < Link to='/login' className="text-primary ml-2">Login</Link></p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
