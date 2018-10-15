const filters =(state = {
    category: 'Show All',
    supplier: 'Show All'

}, action) => {
    switch (action.type) {
        case 'FILTER_CATEGORY':
            return Object.assign({}, state, {
                category: action.category
            })
        case 'FILTER_SUPPLIER':
            return Object.assign({}, state, {
                supplier: action.supplier
            })
        default:
            return state
    }
}
export default filters