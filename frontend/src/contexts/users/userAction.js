import axios from 'axios'
import {
    ADD_USER_FAIL,
    ADD_USER_REQUEST,
    ADD_USER_SUCCESS,
    DELETE_USER_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    GET_USERS_FAIL,
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USER_FAIL,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    UPDATE_USER_FAIL,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
} from './userConstant'

export const userAction = (dispatch) => {
    const action = {}

    action.getUsers = async () => {
        try {
            dispatch({ type: GET_USERS_REQUEST })
            const { data } = await axios.get('/api/user')
            dispatch({ type: GET_USERS_SUCCESS, payload: data })
        } catch (error) {
            dispatch({ type: GET_USERS_FAIL, payload: error.message })
        }
    }

    action.getUser = async (id) => {
        try {
            dispatch({ type: GET_USER_REQUEST })
            const { data } = await axios.get('/api/user?id=' + id)
            dispatch({ type: GET_USER_SUCCESS, payload: data })
        } catch (error) {
            dispatch({ type: GET_USER_FAIL, payload: error.message })
        }
    }

    action.addUser = async (user) => {
        try {
            dispatch({ type: ADD_USER_REQUEST })
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }

            await axios.post(`/api/user`, user, config)
            dispatch({ type: ADD_USER_SUCCESS })
        } catch (error) {
            dispatch({ type: ADD_USER_FAIL, payload: error.message })
        }
    }

    action.updateUser = async (user, id) => {
        try {
            dispatch({ type: UPDATE_USER_REQUEST })
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }

            await axios.put(`/api/user?id=${id}`, user, config)
            dispatch({ type: UPDATE_USER_SUCCESS })
        } catch (error) {
            dispatch({ type: UPDATE_USER_FAIL, payload: error.message })
        }
    }

    action.deleteUser = async (id) => {
        try {
            dispatch({ type: DELETE_USER_REQUEST })

            await axios.delete(`/api/user?id=${id}`)
            dispatch({ type: DELETE_USER_SUCCESS, payload: id })
        } catch (error) {
            dispatch({ type: DELETE_USER_FAIL, payload: error.message })
        }
    }

    return action
}
