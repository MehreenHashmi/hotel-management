import React from 'react'

export default function Contact() {
  return (
    <>
    <section id="contact">
  <div className="container">
    <div className="well well-sm">
      <h3><strong>Contact Us</strong></h3>
    </div>
	
	<div className="row">
	  <div className="col-md-7">
    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d224568.36079214368!2d76.8249363745763!3d28.42285832304557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sGurugram!5e0!3m2!1sen!2sin!4v1693308976874!5m2!1sen!2sin" width="100%" height="315" frameborder="0" allowfullscreen></iframe>
      </div>

      <div className="col-md-5">
          <h4><strong>Get in Touch</strong></h4>
        <form>
          <div className="form-group">
          <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="E-mail"/>
          </div>
          <div className="form-group">
            <input type="tel" className="form-control" placeholder="Phone"/>
          </div>
          <div className="form-group">
            <textarea className="form-control" name="" rows="3" placeholder="Message"></textarea>
          </div>
          <button className="btn btn-default" type="submit" name="button">
              <i className="fa fa-paper-plane-o" aria-hidden="true"></i> Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
