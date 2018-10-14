import React from 'react'
import PropTypes from 'prop-types'
import './inventoryView.css'
import InventoryItem from './inventoryItem.js'

const InventoryView = ({items, addItemToCart}) => (
    <div className="inventoryView">
        <ul>{items.map(item =>
                <InventoryItem
                addItemToCart={addItemToCart}
                item={item}
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

