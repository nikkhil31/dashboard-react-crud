import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import { MdDelete, MdModeEdit } from 'react-icons/md'
// import Loader from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, listUsers } from '../redux/users/userAction'

const UserMgmt = () => {
    const dispatch = useDispatch()

    const { users } = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(listUsers())
    }, [dispatch])

    const handleDelete = (id) => {
        swal({
            title: 'Are you sure?',
            text: 'Once deleted, you will not be able to recover this data!',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                dispatch(deleteUser(id))
            }
        })
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
                                                return handleDelete(user._id)
                                            }}
                                        />
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </main>
        </>
    )
}

export default UserMgmt
