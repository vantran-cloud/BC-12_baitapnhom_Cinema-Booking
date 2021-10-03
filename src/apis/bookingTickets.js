import callApi from "utils/callApi";

const bookingTicketsApi = {
    seatPlanApi (showtimeId) {
        return callApi (`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${showtimeId}`)
    },

    bookTicketApi (thongTinDatVe, token) {
        return callApi ('QuanLyDatVe/DatVe', 'POST', thongTinDatVe, token)
    },

}

export default bookingTicketsApi;
