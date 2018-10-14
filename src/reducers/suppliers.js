const suppliers =(state = [], action) => {
    switch (action.type) {
        case 'REQUEST_SUPPLIERS':
            return state
        case 'RECEIVE_SUPPLIERS':
            return action.suppliers
        default:
            return state
    }
}
export default suppliers