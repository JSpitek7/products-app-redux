import React from 'react'
import PropTypes from 'prop-types'
import './inventoryView.css'
import InventoryItem from './inventoryItem.js'
import ListItem from './listItem.js'

const InventoryView = ({items, addItemToCart, switchView,
     cartItems, categories, suppliers,
     selectedCategory, selectedSupplier, changeFilter}) => (
    <div className="inventoryView" id="inventory">
        <button onClick={() => {
                if (cartItems !== []) {
                    switchView()
                }
            }}>
            View Cart ({cartItems.length})
        </button>
        <h2>Products for Sale</h2>
        <h3>Filter by Category</h3>
        <select onChange={(event) => {
            let category = event.target.value;
            console.log(event.target.value);
            changeFilter(category, selectedSupplier);
            }}>
            {categories.map(category =>
                <ListItem
                    value={category}
                    item={category}
                />
            )}
        </select>
        <h3>Filter by Brand</h3>
        <select onChange={(event) => {
            let supplier = event.target.value;
            changeFilter(selectedCategory, supplier)
            }}>
            {suppliers.map(supplier =>
                <ListItem
                    value={supplier}
                    item={supplier}
                />
            )}
        </select>
        <table>{items.map(item =>
                <InventoryItem
                item={item}
                action={addItemToCart}
                actionDescription="Add to cart"
                />
            )}
        </table>
    </div>
)

InventoryView.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        supplier: PropTypes.string.isRequired
    }).isRequired).isRequired,
    addItemToCart: PropTypes.func.isRequired,
    switchView: PropTypes.func.isRequired,
    cartItems: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        supplier: PropTypes.string.isRequired
    }).isRequired).isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    suppliers: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedCategory: PropTypes.string.isRequired,
    selectedSupplier: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired
}

export default InventoryView

