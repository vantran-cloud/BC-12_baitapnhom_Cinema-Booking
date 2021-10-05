import React, { Component } from 'react';
import './LichSuDatVe.scss';
import { actLaydanhSachRap, actLichSuDatVe } from './module/actions';
import { connect } from 'react-redux';
import Loading from 'components/Loading/Loading';
import moment from 'moment';

class LichSuDatVe extends Component {
    handleLichSuDatVe = () => {

        let ve = {
            tenHeThongRap: "",
            tenCumRap: "",
            tenRap: "",
            tenGhe: "",
            ngayDat: "",
            tenPhim: "",
            logoRap: "",
            hinhAnh: "",
        }
        let arrLSDV = []

        this.props.thongTinTaiKhoan.thongTinDatVe?.map((ttdv) => ttdv.danhSachGhe.map(dsg => {
            this.props.danhSachRap.map(heThongRap => {
                if (heThongRap.maHeThongRap === dsg.maHeThongRap) {
                    ve = { ...ve, logoRap: heThongRap.logo }
                }})

                this.props.listMovie.map(movie => {
                    if(movie.tenPhim === ttdv.tenPhim){
                        ve = { ...ve, hinhAnh: movie.hinhAnh}
                    }
                })

                ve = {
                    ...ve,
                    tenPhim: ttdv.tenPhim,
                    ngayDat: ttdv.ngayDat,
                    tenHeThongRap: dsg.tenHeThongRap,
                    tenCumRap: dsg.tenCumRap,
                    tenRap: dsg.tenRap,
                    tenGhe: dsg.tenGhe,
                }
                arrLSDV.push(ve);
            }));

        console.log(arrLSDV);
        return arrLSDV;
    }

    render() {
        const { loading } = this.props;

        if (loading) return <Loading />
        return (

            <div className="container my-5">
                <div class="hinhNen">
                    <img style={{ width: '100%', height: '500px' }} src="./images/vutru.jpeg" alt="" />
                </div>
                <div className="noiDung my-5" style={{ height: '100vh' }}>
                    <h3 className="my-5">Thông Tin Đặt Vé</h3>
                    <div>
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <a className="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Thông Tin Cá Nhân</a>
                                <a className="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Lịch Sử Đặt Vé</a>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">...</div>
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"
                                style={{ overflowY: "scroll", height: "600px", boxSizing: "content-box" }}>

                                {this.handleLichSuDatVe().map(ttdv => {
                                    return (
                                        <>
                                            <h4 className="text-left text-warning">Tên Phim: {ttdv.tenPhim}</h4>
                                            <div className="d-flex p-3">

                                                <div className="text-left">
                                                    <img src={ttdv.hinhAnh} alt="" style={{ width: "100px", height: "100px"}}/>
                                                </div>
                                                <div className="text-left ml-4">
                                                    <div className="d-flex">
                                                        <div className="hinhNenRap">
                                                            <img src={ttdv.logoRap} alt="" style={{ width: "40px", height: "40px"}} />
                                                        </div>
                                                        <div className="tenRap ml-2">
                                                            <h6>{ttdv.tenHeThongRap}</h6>
                                                            <p>116 Nguyễn Du, Q.1</p>
                                                        </div>
                                                    </div>

                                                    <div className="thoiGian">
                                                        ngày đặt: {moment(ttdv.ngayDat).format("DD/MM/YY HH:MM:SS")} - {ttdv.tenRap} - ghế {ttdv.tenGhe}
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                        </>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

    componentDidMount() {
        const { currentUser } = this.props;
        const user = {
            taiKhoan: currentUser?.taiKhoan,
        }

        this.props.thongTinDatVe(user);
        this.props.layDSR()
    }
}


const mapStateToProps = state => ({
    thongTinTaiKhoan: state.lichSuDatVeReducer.thongTinTaiKhoan,
    currentUser: state.authReducer.currentUser,
    danhSachRap: state.lichSuDatVeReducer.danhSachRap,

    listMovie: state.movieReducer.listMovie,
  
})


const mapDispatchToProps = dispatch => ({
    thongTinDatVe: (username) => {
        dispatch(actLichSuDatVe(username))
    },

    layDSR: () => {
        dispatch(actLaydanhSachRap())
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(LichSuDatVe);