import bookingTicketsApi from "apis/bookingTickets";
import {
  DATVE,
  FETCH_CHONGHE,
  FETCH_SEATPLAN_FAIL,
  FETCH_SEATPLAN_REQUEST,
  FETCH_SEATPLAN_SUCCESS,
} from "./types";

const actFetchSeatPlanRequest = () => ({
  type: FETCH_SEATPLAN_REQUEST,
});

const actFetchSeatPlanSuccess = (seatPlanInfor) => ({
  type: FETCH_SEATPLAN_SUCCESS,
  payload: seatPlanInfor,
});

const actFetchSeatPlanFail = (error) => ({
  type: FETCH_SEATPLAN_FAIL,
  payload: error,
});



export const actFetchSeatPlan = (showtimeId) => {
  return (dispatch) => {
    dispatch(actFetchSeatPlanRequest());
    bookingTicketsApi
      .seatPlanApi(showtimeId)
      .then((res) => {
        dispatch(actFetchSeatPlanSuccess(res.data));
      })
      .catch((error) => {
        dispatch(actFetchSeatPlanFail(error));
      });
  };
};

export const actChonGhe = ghe => {
  return {
    type: FETCH_CHONGHE,
    payload: ghe,
  }
}

export const actDatVe = ((thongTinDatVe, token, showtimeId) => {
  return async dispatch => {
    try {
      const res = await bookingTicketsApi.bookTicketApi(thongTinDatVe, token)
      console.log(res.data)
      await dispatch(actFetchSeatPlan(showtimeId))
    }
    catch(error){
      console.log(error)
    }
  }
   
  
})