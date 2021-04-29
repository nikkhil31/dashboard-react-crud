import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import UserProviders from './contexts/users/userProviders'

ReactDOM.render(
    <React.StrictMode>
        <UserProviders>
            <App />
        </UserProviders>
    </React.StrictMode>,
    document.getElementById('root')
)
