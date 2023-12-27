import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import ICartItem from "../../interfaces/ICartItem";
import Product from "../../models/Product";

interface CartState {
    testItem: Array<Product>;
}

const initialState: CartState = {
    testItem: new Array<Product>(),
}

const shoppingSlice = createSlice({
    name: "cartitems",
    initialState: initialState,
    reducers: {
        add_Item: (state, action: PayloadAction<Product>) => {
            state.testItem.push(action.payload);
        },
        remove_Item: (state, action: PayloadAction<Product>) => {
            let index = state.testItem.findIndex(p => p.id === action.payload.id);
            state.testItem.splice(index, 1);
        }
    }
});


export const { add_Item, remove_Item } = shoppingSlice.actions;

export default shoppingSlice.reducer;