import React from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const addUserSchema = Yup.object().shape({
    fname: Yup.string().required(),
    lname: Yup.string().required(),
    email: Yup.string().email().required(),
    dob: Yup.string().required(),
    phone: Yup.number().required(),
    education: Yup.string().required(),
    address: Yup.string().required(),
})

const UserAdd = () => {
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
                    <Formik
                        initialValues={{
                            fname: '',
                            lname: '',
                            email: '',
                            dob: '',
                            phone: '',
                            education: '',
                            address: '',
                        }}
                        validationSchema={addUserSchema}
                        onSubmit={(values) => {
                            // same shape as initial values
                            console.log(values)
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <div className="form-container">
                                    <div className="form-group">
                                        <label htmlFor="name">First Name</label>
                                        <Field
                                            className="form-element"
                                            type="text"
                                            name="fname"
                                            id="fname"
                                        />
                                        <ErrorMessage
                                            name="fname"
                                            component="span"
                                            className="error"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Last Name</label>
                                        <Field
                                            className="form-element"
                                            type="text"
                                            id="lname"
                                            name="lname"
                                        />
                                        <ErrorMessage
                                            name="lname"
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
                                            <option value={1}>Bsc (IT)</option>
                                            <option value={2}>BE</option>
                                            <option value={3}>BCA</option>
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
