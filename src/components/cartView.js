import React from 'react'
import PropTypes from 'prop-types'
import InventoryItem from './inventoryItem.js'
import './cartView.css'

const CartView = ({items, removeItemFromCart}) => (
    <div className="cartView">
        <h2>Your Shopping Cart</h2>
        <ul>{items.map(item =>
                <InventoryItem
                item={item}
                action={removeItemFromCart}
                actionDescription="Remove from Cart"
                />
            )}
        </ul>
    </div>
)

CartView.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        supplier: PropTypes.string.isRequired
    }).isRequired).isRequired,
    removeItemFromCart: PropTypes.func.isRequired
}

export default CartView

