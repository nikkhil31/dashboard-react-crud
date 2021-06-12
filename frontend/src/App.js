import React from 'react'
import Left from './components/Left'
import UserMgmt from './components/UserMgmt'
import './App.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import UserAdd from './components/UserAdd'
import Loader from 'react-loader-spinner'
import { useSelector } from 'react-redux'
import CategoryMgmt from './components/CategoryMgmt'
import CategoryAdd from './components/CategoryAdd'

function App() {
    const { loading, fail, error, message, success } = useSelector(
        (state) => state.global
    )

    return (
        <Router>
            <div className="container">
                <Left />
                <div className="right">
                    {success && message && (
                        <div className="alert success">
                            <span className="closebtn">&times;</span>
                            {message}
                        </div>
                    )}

                    {fail && (
                        <div className="alert error">
                            <span
                                className="closebtn"
                                onClick="this.parentElement.style.display='none';"
                            >
                                &times;
                            </span>
                            <strong>Danger!</strong> {error}.
                        </div>
                    )}

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
                    <Route path="/user" component={UserMgmt} exact />
                    <Route path="/user/add" component={UserAdd} />
                    <Route path="/user/edit/:id" component={UserAdd} />

                    <Route path="/category" component={CategoryMgmt} exact />
                    <Route path="/category/add" component={CategoryAdd} />
                    <Route path="/category/edit/:id" component={CategoryAdd} />
                </div>
            </div>
        </Router>
    )
}

export default App
