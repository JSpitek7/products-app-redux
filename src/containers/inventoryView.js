import { connect } from 'react-redux'
import InventoryView from '../components/inventoryView'
import {
    addItemToCart,
    showCart
} from '../actions/index.js'

const mapStateToProps = state => ({
    items: state.products,
    cartItems: state.cart
})

const mapDispatchToProps = dispatch => ({
    addItemToCart: json => dispatch(addItemToCart(json)),
    switchView: () => dispatch(showCart())
})

const Inventory = connect(
    mapStateToProps,
    mapDispatchToProps
)(InventoryView)

export default Inventory
