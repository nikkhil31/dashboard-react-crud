import React, { useContext, useState } from 'react'

const UserContext = React.createContext()

export function useUsers() {
    return useContext(UserContext)
}

export const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([])

    function addUser(user) {
        setUsers((oldUser) => [...oldUser, user])
    }

    return (
        <UserContext.Provider value={{ users, addUser }}>
            {children}
        </UserContext.Provider>
    )
}
