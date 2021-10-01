import userApi from "apis/userApi";
import { LOGIN_FAIL, 
  LOGIN_REQUEST, 
  LOGIN_SUCCESS, 
  LOG_OUT, 
  REGISTER_FAIL, 
  REGISTER_REQUEST,
  REGISTER_SUCCESS, 
} from "./types";

const actLoginRequest = () => ({
  type: LOGIN_REQUEST,
});

const actLoginSuccess = (currentUser) => ({
  type: LOGIN_SUCCESS,
  payload: currentUser,
});

const actLoginFail = (error) => ({
  type: LOGIN_FAIL,
  payload: error,
});


//register
const actRegisterRequest = () => ({
  type: REGISTER_REQUEST,
});

const actRegisterSuccess = (userInfor) => ({
  type: REGISTER_SUCCESS,
  payload: userInfor,
});

const actRegisterFail = error => ({
  type: REGISTER_FAIL,
  payload: error,
})





//login
export const actLogin = (user) => {
  return (dispatch) => {
    dispatch(actLoginRequest());
    userApi
      .loginApi(user)
      .then((res) => {
        dispatch(actLoginSuccess(res.data));
      })
      .catch((error) => {
        dispatch(actLoginFail(error));
      });
  };
};


//logout
export const actLogOut = () => ({
  type: LOG_OUT,
  payload: null,
});


//register

export const actRegister = user => {
  return dispatch  => {
    dispatch(actRegisterRequest());
    userApi.registerApi(user)
    .then( res => {
      dispatch(actRegisterSuccess(res.data))
    })
    .catch(error => {
      dispatch(actRegisterFail(error))
    })
  }
}