import {
    requestProducts,
    requestCategories,
    requestSuppliers,
    receiveProducts,
    receiveCategories,
    receiveSuppliers,
} from './actions'

export function fetchProducts() {
    return dispatch => {
        dispatch(requestProducts())
        return fetch('http://localhost:8080/products')
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
        return fetch('http://localhost:8080/categories')
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
        return fetch('http://localhost:8080/suppliers')
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