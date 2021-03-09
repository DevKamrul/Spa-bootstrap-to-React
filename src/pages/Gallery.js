import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
    return (
        <div>
            <section className="inner-page-banner" id="home"></section>
            <div className="breadcrumb-agile">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Gallery</li>
                </ol>
            </div>
            <section className="gallery py-5" id="gallery">
                <div className="container py-md-5">
                    <h3 className="heading text-center mb-3 mb-sm-5">Our Gallery</h3>
                    <div className="gallery-content">
                        <div className="row">
                            <div className="col-md-4 col-sm-6 gal-img">
                                <Link to="#gal1"><img src="assets/images/g1.jpg" alt="aegis" className="img-fluid mt-4" /></Link>
                            </div>
                            <div className="col-md-4 col-sm-6 gal-img">
                                <Link to="#gal2"><img src="assets/images/g2.jpg" alt="aegis" className="img-fluid mt-4" /></Link>
                            </div>
                            <div className="col-md-4 col-sm-6 gal-img">
                                <Link to="#gal3"><img src="assets/images/g3.jpg" alt="aegis" className="img-fluid mt-4" /></Link>
                            </div>
                            <div className="col-md-4 col-sm-6 gal-img">
                                <Link to="#gal4"><img src="assets/images/g4.jpg" alt="aegis" className="img-fluid mt-4" /></Link>
                            </div>
                            <div className="col-md-4 col-sm-6 gal-img">
                                <Link to="#gal5"><img src="assets/images/g5.jpg" alt="aegis" className="img-fluid mt-4" /></Link>
                            </div>
                            <div className="col-md-4 col-sm-6 gal-img">
                                <Link to="#gal6"><img src="assets/images/g6.jpg" alt="aegis" className="img-fluid mt-4" /></Link>
                            </div>
                        </div>
                        <div id="gal1" className="popup-effect">
                            <div className="popup">
                                <img src="assets/images/g1.jpg" alt="Popup" className="img-fluid mt-4" />
                                <Link className="close" to="#gallery">&times;</Link>
                            </div>
                        </div>
                        <div id="gal2" className="popup-effect">
                            <div className="popup">
                                <img src="assets/images/g2.jpg" alt="Popup" className="img-fluid mt-4" />
                                <Link className="close" to="#gallery">&times;</Link>
                            </div>
                        </div>
                        <div id="gal3" className="popup-effect">
                            <div className="popup">
                                <img src="assets/images/g3.jpg" alt="Popup" className="img-fluid mt-4" />
                                <Link className="close" to="#gallery">&times;</Link>
                            </div>
                        </div>
                        <div id="gal4" className="popup-effect">
                            <div className="popup">
                                <img src="assets/images/g4.jpg" alt="Popup" className="img-fluid mt-4" />
                                <Link className="close" to="#gallery">&times;</Link>
                            </div>
                        </div>
                        <div id="gal5" className="popup-effect">
                            <div className="popup">
                                <img src="assets/images/g5.jpg" alt="Popup" className="img-fluid mt-4" />
                                <Link className="close" to="#gallery">&times;</Link>
                            </div>
                        </div>
                        <div id="gal6" className="popup-effect">
                            <div className="popup">
                                <img src="assets/images/g6.jpg" alt="Popup" className="img-fluid mt-4" />
                                <Link className="close" to="#gallery">&times;</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gallery;




