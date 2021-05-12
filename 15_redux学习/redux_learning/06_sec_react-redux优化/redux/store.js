import { createStore,applyMiddleware } from 'redux'
import countReducer from './reduces/count'
import thunk from 'redux-thunk'

export default createStore(countReducer,applyMiddleware(thunk)) 