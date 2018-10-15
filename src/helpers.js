import {
    fetchProducts,
    fetchByCategory,
    fetchBySupplier,
    fetchByCategoryAndSupplier
} from './apiRequests.js'
import {selectCategory,selectSupplier} from './actions/index.js'

const SHOW_ALL = 'Show All'

export function changeFilter(category, supplier) {
    return dispatch => {
        dispatch(selectCategory(category));
        dispatch(selectSupplier(supplier));
        if (category === SHOW_ALL && supplier == SHOW_ALL) {
            dispatch(fetchProducts());
        } else if (category === SHOW_ALL && supplier !== SHOW_ALL) {
            dispatch(fetchBySupplier(supplier));
        } else if (category !== SHOW_ALL && supplier === SHOW_ALL) {
            dispatch(fetchByCategory(category));
        } else {
            dispatch(fetchByCategoryAndSupplier(category,supplier));
        }
    }
}