import React, { useContext, useState } from 'react'
import axios from 'axios'

const UserContext = React.createContext()

export function useUsers() {
    return useContext(UserContext)
}

export const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState([])
    const [success, setSuccess] = useState()
    const [loading, setLoading] = useState(false)

    async function getUser(userId = null) {
        try {
            setLoading(true)
            const { data } = userId
                ? await axios.get(`/api/user?id=${userId}`)
                : await axios.get('/api/user')
            userId ? setUser(data) : setUsers(data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.error(error.message)
        }
    }

    async function addUser(user) {
        try {
            setLoading(true)
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }

            const { data } = await axios.post('/api/user', user, config)
            setUsers((oldUser) => [...oldUser, data])
            setSuccess(true)
            setLoading(false)
        } catch (error) {
            setSuccess(false)
            setLoading(false)
            console.error(error.message)
        }
    }

    async function updateUser(user, id) {
        try {
            setLoading(true)
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }

            await axios.put(`/api/user?id=${id}`, user, config)
            setSuccess(true)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setSuccess(false)
            console.error(error.message)
        }
    }

    async function deleteUser(id) {
        try {
            setLoading(true)
            await axios.delete(`/api/user?id=${id}`)
            setSuccess(true)
            setLoading(false)
        } catch (error) {
            setSuccess(false)
            setLoading(false)
            console.error(error.message)
        }
    }

    return (
        <UserContext.Provider
            value={{
                users,
                user,
                success,
                loading,
                setSuccess,
                addUser,
                getUser,
                updateUser,
                deleteUser,
                setUser,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
