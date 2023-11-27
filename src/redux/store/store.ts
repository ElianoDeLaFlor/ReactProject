import { configureStore } from '@reduxjs/toolkit';
import productListReducer from '../slices/ProductFetcher';
import productReducer from '../slices/ProductByIdFetcher';

export const store = configureStore({
    reducer: {
        productList: productListReducer,
        product: productReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;