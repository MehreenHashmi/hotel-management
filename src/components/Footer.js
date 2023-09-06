import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
 <footer className="footer">
    <div className="container py-8">
      <div className="row py-4">
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 footer-text"><h2>Hotels</h2>
          <p className="font-italic  footer-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
          <ul className="list-inline mt-4">
            <li className="list-inline-item"><a href="#" target="_blank" title="twitter"><i className="fa fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="facebook"><i className="fa fa-facebook"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="instagram"><i className="fa fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="pinterest"><i className="fa fa-pinterest"></i></a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4 footer-text" >Quick Links</h6>
          <ul className="list-unstyled mb-0">
            <li className="mb-2"><Link to="/" className=" footer-text">Home</Link></li>
            <li className="mb-2"><Link to="/about" className=" footer-text">About</Link></li>
            <li className="mb-2"><Link to="/contact" className=" footer-text">Contact Us</Link></li>
            <li className="mb-2"><Link to="faq" className=" footer-text">FAQ</Link></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4 footer-text">Company</h6>
          <ul className="list-unstyled mb-0">
            <li className="mb-2"><Link to="/login" className=" footer-text">Login</Link></li>
            <li className="mb-2"><Link to="/register" className=" footer-text">Register</Link></li>
            <li className="mb-2"><Link to="/booking" className=" footer-text">Booking</Link></li>
            <li className="mb-2"><Link to="faq" className=" footer-text">FAQ</Link></li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4 footer-text">Newsletter</h6>
          <p className=" mb-4 footer-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
          <div className="p-1 rounded border">
            <div className="input-group">
              <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" className="form-control border-0 shadow-0"/>
              <div className="input-group-append">
                <button id="button-addon1" type="submit" className="btn btn-link"><i className="fa fa-paper-plane"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="footer py-4">
      <div className="container text-center">
        <p className=" mb-0 py-2 footer-text">© 2023 Bootstrapious All rights reserved.</p>
      </div>
    </div>
  </footer>
    </>
  )
}
