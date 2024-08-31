import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';
function CampType() {
    return (
        <Fragment>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }} >
                        <h1 className="mb-3" >Campaign Types</h1>
                        <p>Our project focuses on various initiatives including planting trees, cleaning rivers, renovating schools, and supporting orphanages. These efforts aim to improve the environment, enhance education, and provide care for vulnerable children, contributing to overall community well-being.</p>
                    </div>

                    {/* eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee */}
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
                    {/* eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee */}
                    <div className="row g-4">
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="http://localhost:3000">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="assets/img/school.jpg" alt="Icon" />
                                    </div>
                                    <h6>School Renovation</h6>
                                    <span>1 scools</span>
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
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="http://localhost:3000">
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
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="http://localhost:3000">
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

        </Fragment>
    )
}

export default CampType;