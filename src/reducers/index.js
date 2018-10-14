import { combineReducers } from 'redux'
import products from './products.js'
import categories from './categories.js'
import suppliers from './suppliers.js'
import cart from './cart.js'
export default combineReducers({
    products,
    categories,
    suppliers,
    cart
})
