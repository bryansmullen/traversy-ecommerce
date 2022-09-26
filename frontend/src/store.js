import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    productDetailsReducer,
    productListReducer,
} from './reducers/productReducers'

const reducers = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
})
const middleware = composeWithDevTools(applyMiddleware(thunk))
const store = createStore(reducers, {}, middleware)

export default store
