import React from 'react'
import Inventory from '../containers/inventoryView.js'
import Cart from '../containers/cartView.js'
import PropTypes from 'react'
import './app.css';

const View = ({ showInventory }) => (
    <div>
        {(showInventory === 'show')? <Inventory/> : <Cart/>}
    </div>
)

View.propTypes = {
    showInventory: PropTypes.string
}

export default View;
