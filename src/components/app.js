import React from 'react'
import Inventory from '../containers/inventoryView.js'
import Cart from '../containers/cartView.js'
import PropTypes from 'prop-types'
import Views from '../containers/views.js'
import './app.css';

const App = () => (
    <div className="App">
        <h1 className="App-header">Spitek Outdoors Supplies</h1>
        <Views/>
    </div>
)

export default App;
