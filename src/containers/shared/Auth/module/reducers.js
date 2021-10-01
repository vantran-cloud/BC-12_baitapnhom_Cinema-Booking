import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./types";

const initialState = {
  currentUser: null,
  loading: false,
  errors: null,

  userInfor: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, currentUser: payload, loading: false };
    case LOGIN_FAIL:
      return { ...state, errors: payload, loading: false };

    case REGISTER_REQUEST:
      return { ...state, loading: true, error: null };
    case REGISTER_SUCCESS:
      return { ...state, userInfor: payload, loading: false };
    case REGISTER_FAIL:
      return { ...state, error: payload, loading: false };

    case LOG_OUT:
      return { ...state, currentUser: payload, userInfor: null };
    default:
      return state;
  }
};

export default authReducer;
