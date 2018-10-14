import React from 'react'

import './inventoryItem.css'

const InventoryItem = ({addItemToCart,item}) => (
    <div className="pitem">
        <li key={item.id} value={item} id={item.id}>
            <div className="itemInfo">
                {item.supplier+" "+item.name+": $"+item.price}
            </div>
            <button onClick={() => {
                addItemToCart(item)
            }}>Add to cart</button>
            <br/><br/>
        </li>
    </div>
)

export default InventoryItem