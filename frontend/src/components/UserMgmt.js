import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useUsers } from '../contexts/usersProvider'

const UserMgmt = () => {
    const { users, getUser } = useUsers()

    useEffect(() => {
        getUser()
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className="header">
                <h2>Overview</h2>
                <div className="btns">
                    <Link to="#" className="more btn">
                        ...
                    </Link>
                    <Link to="/add-user" className="btn add">
                        Add
                    </Link>
                </div>
            </div>
            <main>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Education</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users &&
                            users.map((user) => (
                                <tr key={user._id}>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.education}</td>
                                    <td>{user.phone}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </main>
        </>
    )
}

export default UserMgmt
