import React, { Component } from 'react';
import './gallery.scoped.css'
import 'bootstrap/dist/css/bootstrap.css';

class gallery extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">

                    {/* BODY */}
                    <br />
                    <center>
                        <h1 style={{ fontFamily: 'Optima', color: 'white' }}>GALLERY</h1>
                    </center>
                    <br />
                    <div className="page">
                        <div className="photobox photobox_flat">
                            <div className="photobox__previewbox media-placeholder">
                                <img src="images/Gallery/gallery1.jpg" className="photobox__preview media-placeholder__media" alt />
                            </div>
                            <div className="photobox__info-wrapper">
                                <div className="photobox__info"><span>Food</span></div>
                            </div>
                        </div>
                        <div className="photobox photobox_flat photobox_scale-sliding">
                            <div className="photobox__previewbox media-placeholder">
                                <img src="images/Gallery/gallery2.jpg" className="photobox__preview media-placeholder__media" alt />
                            </div>
                            <div className="photobox__info-wrapper">
                                <div className="photobox__info"><span>Delicious</span></div>
                            </div>
                        </div>
                        <div className="photobox photobox_flat photobox_scaled">
                            <div className="photobox__previewbox media-placeholder">
                                <img src="images/Gallery/gallery3.jpg" className="photobox__preview media-placeholder__media" alt />
                            </div>
                            <div className="photobox__info-wrapper">
                                <div className="photobox__info"><span>Seafood</span></div>
                            </div>
                        </div>
                        <div className="photobox photobox_flat photobox_scale-rotated">
                            <div className="photobox__previewbox media-placeholder">
                                <img src="images/Gallery/gallery4.jpg" className="photobox__preview media-placeholder__media" alt />
                            </div>
                            <div className="photobox__info-wrapper">
                                <div className="photobox__info"><span>Buffet</span></div>
                            </div>
                        </div>
                        <div className="photobox photobox_rounded">
                            <div className="photobox__previewbox media-placeholder">
                                <img src="images/Gallery/gallery5.jpg" className="photobox__preview media-placeholder__media" alt />
                            </div>
                            <div className="photobox__info-wrapper">
                                <div className="photobox__info"><span>Pool</span></div>
                            </div>
                        </div>
                        <div className="photobox photobox_rounded photobox_scale-sliding">
                            <div className="photobox__previewbox media-placeholder">
                                <img src="images/Gallery/gallery6.jpg" className="photobox__preview media-placeholder__media" alt />
                            </div>
                            <div className="photobox__info-wrapper">
                                <div className="photobox__info"><span>Room Service</span></div>
                            </div>
                        </div>
                        <div className="photobox photobox_rounded photobox_scaled">
                            <div className="photobox__previewbox media-placeholder">
                                <img src="images/Gallery/gallery7.jpg" className="photobox__preview media-placeholder__media" alt />
                            </div>
                            <div className="photobox__info-wrapper">
                                <div className="photobox__info"><span>Parking Lot</span></div>
                            </div>
                        </div>
                        <div className="photobox photobox_rounded photobox_scale-rotated">
                            <div className="photobox__previewbox media-placeholder">
                                <img src="images/Gallery/gallery8.jpg" className="photobox__preview media-placeholder__media" alt />
                            </div>
                            <div className="photobox__info-wrapper">
                                <div className="photobox__info"><span>Receptionist</span></div>
                            </div>
                        </div>
                        <div className="photobox photobox_triangular">
                            <div className="photobox__previewbox media-placeholder">
                                <img src="images/Gallery/gallery9.jpg" className="photobox__preview media-placeholder__media" alt />
                            </div>
                            <div className="photobox__info-wrapper">
                                <div className="photobox__info"><span>Hall</span></div>
                            </div>
                        </div>
                        <div className="photobox photobox_triangular photobox_scale-sliding">
                            <div className="photobox__previewbox media-placeholder">
                                <img src="images/Gallery/gallery10.jpg" className="photobox__preview media-placeholder__media" alt />
                            </div>
                            <div className="photobox__info-wrapper">
                                <div className="photobox__info"><span>Coffee</span></div>
                            </div>
                        </div>
                        <div className="photobox photobox_triangular photobox_scaled">
                            <div className="photobox__previewbox media-placeholder">
                                <img src="images/Gallery/gallery11.jpg" className="photobox__preview media-placeholder__media" alt />
                            </div>
                            <div className="photobox__info-wrapper">
                                <div className="photobox__info"><span>Travel</span></div>
                            </div>
                        </div>
                        <div className="photobox photobox_triangular photobox_scale-rotated">
                            <div className="photobox__previewbox media-placeholder">
                                <img src="images/Gallery/gallery12.jpg" className="photobox__preview media-placeholder__media" alt />
                            </div>
                            <div className="photobox__info-wrapper">
                                <div className="photobox__info"><span>Bar</span></div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    {/* END BODY */}

                </div>

            </div>
        );
    }
}

export default gallery;