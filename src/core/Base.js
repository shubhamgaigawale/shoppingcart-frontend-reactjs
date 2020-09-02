import React from 'react'
import Menu from './Menu'
import { Link, withRouter } from "react-router-dom";

const Base = ({
    title = "My Title",
    description = "my description",
    className = "bg-white text-white p-4",
    children
}) => (
        <div>
            <Menu />

            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active" aria-current="page">{title}</li>
                </ol>
            </nav>

            <div className={className}>{children}</div>

            <footer className="page-footer font-small bg-dark-2">
                <div style={{ backgroundColor: '#6351ce' }}>
                </div>
                <div className="container text-center  text-md-left mt-5 text-white">
                    <div className="row mt-3">

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">Products</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
                            <p>
                                <a href="#!"></a>
                            </p>
                            <p>
                                <a href="#!"></a>
                            </p>
                            <p>
                                <a href="#!"></a>
                            </p>
                            <p>
                                <a href="#!"> </a>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
                            <p>
                                <Link to="/signup">Register Account</Link>
                            </p>
                            <p>
                                <Link to="/signin">Login</Link>
                            </p>
                            <p>
                                <a href="#!">Shipping Rates</a>
                            </p>
                            <p>
                                <a href="#!">Help</a>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase font-weight-bold">Contact</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
                            <p>
                                <i className="fas fa-home mr-3" /> Mumbai, Maharashtra, India</p>
                            <p>
                                <i className="fas fa-envelope mr-3" />contactus@monkdevs.com</p>
                            <p>
                                <i className="fas fa-phone mr-3" />+91 88888 99999</p>
                            <p>
                                <i className="fas fa-print mr-3" />+91 98989 89898</p>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">Developed By © 2020 Copyright:
          <a href="#"> www.monkdevs.com</a>
                </div>
            </footer>
        </div>
    )

export default Base;