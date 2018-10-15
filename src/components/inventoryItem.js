import React from 'react'

import './inventoryItem.css'

const InventoryItem = ({item, action, actionDescription}) => (
    <div>
        <tr>
            <td className="itemInfo">
                {item.supplier+" "+item.name+": $"+item.price}
            </td>
            <td className="itemAction">
                <button onClick={() => {
                    action(item)
                }}>{actionDescription}</button>
                <br/><br/>
            </td>
        </tr>
    </div>
)

export default InventoryItem