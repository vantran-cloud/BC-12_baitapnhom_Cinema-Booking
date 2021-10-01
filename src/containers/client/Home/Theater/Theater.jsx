import React, { Component } from 'react';
import { actFetchTheater } from './module/actions';
import { connect } from 'react-redux';
import Loading from 'components/Loading/Loading';

class Theater extends Component {

    render() {
        const { theater, loading } = this.props;

        if (loading) return <Loading />
        return (
            <div className="container">
                <h1>Cụm Rạp</h1>
                <div className="row">
                    <div className="col-2">
                        <div className="nav flex-column nav-pills text-left" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            {theater.map((rap, idx) => {
                                return (
                                    <a key={rap.maHeThongRap} className={`nav-link ${idx === 0 && 'active'}`} id="v-pills-home-tab" data-toggle="pill" href={`#${rap.maHeThongRap}`} role="tab" aria-controls="v-pills-home" aria-selected="true">
                                        <img src={rap.logo} alt="" style={{ width: '50px' }} />
                                    </a>
                                )
                            })}

                        </div>
                    </div>
                    <div className="col-5">
                        <div className="tab-content" id="v-pills-tabContent">
                            {theater.map((rap, idx) => {
                                return (
                                    <div key={rap.maHeThongRap} className={`tab-pane fade show ${idx === 0 && 'active'}`} id={rap.maHeThongRap} role="tabpanel" aria-labelledby="v-pills-home-tab">
                                        {rap.lstCumRap.map((cumRapChieu, idx) => {
                                            return (
                                                <div style={{ display: "flex" }} className={`tab-pane fade show ${idx === 0 && 'active'}`} id={cumRapChieu.maPhim} role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                    <img src="https://s3img.vcdn.vn/123phim/2018/09/cinestar-quoc-thanh-15379636956745.jpg" alt="" style={{ width: '70px', marginBottom: "20px" }} />
                                                    <div className="text-left ml-2">{cumRapChieu.tenCumRap}
                                                        <p>{cumRapChieu.diaChi}</p>
                                                        <p style={{ color: 'red', marginTop: '-12px' }}>[Chi Tiết]</p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="tab-content" id="v-pills-tabContent">
                            {theater.map((rap, idx) => {
                                return (
                                    <div key={rap.maHeThongRap} className={`tab-pane fade show ${idx === 0 && 'active'}`} id={rap.maHeThongRap} role="tabpanel" aria-labelledby="v-pills-home-tab">
                                        {rap.lstCumRap.map((cumRapChieu, idx) => {
                                            return (
                                                <div key={idx} className="listPhim">
                                                    {cumRapChieu.danhSachPhim.map((listPhim, idx) => {
                                                        return (
                                                            <div key={idx} className="text-left" style={{ display: 'flex' }}>
                                                                <img src={listPhim.hinhAnh} alt="" style={{ width: '60px', marginBottom: '20px' }} />
                                                                <div className="ml-2">
                                                                    {listPhim.tenPhim}
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
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
        this.props.fetchTheater()
    }
}

const mapStateToProps = state => ({
    theater: state.theaterReducer.theater,
    loading: state.theaterReducer.loading,
})

const mapDispatchToProps = dispatch => ({
    fetchTheater: () => {
        dispatch(actFetchTheater())
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Theater);