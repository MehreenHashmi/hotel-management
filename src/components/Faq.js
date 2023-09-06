import React from 'react'
import './faq.css'
import { Link } from 'react-router-dom';

export default function Faq() {
    return (
        <>

            <div className="faq_area section_padding" id="faq">
                <div className="container bg-light faqcontainer">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-8 col-lg-6">

                            <div className="section_heading text-center" >
                                <h3><span>Frequently </span> Asked Questions</h3>
                                <div className="line"></div>
                            </div>
                            <div className="wrapper bg-white rounded shadow">

                                <div className="accordion accordion-flush border-top border-start border-end" id="myAccordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingOne">
                                            <button className="accordion-button collapsed border-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                Q. How can I make a reservation?
                                            </button>
                                        </h2>
                                        <div id="flush-collapseOne" className="accordion-collapse collapse border-0" aria-labelledby="flush-headingOne" data-bs-parent="#myAccordion"> <div className="accordion-body p-0">
                                            <ul className="list-unstyled m-0">
                                                <li>
                                                You can easily make a reservation through our website's booking portal or you can call our reservation desk at [reservation phone number].
                                                </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingOne">
                                             <button className="accordion-button collapsed border-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"> 
                                            Q. What forms of payment do you accept?
                                             </button> </h2> <div id="flush-collapseTwo" className="accordion-collapse collapse border-0" aria-labelledby="flush-headingOne" data-bs-parent="#myAccordion">
                                            <div className="accordion-body p-0">
                                                <ul className="list-unstyled m-0">
                                                    <li>We accept major credit and debit cards for payments.</li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item"> <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed border-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Q. How can I modify my reservation?
                                        </button>
                                    </h2>
                                        <div id="flush-collapseThree" className="accordion-collapse collapse border-0" aria-labelledby="flush-headingOne" data-bs-parent="#myAccordion">
                                            <div className="accordion-body p-0">
                                                <ul className="list-unstyled m-0">
                                                    <li> You can modify your reservation online by logging into your account on our website. For further assistance, you can reach out to our reservation desk.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item"> <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed border-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                           Q. What is your cancellation policy?
                                        </button>
                                    </h2>
                                        <div id="flush-collapseFour" className="accordion-collapse collapse border-0" aria-labelledby="flush-headingOne" data-bs-parent="#myAccordion">
                                            <div className="accordion-body p-0">
                                                <ul className="list-unstyled m-0">
                                                    <li>Our cancellation policy varies based on the type of reservation and time of cancellation. Generally, cancellations made 24 hours prior to the check-in date are eligible for a full refund.</li>
                                                </ul>
                                            </div> </div> </div> <div className="accordion-item"> <h2 className="accordion-header" id="flush-headingOne"> <button className="accordion-button collapsed border-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                Q. Are there dining options within the hotel? </button>
                                            </h2>
                                        <div id="flush-collapseFive" className="accordion-collapse collapse border-0" aria-labelledby="flush-headingOne" data-bs-parent="#myAccordion">
                                            <div className="accordion-body p-0">
                                                <ul className="list-unstyled m-0">
                                                    <li>All of our hotels feature an on-site restaurant offering breakfast, lunch, and dinner.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingOne">
                                            <button className="accordion-button collapsed border-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                            Q. Is Wi-Fi available in all hotels?
                                            </button>
                                        </h2>
                                        <div id="flush-collapseSix" className="accordion-collapse collapse border-0" aria-labelledby="flush-headingOne" data-bs-parent="#myAccordion">
                                            <div className="accordion-body p-0">
                                                <ul className="list-unstyled m-0">
                                                    <li>Yes, complimentary high-speed Wi-Fi is available </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="support-button text-center d-flex align-items-center justify-content-center mt-4 wow fadeInUp" data-wow-delay="0.5s" >
                    <i className="lni-emoji-sad"></i>
                    <p className="mb-0 px-2">Can't find your answers?</p>
                    <Link to="/contact"> Contact us</Link>
                </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
