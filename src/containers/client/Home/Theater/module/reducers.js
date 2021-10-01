import {
  FETCH_THEATER_FAIL,
  FETCH_THEATER_REQUEST,
  FETCH_THEATER_SUCCESS,
} from "./types";

const initialState = {
  theater: [],
  loading: false,
  error: null,
};

const theaterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_THEATER_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_THEATER_SUCCESS:
      return { ...state, theater: payload, loading: false };
    case FETCH_THEATER_FAIL:
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
};

export default theaterReducer;
