import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './themed-bootstrap.scss'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {configureStore} from "@reduxjs/toolkit"
import {Provider} from 'react-redux'
import productReducer, { productsFetch } from './features/productSlice';
import { productsApi } from './features/productsApi';
import cartReducer, { getTotal } from './features/cartSlice';
import cardsReducer from './features/cardsSlice';

const store = configureStore({
  reducer:{
    products: productReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    cards: cardsReducer
    
  },
  middleware:(getDefaultMiddleWare)=> getDefaultMiddleWare().concat(productsApi.middleware)
  
})

store.dispatch(productsFetch())
store.dispatch(getTotal())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
