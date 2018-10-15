import React from 'react'
import PropTypes from 'prop-types'
import './inventoryView.css'
import InventoryItem from './inventoryItem.js'

const InventoryView = ({items, addItemToCart, switchView, cartItems}) => (
    <div className="inventoryView" id="inventory">
        <h2>Products for Sale</h2>
        <button onClick={() => {
                if (cartItems !== []) {
                    switchView()
                }
            }}>
            View Cart ({cartItems.length})
        </button>
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
    }).isRequired).isRequired
}

export default InventoryView

