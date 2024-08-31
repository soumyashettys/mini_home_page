import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';

function Idx() {
    return (
        <Fragment>
            <div className="container-xxl bg-white p-0 " style={{ marginTop: ' 120px ' }}>
                <div className="container-fluid header bg-white p-0  ">


                    <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                        <div className="col-md-6 p-5 mt-5 mt-md-lg-18">
                            <h1 className="display-5 animated fadeIn mb-4"><span className="text-primary ">Donate Now</span> To make a difference.</h1>
                            <p className="animated fadeIn mb-4 pb-2">Welcome to our crowdfunding community, where each donation isa step towards realizing shared dreams and aspirations. Together, let us pave the path to progress and prosperity, one contribution at time</p>
                            <a href="http://localhost:3000" className="btn btn-primary py-3 px-5 me-3 animated fadeIn">Donate Now</a>
                        </div>

                        <div className='col-md-6'>
                            <img className='floating img' src="assets/img/homeImg.jpeg" alt="" height={350} width={500} />
                        </div>
                        {/* <div className=" animated fadeIn">
                    <div className="owl-carousel header-carousel">
                        <div className="owl-carousel-item">
                            <img className="img-fluid" src="assets/img/carousel-1.jpg" alt="" />
                        </div>
                        <div className="owl-carousel-item">
                            <img className="img-fluid" src="assets/img/carousel-2.jpg" alt="" />
                        </div>
                    </div>
                </div> */}
                    </div>
                </div>



                <div className="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{ padding: '35px' }}>
                    <div className="container">
                        <div className="row g-2">
                            <div className="col-md-12">
                                <div className="row g-2">
                                    <div className="col-md-4">
                                        <a href="http://localhost:3000/profile" className="btn btn-primary py-3 px-5 me-3 animated fadeIn" style={{ backgroundColor: 'white', color: 'black' }}>
                                            Your Campaign
                                        </a>
                                    </div>
                                    <div className="col-md-8  justify-content-end">
                                <p className='animated fadeIn mb-6 pb-2 text-white' style={{ fontWeight: 'bold' }}>
                                    Each creator is limited to one crowdfunding campaign, ensuring that every contribution is used responsibly and effectively, guaranteeing the safety and impact of your support.
                                </p>
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                        <h1 className="mb-3">Campaign Types</h1>
                        <p>Our project focuses on various initiatives including planting trees, cleaning rivers, renovating schools, and supporting orphanages. These efforts aim to improve the environment, enhance education, and provide care for vulnerable children, contributing to overall community well-being.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="assets/img/school.jpg" alt="Icon" />
                                    </div>
                                    <h6>School Renovation</h6>
                                    <span>2 schools</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="http://localhost:3000">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="assets/img/plant.jpg" alt="Icon" />
                                    </div>
                                    <h6>Plantation</h6>
                                    <span>12 Plantation</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="/">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="assets/img/river.jpeg" alt="Icon" />
                                    </div>
                                    <h6>River Cleaning</h6>
                                    <span>3 River</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="/">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="assets/img/org.jpeg" alt="Icon" />
                                    </div>
                                    <h6>Orphanage</h6>
                                    <span>3 Orphanage</span>
                                </div>
                            </a>

                        </div>

                    </div>
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-0 gx-5 align-items-end">
                        <div className="col-lg-6">
                            {/* <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                                    <h1 className="mb-3">Campaigns</h1>
                                    <p>currently active Campaigns Click on donate to support!</p>
                                </div> */}
                        </div>
                        {/* <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                                <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                                    <li className="nav-item me-2">
                                        <a className="btn btn-outline-primary active" data-bs-toggle="pill" href="#tab-1">Featured</a>
                                    </li>
                                    <li className="nav-item me-2">
                                        <a className="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-2">For Sell</a>
                                    </li>
                                    <li className="nav-item me-0">
                                        <a className="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-3">For Rent</a>
                                    </li>
                                </ul>
                            </div> */}
                    </div>
                    

                </div>
            </div>

            <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
            <script src="lib/wow/wow.min.js"></script>
            <script src="lib/easing/easing.min.js"></script>
            <script src="lib/waypoints/waypoints.min.js"></script>
            <script src="lib/owlcarousel/owl.carousel.min.js"></script>

            <script src="js/main.js"></script>

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
                                                <span>+9886727330</span>
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
                                <a className="btn btn-link text-white-50 d-block" href="/">About Us</a>
                                <a className="btn btn-link text-white-50 d-block" href="/">Contact Us</a>
                                <a className="btn btn-link text-white-50 d-block" href="/">Our Services</a>
                                <a className="btn btn-link text-white-50 d-block" href="/">Privacy Policy</a>
                                <a className="btn btn-link text-white-50 d-block" href="/">Terms & Condition</a>
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

                                    Designed By <a className="border-bottom" href="https://htmlcodex.com">Soumya,Prathiksha and Sanjana</a>
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

export default Idx;