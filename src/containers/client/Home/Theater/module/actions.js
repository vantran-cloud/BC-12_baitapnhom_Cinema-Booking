import movieApi from "apis/movieApi";
import {
  FETCH_THEATER_SUCCESS,
  FETCH_THEATER_REQUEST,
  FETCH_THEATER_FAIL,
} from "./types";

const actFetchTheaterRequest = () => ({
  type: FETCH_THEATER_REQUEST,
});

const actFetchTheaterSuccess = (theater) => ({
  type: FETCH_THEATER_SUCCESS,
  payload: theater,
});

const actFetchTheaterFail = (error) => ({
  type: FETCH_THEATER_FAIL,
  payload: error,
});

export const actFetchTheater = () => {
  return (dispatch) => {
    dispatch(actFetchTheaterRequest());
    movieApi
      .fetchTheaterApi()
      .then((res) => {
        dispatch(actFetchTheaterSuccess(res.data));
      })
      .catch((error) => {
        dispatch(actFetchTheaterFail(error));
      });
  };
};


