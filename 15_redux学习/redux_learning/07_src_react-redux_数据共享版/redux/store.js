import { createStore,applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import countReducer from './reduces/count'
import personReducer from './reduces/person'



export default createStore(combineReducers({
  count:countReducer,
  person:personReducer
}),applyMiddleware(thunk)) 