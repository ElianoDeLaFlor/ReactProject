import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Product from "../../models/Product";
import ServiceResponse from "../../models/ServiceResponse";

interface ProductListState {
    data: ServiceResponse<Array<Product>>;
}

const initialState: ProductListState = {
    data: new ServiceResponse<Array<Product>>(),
}

const productListSlice = createSlice({
    name: "productlist",
    initialState: initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            action.payload.id = "" + state.data.data?.length + 1;
            state.data.data?.push(action.payload);
        },
        removeProduct: (state, action: PayloadAction<Product>) => {
            let index = state.data.data?.findIndex(u => u.id === action.payload.id);
            if (index !== undefined)
                state.data.data?.splice(index, 1);
        }

    },
    extraReducers: (builder) => {
        builder.addCase(getProductListAsync.rejected, () => {
            console.log("error occured");
        }).addCase(getProductListAsync.fulfilled, (state, action: PayloadAction<ServiceResponse<Array<Product>>>) => {
            state.data = action.payload;
        });
    }
});

export const getProductListAsync = createAsyncThunk(
    "productlist/getProductListAsync", async (url: string): Promise<ServiceResponse<Array<Product>>> => {
        try {
            const response = await fetch(url, { method: "GET" });
            const data = await response.json() as Product[];

            let result = new ServiceResponse<Array<Product>>();
            result.data = data;
            result.message = "data retrieved successfully";
            result.success = true;
            return result;
        } catch (error) {
            let result = new ServiceResponse<Array<Product>>();
            result.data = null;
            result.message = "an error occured";
            result.success = false;
            return result;
        }
    }
);


export const { addProduct, removeProduct } = productListSlice.actions;

export default productListSlice.reducer;