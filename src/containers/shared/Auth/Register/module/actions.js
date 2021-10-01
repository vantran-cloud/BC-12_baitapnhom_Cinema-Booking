import userApi from "apis/userApi"
import { FETCHLISTUSER } from "./types"

const actFetchUserListSuccess = (listUser) => ({
    type: FETCHLISTUSER,
    payload: listUser,
})

export const actFetchUserList = () => {
    return dispatch => {
        userApi.fetchListUser()
        .then( res => {
            dispatch(actFetchUserListSuccess(res.data))
        })
        .catch(err => {
            console.log(err)
        })
    }
}