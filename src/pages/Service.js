import React from 'react';
import { Link } from 'react-router-dom';

const Service = () => {
    return (
        <div>
            <section className="inner-page-banner" id="home"></section>
            <div className="breadcrumb-agile">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Services</li>
                </ol>
            </div>
            <section className="what-we-do py-5">
                <div className="container py-md-5">
                    <h3 className="heading text-center mb-3 mb-sm-5">Our Stylings</h3>
                    <div class="row what-we-do-grid">
                        <div class="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0">
                            <img src="assets/images/sp1.jpg" class="img-fluid" alt="" />
                        </div>
                        <div class="col-lg-3 col-md-6 bg-grid-clr">
                            <h4 class="mt-md-0 my-2">HAIRCUTS</h4>
                            <p class="">Sed ut perspiciatis undert sed omnis natus error .</p>
                        </div>
                        <div class="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0 mt-lg-0 mt-4">
                            <img src="assets/images/sp2.jpg" class="img-fluid" alt="" />
                        </div>
                        <div class="col-lg-3 col-md-6 bg-grid-clr mt-lg-0 mt-md-4">
                            <h4 class="mt-md-0 my-2">SHAVES</h4>
                            <p class="">Sed ut perspiciatis undert sed omnis natus error .</p>
                        </div>

                        <div class="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0 mt-lg-5 mt-4">
                            <img src="assets/images/sp3.jpg" class="img-fluid" alt="" />
                        </div>
                        <div class="col-lg-3 col-md-6 bg-grid-clr mt-lg-5 mt-md-4">
                            <h4 class="mt-md-0 my-2">BEARD TRIM</h4>
                            <p class="">Sed ut perspiciatis undert sed omnis natus error .</p>
                        </div>
                        <div class="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0 mt-lg-5 mt-4">
                            <img src="assets/images/sp4.jpg" class="img-fluid" alt="" />
                        </div>
                        <div class="col-lg-3 col-md-6 bg-grid-clr mt-lg-5 mt-md-4">
                            <h4 class="mt-md-0 my-2">MUSTACHE TRIM</h4>
                            <p class="">Sed ut perspiciatis undert sed omnis natus error .</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonials py-5" id="testimonials">
                <div className="container py-md-5">
                    <h3 className="heading text-center mb-3 mb-sm-5">Client Reviews</h3>
                    <div className="row mt-3">
                        <div className="col-md-4 test-grid text-left px-lg-3">
                            <div className="test-info">
                                <p>Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.</p>
                                <h3 className="mt-md-4 mt-3"> Abraham Smith</h3>
                                <div className="test-img text-center mb-3">
                                    <img src="assets/images/test1.jpg" className="img-fluid" alt="user" />
                                </div>
                                <div className="mobl-footer test-soc text-center">
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link to="#">
                                                <span className="fa fa-facebook-f"></span>
                                            </Link>
                                        </li>
                                        <li className="mx-1">
                                            <Link to="#">
                                                <span className="fa fa-twitter"></span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 test-grid text-left px-lg-3 py-sm-5 py-md-0 py-3">
                            <div className="test-info">
                                <p>Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.</p>
                                <h3 className="mt-md-4 mt-3"> Mariana Noe</h3>
                                <div className="test-img text-center mb-3">
                                    <img src="assets/images/test2.jpg" className="img-fluid" alt="user" />
                                </div>
                                <div className="mobl-footer test-soc text-center">
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link to="#">
                                                <span className="fa fa-facebook-f"></span>
                                            </Link>
                                        </li>
                                        <li className="mx-1">
                                            <Link to="#">
                                                <span className="fa fa-twitter"></span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 test-grid text-left px-lg-3">
                            <div className="test-info">
                                <p>Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.</p>
                                <h3 className="mt-md-4 mt-3">Nebula Nairobi</h3>
                                <div className="test-img text-center mb-3">
                                    <img src="assets/images/test3.jpg" className="img-fluid" alt="user" />
                                </div>
                                <div className="mobl-footer test-soc text-center">
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link to="#">
                                                <span className="fa fa-facebook-f"></span>
                                            </Link>
                                        </li>
                                        <li className="mx-1">
                                            <Link to="#">
                                                <span className="fa fa-twitter"></span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Service;


            
        



