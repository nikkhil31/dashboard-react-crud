import axios from 'axios'
import { asyncHandler } from '../../utills/asyncHandler'
import {
    ADD_CATEGORY,
    DELETE_CATEGORY,
    GET_CATEGORIES,
    GET_CATEGORY,
    UPDATE_CATEGORY,
} from './categoryConstant'

export const listCategory = () =>
    asyncHandler(async (dispatch) => {
        const { data } = await axios.get('/api/category')
        dispatch({
            type: GET_CATEGORIES,
            payload: data,
        })
    })

export const getCategory = (id) =>
    asyncHandler(async (dispatch) => {
        const { data } = await axios.get('/api/category?id=' + id)
        dispatch({
            type: GET_CATEGORY,
            payload: data,
        })
    })

export const addCategory = (category) =>
    asyncHandler(async (dispatch) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const { data } = await axios.post(`/api/category`, category, config)
        dispatch({
            type: ADD_CATEGORY,
            payload: data,
        })
    })

export const updateCategory = (category, id) =>
    asyncHandler(async (dispatch) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const { data } = await axios.put(
            `/api/category?id=${id}`,
            category,
            config
        )
        dispatch({
            type: UPDATE_CATEGORY,
            payload: data.category,
        })
    })

export const deleteCategory = (id) =>
    asyncHandler(async (dispatch) => {
        await axios.delete(`/api/category?id=${id}`)
        dispatch({
            type: DELETE_CATEGORY,
            payload: id,
        })
    })
