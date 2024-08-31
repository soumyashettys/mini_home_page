import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function PropertyAgent() {
    return (
        <Fragment>
            <div className="container-fluid nav-bar bg-transparent">
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-2 px-2 mt-0 fixed-top mb-18px" style={{ backgroundColor: '#13111C' }}>
                    <a href="index.html" className="navbar-brand d-flex align-items-center text-center">
                        <div className="icon p-2 me-2">
                            <img className="img-fluid" src="assets/img/icon-deal.png" alt="Icon" style={{ width: '30px', height: '30px' }} />
                        </div>
                        <h1 className="m-0 text-primary">EcoCrowd</h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <Link to="/home" className="nav-item nav-link active">HOME</Link>
                            <div className="nav-item dropdown">
                                <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Campaign</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    {/* <Link to="/Campaign List" className="dropdown-item">Campaign List</Link> */}
                                    <Link to="/Campaign Type" className="dropdown-item">Campaign Type</Link>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <a href="http://127.0.0.1:3003" className="nav-link" data-bs-toggle="dropdown">Join Us</a>
                                
                            </div>
                            <Link to="/Contact" className="nav-item nav-link">Contact</Link>
                        </div>
                        <a href="http://127.0.0.1:3003/login" className="btn btn-primary px-3 d-none d-lg-flex" >Create Campaign</a>
                    </div>
                </nav>
            </div>
        </Fragment>
    )
}

export default PropertyAgent;
