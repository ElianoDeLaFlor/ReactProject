import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Product from "../models/Product";
import ServiceResponse from "../models/ServiceResponse";

interface ProductState {
    item: Product;
}

const initialState: ProductState = {
    item: new Product(),
}

const productSlice = createSlice({
    name: "productdetails",
    initialState: initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
        .addCase(getProductListByIdAsync.rejected, () => {
            console.log("error occured");})
        .addCase(getProductListByIdAsync.fulfilled, (state, action: PayloadAction<Product>) => {
            state.item = action.payload;    
            })
    },
});

export const getProductListByIdAsync = createAsyncThunk(
    "productlist/getProductListByIdAsync", async (url: string): Promise<ServiceResponse<Product>> => {
        try {
            const response = await fetch(url, { method: "GET" });
            if (response.ok) {
                const data = await response.json() as Product;
                let result = new ServiceResponse<Product>();
                result.data = data;
                result.success = true;
                result.message = "Operation completed successfully";

                return result;
            } else {
                let result = new ServiceResponse<Product>();
                result.data = null;
                result.success = true;
                result.message = "Operation completed successfully";
            }
            
        } catch (error) {
            throw error;
        }
    }
);


export default productSlice.reducer;