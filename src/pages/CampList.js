import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';
function CampList() {
    return (
        <Fragment>
            <>
            
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-0 gx-5 align-items-end">
                            <div className="col-lg-6">
                                <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                                    <h1 className="mb-3">Campaigns</h1>
                                    <p>currently active Campaigns Click on donate to support!</p>
                                </div>
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
                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane fade show p-0 active">
                                <div className="row g-4">
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href="/"><img className="img-fluid" src="assets/img/plant1.jpeg" alt="" /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Donate Now!</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Plantation</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">20,0000</h5>
                                                <a className="d-block h5 mb-2" href="/">Kruthi plantations</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2"></i>Plantation in dobbaspete</p>

                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>8,000 collected</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>12,000 left</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>20 days left</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href="/"><img className="img-fluid" src="assets/img/hsp.jpeg" alt="" /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Donate Now!</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Hospital</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">50,000</h5>
                                                <a className="d-block h5 mb-2" href="/">Kushi,Accident</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2"></i>B.H. Road ,Tumkur</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>30,000  collected</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>20,000  Left</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>3  days</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href="/"><img className="img-fluid" src="assets/img/school1.jpg" alt="" /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Donate Now!</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">school Renovation</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">12,000</h5>
                                                <a className="d-block h5 mb-2" href="/">Government School</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2"></i>Vidyanagar,Shimoga</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>8,750 collected</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3,250 Left</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>14 days Left</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href="/"><img className="img-fluid" src="assets/img/org1.jpeg" alt="" /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Donate Now!</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Orphanage</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">18,000</h5>
                                                <a className="d-block h5 mb-2" href="/">AshaKirana</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2"></i>koteshwara,Udupi</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1,800 collected</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>17,200 Left</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>28 days Left</small>
                                            </div>
                                        </div>
                                    </div>
                                <div className="col-12 text-center">
                                        <a className="btn btn-primary py-3 px-5" href="/">Browse More Campaigns</a>
                                    </div>
                                </div>
                            </div>
                           </div>

                            </div>
                            </div>

                <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
                <script src="lib/wow/wow.min.js"></script>
                <script src="lib/easing/easing.min.js"></script>
                <script src="lib/waypoints/waypoints.min.js"></script>
                <script src="lib/owlcarousel/owl.carousel.min.js"></script>

                <script src="js/main.js"></script></>





        </Fragment>
    )
}

export default CampList;