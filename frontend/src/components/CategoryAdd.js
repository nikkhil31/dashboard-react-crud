import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import * as Yup from 'yup'
import {
    getCategory,
    updateCategory,
    addCategory,
} from '../redux/category/categoryAction'
import { CLEAR_CATEGORY } from '../redux/category/categoryConstant'

const addCategorySchema = Yup.object().shape({
    categoryName: Yup.string().required(),
    shortDesc: Yup.string().required(),
})

const CategoryAdd = ({ match, history }) => {
    const dispatch = useDispatch()

    const { category } = useSelector((state) => state.categories)

    const { success: globalSuccess } = useSelector((state) => state.global)

    const categoryId = match.params.id || null

    const [success, setSuccess] = useState(false)

    useEffect(() => {
        if (categoryId) {
            dispatch(getCategory(categoryId))
        } else {
            dispatch({ type: CLEAR_CATEGORY })
        }
    }, [categoryId, history, dispatch])

    const submitHandler = (value) => {
        categoryId
            ? dispatch(updateCategory(value, categoryId))
            : dispatch(addCategory(value))
        setSuccess(true)
    }

    return (
        <>
            {success && globalSuccess && <Redirect to="/category" />}
            <div>
                <div className="header">
                    <h2>
                        <Link to="/category">
                            <IoIosArrowRoundBack
                                style={{
                                    verticalAlign: 'middle',
                                    width: '40px',
                                    height: '40px',
                                    color: '#414141',
                                    marginRight: '1rem',
                                }}
                            />
                        </Link>
                        Add Category
                    </h2>
                    <div className="btns"></div>
                </div>
                <main>
                    <Formik
                        enableReinitialize
                        initialValues={{
                            categoryName: category.categoryName || '',
                            shortDesc: category.shortDescription || '',
                        }}
                        validationSchema={addCategorySchema}
                        onSubmit={submitHandler}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <div className="form-container">
                                    <div className="form-group span-2">
                                        <label htmlFor="name">
                                            Category Name
                                        </label>
                                        <Field
                                            className="form-element"
                                            type="text"
                                            name="categoryName"
                                            id="categoryName"
                                        />
                                        <ErrorMessage
                                            name="categoryName"
                                            component="span"
                                            className="error"
                                        />
                                    </div>
                                    <div className="form-group span-2">
                                        <label htmlFor="shortDesc">
                                            Short Description
                                        </label>
                                        <Field
                                            as="textarea"
                                            className="textarea form-element"
                                            name="shortDesc"
                                            id="shortDesc"
                                        />
                                        <ErrorMessage
                                            name="shortDesc"
                                            component="span"
                                            className="error"
                                        />
                                    </div>
                                    <div className="form-group submit-btn span-2">
                                        <Field
                                            name="submit"
                                            type="submit"
                                            defaultValue="submit"
                                        />
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </main>
            </div>
        </>
    )
}

export default CategoryAdd
