import {
    SET_FAIL,
    SET_LOADRNG,
    SET_SUCCESS,
} from '../redux/global/globalConstant'

export const asyncHandler = (fn) => async (dispatch) => {
    try {
        dispatch({
            type: SET_LOADRNG,
        })
        await fn(dispatch)
        dispatch({
            type: SET_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type: SET_FAIL,
            payload: error.response?.statusText || error.message,
        })
    }
}
