import { AUTH_TOKEN, USER_DATA} from "../types";

const initialState = {
    token: null,
    userData: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH_TOKEN:
            return {
                ...state,
                token: action.payload
            }
            case USER_DATA:
                return {
                    ...state,
                    userData: action.payload
                }
        default:
            return state;
    }
}