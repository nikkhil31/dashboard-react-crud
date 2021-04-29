import {
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAIL,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    CLEAR_SUCCESS,
    CLEAR_USER,
    ADD_USER_REQUEST,
    ADD_USER_SUCCESS,
    ADD_USER_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
} from './userConstant'

export const userReducer = (state, action) => {
    switch (action.type) {
        case GET_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            }

        case GET_USERS_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }

        case GET_USER_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case GET_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false,
            }

        case GET_USER_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }

        case ADD_USER_REQUEST:
            return {
                ...state,
                success: false,
                loading: true,
            }

        case ADD_USER_SUCCESS:
            return {
                ...state,
                success: true,
                loading: false,
            }

        case ADD_USER_FAIL:
            return {
                ...state,
                error: action.payload,
                success: false,
                loading: false,
            }

        case UPDATE_USER_REQUEST:
            return {
                ...state,
                success: false,
                loading: true,
            }

        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                success: true,
                loading: false,
            }

        case UPDATE_USER_FAIL:
            return {
                ...state,
                error: action.payload,
                success: false,
                loading: false,
            }

        case DELETE_USER_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case DELETE_USER_SUCCESS:
            return {
                ...state,
                users: state.users.filter((user) => {
                    return user._id !== action.payload
                }),
                loading: false,
            }

        case DELETE_USER_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }

        case CLEAR_SUCCESS:
            return {
                ...state,
                success: false,
            }

        case CLEAR_USER:
            return {
                ...state,
                user: {},
            }

        default:
            return {}
    }
}
