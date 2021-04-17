import React, { useContext, useState } from 'react'
import axios from 'axios'

const UserContext = React.createContext()

export function useUsers() {
    return useContext(UserContext)
}

export const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([])

    async function getUser() {
        try {
            const { data } = await axios.get('/api/user')
            setUsers(data)
        } catch (error) {
            console.error(error.message)
        }
    }

    async function addUser(user) {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }

            const { data } = await axios.post('/api/user', user, config)
            setUsers((oldUser) => [...oldUser, data])
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <UserContext.Provider value={{ users, addUser, getUser }}>
            {children}
        </UserContext.Provider>
    )
}
