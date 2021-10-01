import { FETCHLISTUSER } from "./types";

const initialState = {
    listUser: '',
}

const userListReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case FETCHLISTUSER:
        return { ...state, listUser: payload }

    default:
        return state
    }
}

export default userListReducer;