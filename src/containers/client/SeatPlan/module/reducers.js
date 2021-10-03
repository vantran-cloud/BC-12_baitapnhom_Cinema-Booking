import {
  FETCH_BOOKING_TICKET_FAIL,
  FETCH_BOOKING_TICKET_REQUEST,
  FETCH_BOOKING_TICKET_SUCCESS,
  FETCH_CHONGHE,
  FETCH_SEATPLAN_FAIL,
  FETCH_SEATPLAN_REQUEST,
  FETCH_SEATPLAN_SUCCESS,
} from "./types";

const initialState = {
  seatPlanInfor: {},
  loading: false,
  error: null,
  danhSachGheDuocChon: [],
};

const bookingTicketsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_SEATPLAN_REQUEST:
      return { ...state, laoding: true, error: null, danhSachGheDuocChon: [] };
    case FETCH_SEATPLAN_SUCCESS:
      return { ...state, seatPlanInfor: payload, loading: false };
    case FETCH_SEATPLAN_FAIL:
      return { ...state, error: payload, loading: false };


  case FETCH_CHONGHE:
    let danhSachGheCapNhat = [...state.danhSachGheDuocChon]
    let idx = danhSachGheCapNhat.findIndex(gheDD => gheDD.maGhe === payload.maGhe)
    if(idx !== -1) {
      danhSachGheCapNhat.splice(idx, 1)
    }else {
      danhSachGheCapNhat.push(payload)
    }

    return { ...state, danhSachGheDuocChon: danhSachGheCapNhat }

    default:
      return state;
  }
};

export default bookingTicketsReducer;
