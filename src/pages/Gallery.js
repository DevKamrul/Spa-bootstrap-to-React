import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
    return (
        <div>
            <section class="inner-page-banner" id="home"></section>
            <div class="breadcrumb-agile">
                <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Gallery</li>
                </ol>
            </div>
            <section class="gallery py-5" id="gallery">
                <div class="container py-md-5">
                    <h3 class="heading text-center mb-3 mb-sm-5">Our Gallery</h3>
                    <div class="gallery-content">
                        <div class="row">
                            <div class="col-md-4 col-sm-6 gal-img">
                                <Link to="#gal1"><img src="assets/images/g1.jpg" alt="aegis" class="img-fluid mt-4" /></Link>
                            </div>
                            <div class="col-md-4 col-sm-6 gal-img">
                                <Link to="#gal2"><img src="assets/images/g2.jpg" alt="aegis" class="img-fluid mt-4" /></Link>
                            </div>
                            <div class="col-md-4 col-sm-6 gal-img">
                                <Link to="#gal3"><img src="assets/images/g3.jpg" alt="aegis" class="img-fluid mt-4" /></Link>
                            </div>
                            <div class="col-md-4 col-sm-6 gal-img">
                                <Link to="#gal4"><img src="assets/images/g4.jpg" alt="aegis" class="img-fluid mt-4" /></Link>
                            </div>
                            <div class="col-md-4 col-sm-6 gal-img">
                                <Link to="#gal5"><img src="assets/images/g5.jpg" alt="aegis" class="img-fluid mt-4" /></Link>
                            </div>
                            <div class="col-md-4 col-sm-6 gal-img">
                                <Link to="#gal6"><img src="assets/images/g6.jpg" alt="aegis" class="img-fluid mt-4" /></Link>
                            </div>
                        </div>
                        <div id="gal1" class="popup-effect">
                            <div class="popup">
                                <img src="assets/images/g1.jpg" alt="Popup" class="img-fluid mt-4" />
                                <Link class="close" to="#gallery">&times;</Link>
                            </div>
                        </div>
                        <div id="gal2" class="popup-effect">
                            <div class="popup">
                                <img src="assets/images/g2.jpg" alt="Popup" class="img-fluid mt-4" />
                                <Link class="close" to="#gallery">&times;</Link>
                            </div>
                        </div>
                        <div id="gal3" class="popup-effect">
                            <div class="popup">
                                <img src="assets/images/g3.jpg" alt="Popup" class="img-fluid mt-4" />
                                <Link class="close" to="#gallery">&times;</Link>
                            </div>
                        </div>
                        <div id="gal4" class="popup-effect">
                            <div class="popup">
                                <img src="assets/images/g4.jpg" alt="Popup" class="img-fluid mt-4" />
                                <Link class="close" to="#gallery">&times;</Link>
                            </div>
                        </div>
                        <div id="gal5" class="popup-effect">
                            <div class="popup">
                                <img src="assets/images/g5.jpg" alt="Popup" class="img-fluid mt-4" />
                                <Link class="close" to="#gallery">&times;</Link>
                            </div>
                        </div>
                        <div id="gal6" class="popup-effect">
                            <div class="popup">
                                <img src="assets/images/g6.jpg" alt="Popup" class="img-fluid mt-4" />
                                <Link class="close" to="#gallery">&times;</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gallery;




