const visibility =(state = {
    inventory: 'show',
    cart: 'hide'
}, action) => {
    switch (action.type) {
        case 'SHOW_INVENTORY':
        return Object.assign({}, state, {
            inventory: 'show',
            cart: 'hide'
        })
        case 'SHOW_CART':
        return Object.assign({}, state, {
            inventory: 'hide',
            cart: 'show'
        })
        default:
            return state
    }
}
export default visibility