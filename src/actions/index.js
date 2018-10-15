export function requestProducts() {
    return {
        type: 'REQUEST_PRODUCTS'
    }
}
export function receiveProducts(json) {
    return {
        type: 'RECEIVE_PRODUCTS',
        products: json,
        receivedAt: Date.now()
    }
}
export function requestCategories() {
    return {
        type: 'REQUEST_CATEGORIES'
    }
}
export function receiveCategories(json) {
    return {
        type: 'RECEIVE_CATEGORIES',
        categories: json,
        receivedAt: Date.now()
    }
}
export function requestSuppliers() {
    return {
        type: 'REQUEST_SUPPLIERS'
    }
}
export function receiveSuppliers(json) {
    return {
        type: 'RECEIVE_SUPPLIERS',
        suppliers: json,
        receivedAt: Date.now()
    }
}
export function addItemToCart(json) {
    return {
        type: 'ADD_ITEM',
        item: json
    }
}
export function removeItemFromCart(json) {
    return {
        type: 'REMOVE_ITEM',
        item: json
    }
}
export function showInventory() {
    return {
        type: 'SHOW_INVENTORY'
    }
}
export function showCart() {
    return {
        type: 'SHOW_CART'
    }
}