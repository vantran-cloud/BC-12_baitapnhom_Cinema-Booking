import { GROUP_ID } from "settings/apiConfig";
import callApi from "utils/callApi";

const userApi = {
    loginApi(user) {
        return callApi('QuanLyNguoiDung/DangNhap', 'POST', user);
    },

    registerApi(user) {
        return callApi('QuanLyNguoiDung/DangKy', 'POST', user);
    },

    fetchListUser() {
        return callApi(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}`)
    },

    lichSuDatVeApi(username) {
        return callApi('QuanLyNguoiDung/ThongTinTaiKhoan', 'POST', username)
    },
}

export default userApi;