import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/app.js'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import { fetchProducts, fetchCategories, fetchSuppliers } from './apiRequests.js'
import { addItemToCart } from './actions/index.js';

const loggerMiddleWare = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleWare));

store.dispatch(fetchProducts());
store.dispatch(fetchCategories());
store.dispatch(fetchSuppliers());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

addItemToCart(
    {id: 101, name: "Hammock", price: 24.99, category: "Hammocks", supplier: "Spear"}
);
