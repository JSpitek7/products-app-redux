import React from 'react'
import Inventory from '../containers/inventoryView.js'
import Cart from '../containers/cartView.js'
import './app.css';

const App = () => (
    <div className="App">
        <h1 className="App-header">Spitek Outdoors Supplies</h1>
        <Inventory className="App-inventory"/>
        <Cart className="App-cart"/>
    </div>
)

export default App;
