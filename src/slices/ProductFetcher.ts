import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Product from "../models/Product";

interface ProductListState {
    list: Array<Product>;
}

const initialState: ProductListState = {
    list: new Array<Product>(),
}

const productListSlice = createSlice({
    name: "productlist",
    initialState: initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            action.payload.id =""+state.list.length + 1;
            state.list.push(action.payload);
        },
        removeProduct: (state, action: PayloadAction<Product>) => {
            let index = state.list.findIndex(u => u.id === action.payload.id);
            state.list.splice(index, 1);
        }

    },
    extraReducers: (builder) => {
        builder.addCase(getProductListAsync.rejected, () => {
            console.log("error occured");
        }).addCase(getProductListAsync.fulfilled, (state, action: PayloadAction<Product[]>) => {
            state.list = action.payload;
        });
    }
});

export const getProductListAsync = createAsyncThunk(
    "productlist/getProductListAsync", async (url: string): Promise<Product[]> => {
        try {
            const response = await fetch(url, { method: "GET" });
            const data = await response.json() as Product[];
            return data;
        } catch (error) {
            throw error;
        }
    }
);


export const {addProduct,removeProduct } = productListSlice.actions;

export default productListSlice.reducer;