import React from 'react'
import Left from './components/Left'
import UserMgmt from './components/UserMgmt'
import './App.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import UserAdd from './components/UserAdd'
import Loader from 'react-loader-spinner'
import { useSelector } from 'react-redux'

function App() {
    const { loading } = useSelector((state) => state.global)

    return (
        <Router>
            <div className="container">
                <Left />
                <div className="right">
                    {/* Lording:
                    If got true in loading,
                    It will runs. */}

                    {loading && (
                        <Loader
                            type="Puff"
                            color="#00BFFF"
                            height={100}
                            width={100}
                            className="loader-class"
                        />
                    )}
                    <Route path="/" component={UserMgmt} exact />
                    <Route path="/add-user" component={UserAdd} />
                    <Route path="/edit-user/:id" component={UserAdd} />
                </div>
            </div>
        </Router>
    )
}

export default App
