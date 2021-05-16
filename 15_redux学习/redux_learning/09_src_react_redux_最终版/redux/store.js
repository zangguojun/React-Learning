// 用于创建store
import { createStore,applyMiddleware } from 'redux'
// 用于支持开发者插件
import { composeWithDevTools } from 'redux-devtools-extension'
// 用于支持异步action
import thunk from 'redux-thunk'
// 所有的Reducer
import reducer from './reduces'

export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))