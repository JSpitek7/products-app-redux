import { connect } from 'react-redux'
import InventoryView from '../components/inventoryView'
import {
    addItemToCart,
    showCart
} from '../actions/index.js'
import {fetchProducts, fetchByCategory, fetchBySupplier} from '../apiRequests.js'

const mapStateToProps = state => ({
    items: state.products,
    cartItems: state.cart,
    categories: state.categories,
    suppliers: state.suppliers
})

const mapDispatchToProps = dispatch => ({
    addItemToCart: json => dispatch(addItemToCart(json)),
    switchView: () => dispatch(showCart()),
    fetchByCategory: json => dispatch(fetchByCategory(json)),
    fetchBySupplier: json => dispatch(fetchBySupplier(json)),
    fetchProducts: () => dispatch(fetchProducts())
})

const Inventory = connect(
    mapStateToProps,
    mapDispatchToProps
)(InventoryView)

export default Inventory
