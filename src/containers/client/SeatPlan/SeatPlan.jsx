import React, { Component } from 'react';
import './SeatPlan.scss';
import { connect } from 'react-redux';
import { actFetchSeatPlan } from './module/actions';
import Loading from 'components/Loading/Loading';
import { Fragment } from 'react';
import { CloseOutlined } from '@ant-design/icons'

class SeatPlan extends Component {
    render() {
        const { seatPlanInfor, loading } = this.props;
        if (loading) return <Loading />
        const { thongTinPhim, danhSachGhe } = seatPlanInfor;

        const renderSeats = () => {
            return danhSachGhe?.map((ghe, idx) => {

                let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
                let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';
                return <Fragment key={idx}>
                    <button disabled={ghe.daDat} style={{ fontSize: '12px' }} className={`ghe ${classGheVip} ${classGheDaDat} text-center`} key={idx}>
                        {ghe.daDat ? <CloseOutlined style={{ marginBottom: 7.5 }} /> : ghe.stt}

                    </button>

                    {(idx + 1) % 16 === 0 ? <br /> : ''}
                </Fragment>
            })
        }

        return (
            <div className='container'>
                <p className=" my-5 ">Thời gian còn lại: </p>
                <div className="content">

                    <div className="row">
                        <div className="col-8 left">
                            <div className="text-left" style={{ width: '90%', height: '10px', backgroundColor: "orange" }}>
                            </div>
                            <div className="trapezoid">
                                <h6 className="pt-2">màn hình</h6>
                            </div>
                            <div>
                                {renderSeats()}
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
                                    <p>H-1</p>
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
                                    <p>75000</p>
                                </div>
                            </div>
                            <hr />
                            <button className="btn-booking">Booking Ticket</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        const { showtimeId } = this.props.match.params;
        this.props.fetchSeatPlan(showtimeId)

    }
}

const mapStateToProps = state => ({
    seatPlanInfor: state.bookingTicketsReducer.seatPlanInfor,
    loading: state.bookingTicketsReducer.loading,
})

const mapDispatchToProps = dispatch => ({
    fetchSeatPlan: showtimeId => {
        dispatch(actFetchSeatPlan(showtimeId))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(SeatPlan);