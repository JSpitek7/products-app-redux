import { connect } from 'react-redux'
import CartView from '../components/cartView.js'
import {
    showInventory,
    removeItemFromCart
 } from '../actions/index.js'

const mapStateToProps = state => ({
    items: state.cart
})

const mapDispatchToProps = dispatch => ({
    removeItemFromCart: json => dispatch(removeItemFromCart(json)),
    switchView: () => dispatch(showInventory())
})

const Cart = connect(
    mapStateToProps,
    mapDispatchToProps
)(CartView)

export default Cart
