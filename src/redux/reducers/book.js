import {GET_ALL_BOOK, } from "../types";

const initialState = {
    getAllBook: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_BOOK:
            return {
                ...state,
                getAllBook: action.payload
            }
          
        default:
            return state;
    }
}