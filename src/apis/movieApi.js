import { GROUP_ID } from "settings/apiConfig";
import callApi from "utils/callApi";

const movieApi = {
    fetchAllhMovieApi(movieName = "") {
        if (movieName !== '') {
            return callApi(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}&tenPhim=${movieName}`)
        }

        return callApi(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`)
    },

    fetchMovieDetailApi(movieId) {
        return callApi(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`)
    },

    fetchTheaterApi() {
        return callApi(`QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`)
    },

    fetchLayThongTinHeThongRapApi() {
        return callApi('QuanLyRap/LayThongTinHeThongRap')
    }
}

export default movieApi;