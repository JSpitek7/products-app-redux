const cart =(state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.item]
        case 'REMOVE_ITEM':
            return [
                ...state.slice(0, action.itemId),
                ...state.slice(action.itemId + 1)
            ]
        default:
            return state
    }
}
export default cart