import movieApi from "apis/movieApi";
import userApi from "apis/userApi";
import { LAYDANHSACHRAP, LICHSUDATVE_FAIL, LICHSUDATVE_REQUEST, LICHSUDATVE_SUCCESS } from "./types"

const actLichSuDatVeRequest = () => ({
    type: LICHSUDATVE_REQUEST,
});

const actLichSuDatVeSuccess = thongTinTaiKhoan => ({
    type: LICHSUDATVE_SUCCESS,
    payload: thongTinTaiKhoan,
});

const actLichSuDatVeFail = error => ({
    type: LICHSUDATVE_FAIL,
    payload: error,
});

export const actLichSuDatVe = (username) => {
    return dispatch => {
        dispatch(actLichSuDatVeRequest());
        userApi.lichSuDatVeApi(username)
        .then(res => {
            // console.log(res)
            dispatch(actLichSuDatVeSuccess(res.data))
        })
        .catch(error => {
            dispatch(actLichSuDatVeFail(error))
        })
    }
}

const actLayDanhSachRapSuccess = (dsr) => ({
    type: LAYDANHSACHRAP,
    payload: dsr
})

export const actLaydanhSachRap = () => {
    return dispatch => {
        movieApi.fetchLayThongTinHeThongRapApi()
        .then(res => {
            dispatch(actLayDanhSachRapSuccess(res.data))
        })
        .catch(error => {
            console.log(error)
        })
    }
}