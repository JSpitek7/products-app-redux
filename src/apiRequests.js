import {
    requestProducts,
    requestCategories,
    requestSuppliers,
    receiveProducts,
    receiveCategories,
    receiveSuppliers,
} from './actions'

const url = 'https://products-spring-api.herokuapp.com/'

export function fetchProducts() {
    return dispatch => {
        dispatch(requestProducts())
        return fetch(url + 'products')
        .then(
            response => response.json(),
            error => {
                console.log('An error occured.', error)
                return []
            }
        )
        .then(jsonResponse => {
            dispatch(receiveProducts(jsonResponse))
        })
    }
}

export function fetchCategories() {
    return dispatch => {
        dispatch(requestCategories())
        return fetch(url + 'categories')
        .then(
            response => response.json(),
            error => {
                console.log('An error occured.', error)
                return []
            }
        )
        .then(jsonResponse => {
            dispatch(receiveCategories(jsonResponse))
        })
    }
}

export function fetchSuppliers() {
    return dispatch => {
        dispatch(requestSuppliers())
        return fetch(url + 'suppliers')
        .then(
            response => response.json(),
            error => {
                console.log('An error occured.', error)
                return []
            }
        )
        .then(jsonResponse => {
            dispatch(receiveSuppliers(jsonResponse))            
        })
    }
}

export function fetchByCategory(category) {
    return dispatch => {
        dispatch(requestProducts())
        return fetch(url + 'products/category/' + category)
        .then(
            response => response.json(),
            error => {
                console.log('An error occured.', error)
                return []
            }
        )
        .then(jsonResponse => {
            dispatch(receiveProducts(jsonResponse))
        })
    }
}

export function fetchBySupplier(supplier) {
    return dispatch => {
        dispatch(requestProducts())
        return fetch(url + 'products/supplier/' + supplier)
        .then(
            response => response.json(),
            error => {
                console.log('An error occured.', error)
                return []
            }
        )
        .then(jsonResponse => {
            dispatch(receiveProducts(jsonResponse))
        })
    }
}

export function fetchByCategoryAndSupplier(category, supplier) {
    return dispatch => {
        dispatch(requestProducts())
        return fetch(url + 'products/' + category + '/' + supplier)
        .then(
            response => response.json(),
            error => {
                console.log('An error occured.', error)
                return []
            }
        )
        .then(jsonResponse => {
            dispatch(receiveProducts(jsonResponse))
        })
    }
}