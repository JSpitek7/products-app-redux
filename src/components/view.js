import React from 'react'
import Inventory from '../containers/inventoryView.js'
import Cart from '../containers/cartView.js'
import PropTypes from 'react'
import './app.css';

function show(ind) {
    console.log(ind);
    if (ind === 'show') {
        return true
    } else {
        return false
    }
}

const View = ({showInventory}) => (
    <div>
        {show(showInventory)? <Inventory/> : <Cart/>}
    </div>
)

View.propTypes = {
    showInventory: PropTypes.string
}

export default View;
