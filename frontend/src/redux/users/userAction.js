import axios from 'axios'
import { asyncHandler } from '../../utills/asyncHandler'
import {
    ADD_USER,
    DELETE_USER,
    GET_USER,
    GET_USERS,
    UPDATE_USER,
} from './userConstant'

export const listUsers = () =>
    asyncHandler(async (dispatch) => {
        const { data } = await axios.get('/api/user')
        dispatch({
            type: GET_USERS,
            payload: data,
        })
    })

export const getUser = (id) =>
    asyncHandler(async (dispatch) => {
        const { data } = await axios.get('/api/user?id=' + id)
        dispatch({
            type: GET_USER,
            payload: data,
        })
    })

export const addUser = (user) =>
    asyncHandler(async (dispatch) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const { data } = await axios.post(`/api/user`, user, config)
        dispatch({
            type: ADD_USER,
            payload: data,
        })
    })

export const updateUser = (user, id) =>
    asyncHandler(async (dispatch) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const { data } = await axios.put(`/api/user?id=${id}`, user, config)
        dispatch({
            type: UPDATE_USER,
            payload: data.user,
        })
    })

export const deleteUser = (id) =>
    asyncHandler(async (dispatch) => {
        await axios.delete(`/api/user?id=${id}`)
        dispatch({
            type: DELETE_USER,
            payload: id,
        })
    })
