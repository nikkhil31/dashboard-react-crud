import './App.css'
import Left from './components/Left'
import UserMgmt from './components/UserMgmt'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import UserAdd from './components/UserAdd'

function App() {
    return (
        <Router>
            <div className="container">
                <Left />
                <div className="right">
                    <Route path="/" component={UserMgmt} exact />
                    <Route path="/add-user" component={UserAdd} />
                    <Route path="/edit-user/:id" component={UserAdd} />
                </div>
            </div>
        </Router>
    )
}

export default App
