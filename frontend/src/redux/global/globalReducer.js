import { SET_FAIL, SET_LOADRNG, SET_SUCCESS } from './globalConstant'

export const globalReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_LOADRNG:
            return { loading: true, success: false }

        case SET_SUCCESS:
            return {
                loading: false,
                success: true,
                message: action.payload || '',
                fail: false,
                error: '',
            }

        case SET_FAIL:
            return { loading: false, fail: true, error: action.payload || '' }

        default:
            return state
    }
}
