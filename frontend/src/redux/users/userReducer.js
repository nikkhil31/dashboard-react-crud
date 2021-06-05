import {
    ADD_USER,
    CLEAR_USER,
    DELETE_USER,
    GET_USER,
    GET_USERS,
    UPDATE_USER,
} from './userConstant'

export const userReducer = (state = { users: [], user: {} }, action) => {
    switch (action.type) {
        case GET_USERS:
            return { ...state, users: action.payload }

        case GET_USER:
            return { ...state, user: action.payload }

        case ADD_USER:
            return { ...state, users: [...state.users, action.payload] }

        case UPDATE_USER:
            return {
                ...state,
                users: state.users.map((user) =>
                    user._id === action.payload._id ? action.payload : user
                ),
            }

        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(
                    (user) => user._id !== action.payload
                ),
            }

        case CLEAR_USER:
            return { ...state, user: {} }

        default:
            return state
    }
}
