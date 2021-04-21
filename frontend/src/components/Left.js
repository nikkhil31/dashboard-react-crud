import React from 'react'
import { Link } from 'react-router-dom'

const Left = () => {
    return (
        <div className="left">
            <div className="logo">
                <img src="/images/Logo.png" alt="Logo" />
            </div>
            <div className="left-items">
                <ul>
                    <li>
                        <img src="/images/icons/Vector.png" alt="Overview" />
                        <Link to="/">Overview</Link>
                    </li>
                    <li>
                        <img src="/images/icons/cloud.png" alt="Overview" />
                        <Link to="/">Cloud</Link>
                    </li>
                    <li>
                        <img src="/images/icons/sketch.png" alt="Overview" />
                        <Link to="/">Sketch</Link>
                    </li>
                    <li>
                        <img src="/images/icons/experment.png" alt="Overview" />
                        <Link to="/">Experiment</Link>
                    </li>
                    <li>
                        <img src="/images/icons/security.png" alt="Overview" />
                        <Link to="/">Security</Link>
                    </li>
                    <li>
                        <img src="/images/icons/owner.png" alt="Overview" />
                        <Link to="/">Ownership</Link>
                    </li>
                    <li>
                        <img src="/images/icons/test.png" alt="Overview" />
                        <Link to="/">A/B Test</Link>
                    </li>
                    <li>
                        <img src="/images/icons/colors.png" alt="Overview" />
                        <Link to="/">Colors</Link>
                    </li>
                </ul>
            </div>
            <div className="logout">
                <img src="/images/icons/logout.png" alt="logOut" />
                <Link to="/">Logout</Link>
            </div>
        </div>
    )
}

export default Left
