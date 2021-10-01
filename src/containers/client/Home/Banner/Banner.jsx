import React, { Component } from 'react';

export default class Banner extends Component {
    render() {
        return (

            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block" src="./images/jumanji.jpeg" style={{ width: '100%', height: "700px" }} alt="First slide" />
                     
                    </div>
                    <div className="carousel-item">
                        <img className="d-block" src="./images/avenger4.jpeg" style={{ width: '100%', height: "700px" }} alt="Second slide" />
                        
                    </div>
                    <div className="carousel-item">
                        <img className="d-block" src="./images/Coco_phim.jpeg" style={{ width: '100%', height: "700px" }} alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block" src="./images/mortal-combat.jpeg" style={{ width: '100%', height: "700px" }} alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>

        )
    };
};
