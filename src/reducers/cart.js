const cart =(state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.item]
        case 'REMOVE_ITEM':
            let index = state.findIndex(x => x == action.item);
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ]
        default:
            return state
    }
}
export default cart