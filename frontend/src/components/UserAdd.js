import React, { useEffect, useState } from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Link, Redirect } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, getUser, updateUser } from '../redux/users/userAction'
import { CLEAR_USER } from '../redux/users/userConstant'

const addUserSchema = Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().email().required(),
    dob: Yup.string().required(),
    phone: Yup.number().required(),
    education: Yup.string().required(),
    address: Yup.string().required(),
})

const UserAdd = ({ match, history }) => {
    const dispatch = useDispatch()

    const { success: globalSuccess } = useSelector((state) => state.global)

    const { user } = useSelector((state) => state.users)

    const userId = match.params.id || null

    const [success, setSuccess] = useState(false)

    useEffect(() => {
        if (userId) {
            dispatch(getUser(userId))
        } else {
            dispatch({ type: CLEAR_USER })
        }
    }, [userId, history, dispatch])

    const submitHandler = (value) => {
        userId ? dispatch(updateUser(value, userId)) : dispatch(addUser(value))
        setSuccess(true)
    }

    return (
        <>
            {success && globalSuccess && <Redirect to="/user" />}
            <div>
                <div className="header">
                    <h2>
                        <Link to="/user">
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
                        Add User
                    </h2>
                    <div className="btns"></div>
                </div>
                <main>
                    <Formik
                        enableReinitialize
                        initialValues={{
                            firstName: user.firstName || '',
                            lastName: user.lastName || '',
                            email: user.email || '',
                            dob:
                                moment(new Date(user.dob)).format(
                                    'YYYY-MM-DD'
                                ) || '',
                            phone: user.phone || '',
                            education: user.education || '',
                            address: user.address || '',
                        }}
                        validationSchema={addUserSchema}
                        onSubmit={submitHandler}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <div className="form-container">
                                    <div className="form-group">
                                        <label htmlFor="name">First Name</label>
                                        <Field
                                            className="form-element"
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                        />
                                        <ErrorMessage
                                            name="firstName"
                                            component="span"
                                            className="error"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Last Name</label>
                                        <Field
                                            className="form-element"
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                        />
                                        <ErrorMessage
                                            name="lastName"
                                            component="span"
                                            className="error"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="dob">
                                            Date Of Birth
                                        </label>
                                        <Field
                                            className="form-element"
                                            type="date"
                                            name="dob"
                                            id="dob"
                                        />
                                        <ErrorMessage
                                            name="dob"
                                            component="span"
                                            className="error"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <Field
                                            className="form-element"
                                            type="text"
                                            id="phone"
                                            name="phone"
                                        />
                                        <ErrorMessage
                                            name="phone"
                                            component="span"
                                            className="error"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Email</label>
                                        <Field
                                            className="form-element"
                                            type="text"
                                            id="email"
                                            name="email"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="span"
                                            className="error"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="education">
                                            Education
                                        </label>
                                        <Field
                                            as="select"
                                            name="education"
                                            className="form-element"
                                            id="education"
                                        >
                                            <option value="">- select -</option>
                                            <option value={0}>Bsc (IT)</option>
                                            <option value={1}>BE</option>
                                            <option value={2}>BCA</option>
                                        </Field>
                                        <ErrorMessage
                                            name="education"
                                            component="span"
                                            className="error"
                                        />
                                    </div>
                                    <div className="form-group span-2">
                                        <label htmlFor="address">Address</label>
                                        <Field
                                            as="textarea"
                                            className="textarea form-element"
                                            name="address"
                                            id="address"
                                        />
                                        <ErrorMessage
                                            name="address"
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

export default UserAdd
