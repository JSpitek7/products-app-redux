const suppliers =(state = [
    'Show All'
], action) => {
    switch (action.type) {
        case 'REQUEST_SUPPLIERS':
            return state
        case 'RECEIVE_SUPPLIERS':
            return[
                state, ...action.suppliers
            ]
        default:
            return state
    }
}
export default suppliers