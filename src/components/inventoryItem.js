import React from 'react'

import './inventoryItem.css'

const InventoryItem = ({item, action, actionDescription}) => (
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
)

export default InventoryItem