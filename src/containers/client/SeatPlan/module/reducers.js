import { FETCH_SEATPLAN_FAIL, FETCH_SEATPLAN_REQUEST, FETCH_SEATPLAN_SUCCESS } from "./types";

const initialState = {
    seatPlanInfor: {},
    loading: false,
    error: null,
}

const bookingTicketsReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case FETCH_SEATPLAN_REQUEST:
        return { ...state, laoding: true, error: null }
    case FETCH_SEATPLAN_SUCCESS:
        return { ...state, seatPlanInfor: payload, loading: false }
    case FETCH_SEATPLAN_FAIL:
        return { ...state, error: payload, loading: false }

    default:
        return state
    }
}

export default bookingTicketsReducer;