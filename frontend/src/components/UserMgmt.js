import React from 'react'
import { Link } from 'react-router-dom'
import { useUsers } from '../contexts/usersProvider'

const UserMgmt = () => {
    const { users } = useUsers()

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
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Education</th>
                        <th>Phone</th>
                    </tr>
                    {users &&
                        users.map((user) => (
                            <tr>
                                <td>{user.fname}</td>
                                <td>{user.lname}</td>
                                <td>{user.email}</td>
                                <td>{user.education}</td>
                                <td>{user.phone}</td>
                            </tr>
                        ))}
                </table>
            </main>
        </>
    )
}

export default UserMgmt
