import callApi from "utils/callApi";

const bookingTicketsApi = {
    seatPlanApi (showtimeId) {
        return callApi (`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${showtimeId}`)
    }
}

export default bookingTicketsApi;
