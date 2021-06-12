import {
    ADD_CATEGORY,
    CLEAR_CATEGORY,
    DELETE_CATEGORY,
    GET_CATEGORIES,
    GET_CATEGORY,
    UPDATE_CATEGORY,
} from './categoryConstant'

export const categoryReducer = (
    state = { categories: [], category: {} },
    action
) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return { ...state, categories: action.payload }

        case GET_CATEGORY:
            return { ...state, category: action.payload }

        case ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.payload],
            }

        case UPDATE_CATEGORY:
            return {
                ...state,
                categories: state.categories.map((category) =>
                    category._id === action.payload._id
                        ? action.payload
                        : category
                ),
            }

        case DELETE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter(
                    (category) => category._id !== action.payload
                ),
            }

        case CLEAR_CATEGORY:
            return { ...state, category: {} }

        default:
            return state
    }
}
