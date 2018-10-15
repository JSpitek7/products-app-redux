import { connect } from 'react-redux'
import InventoryView from '../components/inventoryView'
import {
    addItemToCart,
    showCart
} from '../actions/index.js'
import {changeFilter} from '../helpers.js'

const mapStateToProps = state => ({
    items: state.products,
    cartItems: state.cart,
    categories: state.categories,
    suppliers: state.suppliers,
    selectedCategory: state.filters.category,
    selectedSupplier: state.filters.supplier
})

const mapDispatchToProps = dispatch => ({
    addItemToCart: json => dispatch(addItemToCart(json)),
    switchView: () => dispatch(showCart()),
    changeFilter: (selectedCategory, selectedSupplier) => dispatch(changeFilter(selectedCategory, selectedSupplier))
})
    

const Inventory = connect(
    mapStateToProps,
    mapDispatchToProps
)(InventoryView)

export default Inventory
