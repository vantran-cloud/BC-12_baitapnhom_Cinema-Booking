import { LAYDANHSACHRAP, LICHSUDATVE_FAIL, LICHSUDATVE_REQUEST, LICHSUDATVE_SUCCESS } from "./types";

const initialState = {
    thongTinTaiKhoan: {},
    loading: false,
    error: null,
    danhSachRap: [],
}

const lichSuDatVeReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case LICHSUDATVE_REQUEST:
        return { ...state, loading: true, error: null }
    case LICHSUDATVE_SUCCESS:
        return { ...state, thongTinTaiKhoan: payload, loading: false }
    case LICHSUDATVE_FAIL:
        return { ...state, error: payload, loading: false } 
    
    case LAYDANHSACHRAP:
        return { ...state, danhSachRap: payload }
    default:
        return state
    }
}

export default lichSuDatVeReducer;