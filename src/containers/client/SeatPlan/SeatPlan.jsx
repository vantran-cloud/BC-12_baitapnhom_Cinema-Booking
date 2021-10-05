import React, { Component } from 'react';
import './SeatPlan.scss';
import { connect } from 'react-redux';
import { actChonGhe, actDatVe, actFetchSeatPlan } from './module/actions';
import Loading from 'components/Loading/Loading';
import { Fragment } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import _ from "lodash";
import { withRouter } from 'react-router-dom';
import CountDown from 'containers/count-down/CountDown';

class SeatPlan extends Component {

    renderSeats = () => {
        const { danhSachGheDuocChon, seatPlanInfor } = this.props
        const { danhSachGhe } = seatPlanInfor;

        return danhSachGhe?.map((ghe, idx) => {

            let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
            let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';
            let classGheDangDat = '';
            let idxGheDangDat = danhSachGheDuocChon.findIndex(gheDD => gheDD.maGhe === ghe.maGhe)
            if (idxGheDangDat != -1) {
                classGheDangDat = 'gheDangChon';
            }
            return <Fragment key={idx}>
                <button onClick={() => {
                    this.props.fetchChonGhe(ghe)

                }}
                    disabled={ghe.daDat} style={{ fontSize: '12px' }} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} text-center`} key={idx}>
                    {ghe.daDat ? <CloseOutlined style={{ marginBottom: 7.5 }} /> : ghe.stt}

                </button>

                {(idx + 1) % 16 === 0 ? <br /> : ''}
            </Fragment>
        })
    };

    handleDatVe = () => {
        const { danhSachGheDuocChon, currentUser } = this.props;
        if (danhSachGheDuocChon.length === 0) {
            alert('chưa chọn ghế, hãy chọn ghế!')
        } else {
            let thongTinDatVe = {
                maLichChieu: this.props.match.params.showtimeId,
                danhSachVe: danhSachGheDuocChon,
                taiKhoanNguoiDung: currentUser.taiKhoan,
            }
            this.props.fetchDatve(thongTinDatVe, currentUser.accessToken, thongTinDatVe.maLichChieu)
            alert('đặt vé thành công!')
            this.props.history.push('/');
        }
    }

    render() {
        const { seatPlanInfor, loading, danhSachGheDuocChon } = this.props;
        if (loading) return <Loading />
        const { thongTinPhim, danhSachGhe } = seatPlanInfor;


        return (
            <div className='container'>
                <div className="row">
                    <div className="col-5 my-5"></div>
                    <div className="col-7 my-5 text-left">
                        <div style={{ color: 'red' }}>
                            Thời gian còn lại:
                        </div>
                        <CountDown />
                    </div>
                </div>

                <div className="content mb-5">

                    <div className="row">
                        <div className="col-8 left">
                            <div className="text-left" style={{ width: '90%', height: '10px', backgroundColor: "orange" }}>
                            </div>
                            <div className="trapezoid">
                                <h6 className="pt-2">màn hình</h6>
                            </div>
                            <div>
                                {this.renderSeats()}
                            </div>

                            <div className="noteSeat container mt-5 text-left">
                                <div className="row">
                                    <div className="col-3">
                                        <div className="d-flex">
                                            <button className="ghe" style={{ border: 'none', cursor: "unset" }}></button>
                                            <p className="ml-2 mt-2">ghế thường </p>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="d-flex">
                                            <button className="ghe gheDaDat" style={{ border: 'none', cursor: "unset" }}></button>
                                            <p className="ml-2 mt-2">ghế đã đặt </p>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="d-flex">
                                            <button className="ghe gheDangChon" style={{ border: 'none', cursor: "unset" }}></button>
                                            <p className="ml-2 mt-2" style={{ fontSize: '13px' }}>ghế đang chọn </p>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="d-flex">
                                            <button className="ghe gheVip" style={{ border: 'none', cursor: "unset" }}></button>
                                            <p className="ml-1 mt-2">ghế Vip </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-4 right">
                            <h3>Tên phim: {thongTinPhim?.tenPhim}</h3>
                            <hr />
                            <div className="row d-flex">
                                <div className="col-6 text-left">
                                    <p>Thời gian chiếu</p>
                                </div>
                                <div className="col-6 text-right">
                                    <p>{thongTinPhim?.gioChieu} - {thongTinPhim?.ngayChieu}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row d-flex">
                                <div className="col-6 text-left">
                                    <p>Cụm rạp</p>
                                </div>
                                <div className="col-6 text-right">
                                    <p>{thongTinPhim?.tenCumRap}</p>
                                </div>
                            </div>

                            <hr />
                            <div className="row d-flex">
                                <div className="col-6 text-left">
                                    <p>Rạp</p>
                                </div>
                                <div className="col-6 text-right">
                                    <p>{thongTinPhim?.tenRap}</p>
                                </div>
                            </div>

                            <hr />
                            <div className="row d-flex">
                                <div className="col-6 text-left">
                                    <p>Chọn ghế</p>
                                </div>
                                <div className="col-6 text-right mb-5">
                                    <p>{_.sortBy(danhSachGheDuocChon, ['stt'])?.map((gheDD, idx) => {
                                        return <span key={idx}> {gheDD.stt}</span>
                                    })}</p>
                                </div>
                            </div>

                            <div className="row d-flex">
                                <div className="col-6 text-left">
                                    <p>Ưu đãi</p>
                                </div>
                                <div className="col-6 text-right">
                                    <p>0%</p>
                                </div>
                            </div>
                            <hr />

                            <div className="row d-flex">
                                <div className="col-6 text-left">
                                    <p>Tổng tiền</p>
                                </div>
                                <div className="col-6 text-right">
                                    <p>{danhSachGheDuocChon?.reduce((tongTien, ghe, idx) => {
                                        return tongTien += ghe.giaVe;
                                    }, 0).toLocaleString()} VND</p>
                                </div>
                            </div>
                            <hr />
                            <button className="btn-booking" onClick={this.handleDatVe}>Booking Ticket</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        const { showtimeId } = this.props.match.params;
        this.props.fetchSeatPlan(showtimeId);

    }
}

const mapStateToProps = state => ({
    seatPlanInfor: state.bookingTicketsReducer.seatPlanInfor,
    loading: state.bookingTicketsReducer.loading,
    currentUser: state.authReducer.currentUser,

    danhSachGheDuocChon: state.bookingTicketsReducer.danhSachGheDuocChon,
})

const mapDispatchToProps = dispatch => ({
    fetchSeatPlan: showtimeId => {
        dispatch(actFetchSeatPlan(showtimeId))
    },

    fetchChonGhe: ghe => {
        dispatch(actChonGhe(ghe))
    },

    fetchDatve: (thongTinDatVe, token, showtimeId) => {
        dispatch((actDatVe(thongTinDatVe, token, showtimeId)))
    }

})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SeatPlan));