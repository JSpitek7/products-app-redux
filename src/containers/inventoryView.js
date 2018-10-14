import { connect } from 'react-redux'
import InventoryView from '../components/inventoryView'
import {addItemToCart} from '../actions/index.js'

const mapStateToProps = state => ({
    items: state.products
})

const mapDispatchToProps = dispatch => ({
    addItemToCart: json => dispatch(addItemToCart(json))
})

const Inventory = connect(
    mapStateToProps,
    mapDispatchToProps
)(InventoryView)

export default Inventory
