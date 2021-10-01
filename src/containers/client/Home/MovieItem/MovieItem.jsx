import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MovieItem extends Component {
    render() {
        const { tenPhim, hinhAnh, danhGia, maPhim } = this.props.movie;
        return (
            <div classname="col-2">
                <div className="card" style= {{ marginBottom: '30px', marginLeft: '20px' }}>
                    <img className="card-img-top" style={{ width: '150px', height: '170px'}} src={hinhAnh === "http://movie0706.cybersoft.edu.vn/hinhanh/coco_gp07.jpg" ? "Coco_(phim_2017)_poster.jpeg" : hinhAnh} alt />
                    <div className="card-body" style={{ width: '150px', height: '130px', padding: '0px', marginTop: '15px'}}>
                        <h4 className="card-title" style={{ fontSize: '0.9rem'}}>{tenPhim}</h4>
                        <p className="card-text" style={{ fontSize: '0.8rem'}}>Đánh Giá: {danhGia} điểm</p>
                        <Link className="btn btn-dark" to={`/movie-detail/${maPhim}`}>View Detail</Link>
                    </div>
                </div>
            </div>
        )
    }
}
