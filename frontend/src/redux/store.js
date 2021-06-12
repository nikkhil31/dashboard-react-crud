import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userReducer } from './users/userReducer'
import { globalReducer } from './global/globalReducer'
import { categoryReducer } from './category/categoryReducer'

const reducer = combineReducers({
    global: globalReducer,
    users: userReducer,
    categories: categoryReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
