const categories =(state = [
    "all"
], action) => {
    switch (action.type) {
        case 'REQUEST_CATEGORIES':
            return state
        case 'RECEIVE_CATEGORIES':
            return [
                state, ...action.categories
            ]
        default:
            return state
    }
}
export default categories