import { connect } from 'react-redux'
import CartView from '../components/cartView.js'
import {removeItemFromCart} from '../actions/index.js'

const mapStateToProps = state => ({
    items: state.cart
})

const mapDispatchToProps = dispatch => ({
    removeItemFromCart: json => dispatch(removeItemFromCart(json))
})

const Cart = connect(
    mapStateToProps,
    mapDispatchToProps
)(CartView)

export default Cart
