import React from 'react'

const UserAdd = () => {
    return (
        <>
            <div>
                <div className="header">
                    <h2>Add User</h2>
                    <div className="btns" />
                </div>
                <main>
                    <div className="form-container">
                        <div className="form-group">
                            <label htmlFor="name">First Name</label>
                            <input
                                className="form-element"
                                type="text"
                                id="fname"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Last Name</label>
                            <input
                                className="form-element"
                                type="text"
                                id="lname"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Date Of Birth</label>
                            <input
                                className="form-element"
                                type="date"
                                id="fname"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Phone</label>
                            <input
                                className="form-element"
                                type="text"
                                id="lname"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Email</label>
                            <input
                                className="form-element"
                                type="text"
                                id="lname"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Education</label>
                            <select nam className="form-element" e id>
                                <option value={1}>Bsc (IT)</option>
                                <option value={2}>BE</option>
                                <option value={3}>BCA</option>
                            </select>
                        </div>
                        <div className="form-group span-2">
                            <label htmlFor="name">Address</label>
                            <textarea
                                className="textarea form-element"
                                name
                                id
                                cols={30}
                                rows={10}
                                defaultValue={''}
                            />
                        </div>
                        <div className="form-group submit-btn span-2">
                            <input type="submit" defaultValue="submit" />
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default UserAdd
