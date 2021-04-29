import React, { useEffect } from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useUsers } from '../contexts/users/userProviders'
import Loader from 'react-loader-spinner'
import moment from 'moment'
import { CLEAR_SUCCESS, CLEAR_USER } from '../contexts/users/userConstant'

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
    const {
        user,
        loading,
        success,
        getUser,
        updateUser,
        dispatch,
        addUser,
    } = useUsers()
    const userId = match.params.id || null

    useEffect(() => {
        if (userId) {
            getUser(userId)
        } else {
            dispatch({ type: CLEAR_USER })
        }
        if (success) {
            history.push('/')
            dispatch({ type: CLEAR_SUCCESS })
        }
        // eslint-disable-next-line
    }, [userId, success, history, dispatch])

    return (
        <>
            <div>
                <div className="header">
                    <h2>
                        <Link to="/">
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
                    {loading ? (
                        <Loader
                            type="Puff"
                            color="#00BFFF"
                            height={100}
                            width={100}
                            className="loader-class"
                        />
                    ) : (
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
                            onSubmit={(values) => {
                                if (userId == null) {
                                    addUser(values)
                                } else {
                                    updateUser(values, userId)
                                }
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <div className="form-container">
                                        <div className="form-group">
                                            <label htmlFor="name">
                                                First Name
                                            </label>
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
                                            <label htmlFor="name">
                                                Last Name
                                            </label>
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
                                                <option value="">
                                                    - select -
                                                </option>
                                                <option value={0}>
                                                    Bsc (IT)
                                                </option>
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
                                            <label htmlFor="address">
                                                Address
                                            </label>
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
                    )}
                </main>
            </div>
        </>
    )
}

export default UserAdd
