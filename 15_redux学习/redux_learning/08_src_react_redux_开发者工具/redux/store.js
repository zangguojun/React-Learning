import { createStore,applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import countReducer from './reduces/count'
import personReducer from './reduces/person'



export default createStore(combineReducers({
  count:countReducer,
  person:personReducer
}),composeWithDevTools(applyMiddleware(thunk)))