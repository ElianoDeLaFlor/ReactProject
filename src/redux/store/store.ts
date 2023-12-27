import { configureStore } from '@reduxjs/toolkit';
import productListReducer from '../slices/ProductFetcher';
import productReducer from '../slices/ProductByIdFetcher';
import cartReducer from '../slices/CartData';
import shoppingReducer from '../slices/CartDatacopy';

export const store = configureStore({
    reducer: {
        productList: productListReducer,
        product: productReducer,
        cart: cartReducer,
        shopItems: shoppingReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;