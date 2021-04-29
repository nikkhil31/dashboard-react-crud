import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useUsers } from '../contexts/users/userProviders'
import { MdDelete, MdModeEdit } from 'react-icons/md'
import Loader from 'react-loader-spinner'

const UserMgmt = () => {
    const { loading, users, getUsers, deleteUser } = useUsers()

    useEffect(() => {
        getUsers()
        // eslint-disable-next-line
    }, [])

    const handleDelete = (id) => {
        if (window.confirm('Are you sure, want to delete this?')) {
            deleteUser(id)
        }
    }

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
                {loading ? (
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        className="loader-class"
                    />
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Sr.</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Education</th>
                                <th>Phone</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users &&
                                users.map((user, key) => (
                                    <tr key={user._id}>
                                        <td>{key + 1}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.educationInWord}</td>
                                        <td>{user.phone}</td>
                                        <td>
                                            <Link to={`/edit-user/${user._id}`}>
                                                <MdModeEdit />
                                            </Link>
                                        </td>
                                        <td>
                                            <MdDelete
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    return handleDelete(
                                                        user._id
                                                    )
                                                }}
                                            />
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                )}
            </main>
        </>
    )
}

export default UserMgmt
