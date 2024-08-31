import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';
function Contact() {
    return (
        <Fragment>
            <div className="container-xxl bg-white p-0">

                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }} >
                            <h1 className="mb-3">Contact Us</h1>
                            <p> If you encounter any issues, have questions, or require assistance at any stage, please don't hesitate to reach out. Your satisfaction and the success of our project are our top priorities.</p>
                        </div>
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="row gy-4">
                                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                                        <div className="bg-light rounded p-3">
                                            <div className="d-flex align-items-center bg-white rounded p-3" style={{ border: '1px dashed rgba(0, 185, 142, 0.3)' }}>
                                                <div className="icon me-3" style={{ width: '45px', height: '45px' }}>
                                                    <i className="fa fa-map-marker-alt text-primary"></i>
                                                </div>
                                                <span>Siddaganga Institute Of Technology, Tumkur</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                                        <div className="bg-light rounded p-3">
                                            <div className="d-flex align-items-center bg-white rounded p-3" style={{ border: '1px dashed rgba(0, 185, 142, 0.3)' }}>
                                                <div className="icon me-3" style={{ width: '45px', height: '45px' }}>
                                                    <i className="fa fa-envelope-open text-primary"></i>
                                                </div>
                                                <span>sit.cse@gmail.com</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                                        <div className="bg-light rounded p-3">
                                            <div className="d-flex align-items-center bg-white rounded p-3" style={{ border: '1px dashed rgba(0, 185, 142, 0.3)' }}>
                                                <div className="icon me-3" style={{ width: '45px', height: '45px' }}>
                                                    <i className="fa fa-phone-alt text-primary"></i>
                                                </div>
                                                <span>+91 9886727330</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">

                            </div>

                        </div>
                    </div>
                </div>

                <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="container py-5">
                        <div className="row g-5">
                            <div className="col-lg-3 col-md-6">
                                <h5 className="text-white mb-4">Get In Touch</h5>
                                <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Siddaganga Institute Of Technology</p>
                                <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+91 9886727330</p>
                                <p className="mb-2"><i className="fa fa-envelope me-3"></i>sit.cse@gmail.com</p>
                                <div className="d-flex pt-2">
                                    <a className="btn btn-outline-light btn-social" href="/"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-outline-light btn-social" href="/"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-light btn-social" href="/"><i className="fab fa-youtube"></i></a>
                                    <a className="btn btn-outline-light btn-social" href="/"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <h5 className="text-white mb-4">Quick Links</h5>
                                <a className="btn btn-link text-white-50" href="/">About Us</a>
                                <a className="btn btn-link text-white-50" href="/">Contact Us</a>
                                <a className="btn btn-link text-white-50" href="/">Our Services</a>
                                <a className="btn btn-link text-white-50" href="/">Privacy Policy</a>
                                <a className="btn btn-link text-white-50" href="/">Terms & Condition</a>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <h5 className="text-white mb-4">About EcoCrowd</h5>
                                <p className='text-justify'>
                                    EcoCrowd is a dynamic crowdfunding platform dedicated to driving positive environmental change and social impact. Our mission is to support and fund eco-friendly and sustainable projects that make a real difference. Whether it's river cleaning, orphanage development, school funding, or plantation , EcoCrowd connects passionate individuals with projects that prioritize ecological balance and sustainability.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="copyright">
                            <div className="row">
                                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                    &copy; <a className="border-bottom" href="/">EcoCrowd:crowdfunding Platform</a>, All Right Reserved.

                                    Designed By <a className="border-bottom" href="https://htmlcodex.com">Soumya Shetty S,Prathiksha C P and Sanjana E</a>
                                </div>
                                <div className="col-md-6 text-center text-md-end">
                                    <div className="footer-menu">
                                        <a href="/">Home</a>
                                        <a href="/">Cookies</a>
                                        <a href="/">Help</a>
                                        <a href="/">FQAs</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <a href="/" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
            </div>

            <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
            <script src="lib/wow/wow.min.js"></script>
            <script src="lib/easing/easing.min.js"></script>
            <script src="lib/waypoints/waypoints.min.js"></script>
            <script src="lib/owlcarousel/owl.carousel.min.js"></script>


            <script src="js/main.js"></script>
        </Fragment>
    )
}

export default Contact;