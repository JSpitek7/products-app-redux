import React from 'react'
import PropTypes from 'prop-types'
import InventoryItem from './inventoryItem.js'
import './cartView.css'

function sum(arr) {
    let total = 0;
    arr.forEach(a => {
        total += a.price
    });
    return total;
}

const CartView = ({items, removeItemFromCart, switchView}) => (
    <div className="cartView" id="cart">
        <button onClick={() => {
            switchView()}}>
            Continue Shopping
        </button>
        <h2>Your Shopping Cart</h2>
        <table>{items.map(item =>
                <InventoryItem
                item={item}
                action={removeItemFromCart}
                actionDescription="Remove from Cart"
                />
            )}
            <tr>
                <h3>Total: ${sum(items).toFixed(2)}</h3>
            </tr>
        </table>
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
    removeItemFromCart: PropTypes.func.isRequired,
    switchView: PropTypes.func.isRequired
}

export default CartView

