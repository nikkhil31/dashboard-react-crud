import React, { useEffect } from 'react'
import { MdDelete, MdModeEdit } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import { deleteCategory, listCategory } from '../redux/category/categoryAction'

const CategoryMgmt = () => {
    const dispatch = useDispatch()

    const { categories } = useSelector((state) => state.categories)

    useEffect(() => {
        dispatch(listCategory())
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
                dispatch(deleteCategory(id))
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
                    <Link to="/category/add" className="btn add">
                        Add
                    </Link>
                </div>
            </div>

            <main>
                <table>
                    <thead>
                        <tr>
                            <th>Sr.</th>
                            <th>Category Name</th>
                            <th>Short Description</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories &&
                            categories.map((category, key) => (
                                <tr key={category._id}>
                                    <td>{key + 1}</td>
                                    <td>{category.categoryName}</td>
                                    <td>{category.shortDescription}</td>
                                    <td>
                                        <Link
                                            to={`/category/edit/${category._id}`}
                                        >
                                            <MdModeEdit />
                                        </Link>
                                    </td>
                                    <td>
                                        <MdDelete
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => {
                                                return handleDelete(
                                                    category._id
                                                )
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

export default CategoryMgmt
