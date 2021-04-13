import React from 'react'
import { Link } from 'react-router-dom'

const UserMgmt = () => {
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
                    <tbody>
                        <tr>
                            <th>Owner</th>
                            <th>End date</th>
                            <th>Profit</th>
                            <th>Losses</th>
                            <th>Phone</th>
                        </tr>
                        <tr>
                            <td>Nikhil Limbad</td>
                            <td>1/15/12</td>
                            <td>$328.25</td>
                            <td>$779.58</td>
                            <td>(603) 555-0123</td>
                        </tr>
                        <tr>
                            <td>Nikhil Limbad</td>
                            <td>1/15/12</td>
                            <td>$328.25</td>
                            <td>$779.58</td>
                            <td>(603) 555-0123</td>
                        </tr>
                        <tr>
                            <td>Nikhil Limbad</td>
                            <td>1/15/12</td>
                            <td>$328.25</td>
                            <td>$779.58</td>
                            <td>(603) 555-0123</td>
                        </tr>
                        <tr>
                            <td>Nikhil Limbad</td>
                            <td>1/15/12</td>
                            <td>$328.25</td>
                            <td>$779.58</td>
                            <td>(603) 555-0123</td>
                        </tr>
                        <tr>
                            <td>Nikhil Limbad</td>
                            <td>1/15/12</td>
                            <td>$328.25</td>
                            <td>$779.58</td>
                            <td>(603) 555-0123</td>
                        </tr>
                        <tr>
                            <td>Nikhil Limbad</td>
                            <td>1/15/12</td>
                            <td>$328.25</td>
                            <td>$779.58</td>
                            <td>(603) 555-0123</td>
                        </tr>
                        <tr>
                            <td>Nikhil Limbad</td>
                            <td>1/15/12</td>
                            <td>$328.25</td>
                            <td>$779.58</td>
                            <td>(603) 555-0123</td>
                        </tr>
                        <tr>
                            <td>Nikhil Limbad</td>
                            <td>1/15/12</td>
                            <td>$328.25</td>
                            <td>$779.58</td>
                            <td>(603) 555-0123</td>
                        </tr>
                        <tr>
                            <td>Nikhil Limbad</td>
                            <td>1/15/12</td>
                            <td>$328.25</td>
                            <td>$779.58</td>
                            <td>(603) 555-0123</td>
                        </tr>
                        <tr>
                            <td>Nikhil Limbad</td>
                            <td>1/15/12</td>
                            <td>$328.25</td>
                            <td>$779.58</td>
                            <td>(603) 555-0123</td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </>
    )
}

export default UserMgmt
