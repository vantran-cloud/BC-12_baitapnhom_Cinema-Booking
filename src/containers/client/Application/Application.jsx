import React, { Component } from 'react';
import './Application.scss';
import { Carousel } from 'antd';

export default class Application extends Component {
    render() {
        const contentStyle = {
            height: '480px',
            width: '270px',
            lineHeight: '160px',
            textAlign: 'center',
        };
        return (
            <div className="background">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h1 className="text-left" style={{ color: 'white', lineHeight: '70px', marginTop: '250px' }}>
                                Ứng dụng tiện lợi dành cho
                                người yêu điện ảnh
                            </h1>
                            <p className="text-left" style={{ color: 'white', fontSize: '20px' }}>
                                Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.
                            </p>
                            <div className="text-left my-4">
                                <button className="btn btn-danger text-center mb-2" style={{ height: '50px', width: '230px', alignItems: 'left' }}>App miễn phí - Tải ngay!</button>
                                <p style={{ color: 'white' }}>TIX có hai phiên bản iOS & Android</p>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="app ml-5">
                                {/* <div>
                                    <img className="mobile" src="./images/mobile.png" alt="" />
                                </div> */}
                                <Carousel autoplay>
                                    <div>
                                        <h3 style={contentStyle}>
                                            <img style={{ width: '270px', height: '480px', borderRadius: '7px'}} src="./images/slide15.jpeg" alt="" />
                                        </h3>
                                    </div>
                                    <div>
                                        <h3 style={contentStyle}>
                                            <img style={{ width: '270px', height: '480px', borderRadius: '7px'}} src="./images/slide4.jpeg" alt="" />

                                        </h3>
                                    </div>
                                    <div>
                                        <h3 style={contentStyle}>
                                            <img style={{ width: '270px', height: '480px', borderRadius: '7px'}} src="./images/slide10.jpeg" alt="" />

                                        </h3>
                                    </div>
                                    <div>
                                        <h3 style={contentStyle}>
                                            <img style={{ width: '270px', height: '480px', borderRadius: '7px'}} src="./images/slide7.jpeg" alt="" />

                                        </h3>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
