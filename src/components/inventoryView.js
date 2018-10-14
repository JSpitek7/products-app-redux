import React from 'react'
import PropTypes from 'prop-types'
import './inventoryView.css'
import InventoryItem from './inventoryItem.js'

const InventoryView = ({items, addItemToCart}) => (
    <div className="inventoryView">
        <h2>Products for Sale</h2>
        <ul>{items.map(item =>
                <InventoryItem
                item={item}
                action={addItemToCart}
                actionDescription="Add to cart"
                />
            )}
        </ul>
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
    addItemToCart: PropTypes.func.isRequired
}

export default InventoryView

