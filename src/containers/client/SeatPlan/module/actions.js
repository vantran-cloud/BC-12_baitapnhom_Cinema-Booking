import bookingTicketsApi from "apis/bookingTickets";
import { FETCH_SEATPLAN_FAIL, FETCH_SEATPLAN_REQUEST, FETCH_SEATPLAN_SUCCESS } from "./types";


const actFetchSeatPlanRequest = () => ({
    type: FETCH_SEATPLAN_REQUEST
});

const actFetchSeatPlanSuccess = seatPlanInfor => ({
    type: FETCH_SEATPLAN_SUCCESS,
    payload: seatPlanInfor,
});

const actFetchSeatPlanFail = error => ({
    type: FETCH_SEATPLAN_FAIL,
    payload: error,
});

export const actFetchSeatPlan = showtimeId => {
    return dispatch  => {
        dispatch(actFetchSeatPlanRequest());
        bookingTicketsApi.seatPlanApi(showtimeId)
        .then(res => {
            dispatch(actFetchSeatPlanSuccess(res.data))
        })
        .catch(error => {
            dispatch(actFetchSeatPlanFail(error))
        })
    }
}