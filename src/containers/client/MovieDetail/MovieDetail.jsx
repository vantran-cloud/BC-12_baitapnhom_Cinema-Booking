import React, { Component } from 'react';
import Loading from 'components/Loading/Loading';
import movieApi from 'apis/movieApi';
import { actFetchMovieDetail } from './module/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class MovieDetail extends Component {

    render() {
        const { loading, movieDetail } = this.props;
        if (loading) return <Loading />
        return (
            <div className="container">
                <div className="row my-5">
                    <div className="col-3">
                        <img className="img-fluid" src={movieDetail.hinhAnh === "http://movie0706.cybersoft.edu.vn/hinhanh/coco_gp07.jpg" ? "https://picsum.photos/200/300" : movieDetail.hinhAnh} alt="" />
                    </div>
                    <div className="col-9" style={{ textAlign: 'left' }}>
                        <h2 style={{ color: 'red' }}>{movieDetail.tenPhim}</h2>
                        <p>{movieDetail.moTa}</p>
                        <p>Ngày khởi chiếu: {movieDetail.ngayKhoiChieu}</p>
                        <p>Đánh giá: {movieDetail.danhGia}</p>
                        <button className="btn btn-success">Xem trailer</button>{' '}
                        <button className="btn btn-success">Đặt vé ngay</button>
                    </div>
                </div>

                <h1 className='my-5' style={{ color: 'red' }}>Show Time</h1>

                <div className="row">
                    <div className="col-3">
                        <div className="nav flex-column nav-pills text-left" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            {movieDetail.heThongRapChieu.map((heThongRap, idx) => {
                                return (
                                    <a key={heThongRap.maHeThongRap} className={`nav-link ${idx === 0 && 'active'}`} id="v-pills-home-tab" data-toggle="pill" href={`#${heThongRap.maHeThongRap}`} role="tab" aria-controls="v-pills-home" aria-selected="true">
                                        <img src={heThongRap.logo} alt="" style={{ width: '50px', marginRight: '8px' }} />
                                        <span style={{ textTransform: 'uppercase' }}>
                                            {heThongRap.tenHeThongRap}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="tab-content" id="v-pills-tabContent">
                            {movieDetail.heThongRapChieu.map((heThongRap, idx) => {
                                return (
                                    <div key={heThongRap.maHeThongRap} className={`tab-pane fade show ${idx === 0 && 'active'}`} id={heThongRap.maHeThongRap} role="tabpanel" aria-labelledby="v-pills-home-tab">
                                        {heThongRap.cumRapChieu.map(cumRap => {
                                            return (
                                                <div className="text-left">
                                                    <img src={cumRap.hinhAnh === null ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXUqbT3xeUBECrdOtbdyhR3c0q8O5U2mUVQg&usqp=CAU' : cumRap.hinhAnh} alt="" style={{ width: '50px', marginRight: '8px' }}/>
                                                    {cumRap.tenCumRap}
                                                  
                                                    <div className="my-4">
                                                         {cumRap.lichChieuPhim.map(lichChieu => {
                                                            return (
                                                                <Link to={`/seat-plan/${lichChieu.maLichChieu}`} key={lichChieu.maLichChieu} className="btn btn-secondary mr-3 mb-3">
                                                                    {new Date(
                                                                        lichChieu.ngayChieuGioChieu
                                                                    ).toLocaleTimeString()}

                                                                      <p>{lichChieu.tenRap} - Giá vé: {lichChieu.giaVe} vnd - Thời lượng: {lichChieu.thoiLuong} phút</p>
                                                                </Link>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>
        )
    }

    componentDidMount() {
        movieApi.fetchMovieDetailApi(this.props.match.params.movieId)
            .then(res => {
                this.props.fetchMovieDetail(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }
}

const mapStateToProps = state => ({
    movieDetail: state.movieDetailReducer.movieDetail,
    loading: state.movieDetailReducer.loading,
});

const mapDispatchToProps = dispatch => ({
    fetchMovieDetail: movieDetail => {
        dispatch(actFetchMovieDetail(movieDetail))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail)