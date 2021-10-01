import { FETCH_ALL_MOVIE_FAIL, FETCH_ALL_MOVIE_REQUEST, FETCH_ALL_MOVIE_SUCCESS } from "./types";
import movieApi from "apis/movieApi";

const actFetchAllMovieRequest = () => ({
    type: FETCH_ALL_MOVIE_REQUEST,
});

const actFetchAllMovieSuccess = listMovie => ({
    type: FETCH_ALL_MOVIE_SUCCESS,
    payload: listMovie,
});

const actFetchAllMovieFail = error => ({
    Type: FETCH_ALL_MOVIE_FAIL,
    payload: error,
})

export const actFetchAllMovie = () => {
    return dispatch => {
        dispatch(actFetchAllMovieRequest());
        movieApi.fetchAllhMovieApi()
        .then(res => {
            dispatch(actFetchAllMovieSuccess(res.data))
        })
       .catch(err => {
           dispatch(actFetchAllMovieFail(err))
       });
    };
};
