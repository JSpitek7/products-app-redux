import React from 'react'

import './inventoryItem.css'

const InventoryItem = ({item, action, actionDescription}) => (
    <div className="pitem">
        <li key={item.id} value={item} id={item.id}>
            <div className="itemInfo">
                {item.supplier+" "+item.name+": $"+item.price}
            </div>
            <button onClick={() => {
                action(item)
            }}>{actionDescription}</button>
            <br/><br/>
        </li>
    </div>
)

export default InventoryItem