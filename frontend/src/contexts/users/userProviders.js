import React, { useContext, useReducer } from 'react'
import { userAction } from './userAction'
import { userReducer } from './userReducer'

const UserContext = React.createContext()

export function useUsers() {
    return useContext(UserContext)
}

const UserProviders = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        loading: false,
        error: '',
        success: false,
    }

    const [state, dispatch] = useReducer(userReducer, initialState)

    const action = userAction(dispatch)

    return (
        <UserContext.Provider
            value={{
                users: state.users,
                user: state.user,
                error: state.error,
                loading: state.loading,
                success: state.success,
                dispatch,
                ...action,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserProviders
