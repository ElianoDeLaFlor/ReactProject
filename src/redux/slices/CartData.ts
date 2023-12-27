import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import ICartItem from "../../interfaces/ICartItem";
import Cart from "../../models/Cart";

interface CartState {
    CartData: Cart;
}

const initialState: CartState = {
    CartData: new Cart(),
}

const cartSlice = createSlice({
    name: "cartitems",
    initialState: initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ICartItem>) => {
            if (state.CartData.Items.length === 0) {
                //Is the first item to the cart
                action.payload.price = action.payload.itemCount * action.payload.product.price;
                state.CartData.Items.push(action.payload);
                state.CartData.itemCount = action.payload.itemCount;
                state.CartData.price = action.payload.product.price;
                console.log("state", state.CartData);
            } else {
                //get product
                let prod = state.CartData.Items.find(i => i.product.id === action.payload.product.id);
                if (prod !== undefined) {
                    prod.itemCount += 1;
                    prod.price = prod.product.price * prod.itemCount;
                    //get product index
                    let index = state.CartData.Items.findIndex(i => i.product.id === action.payload.product.id);
                    state.CartData.Items[index] = prod;
                    //update item count in the cart
                    state.CartData.itemCount += 1;
                    //update the total price in the cart
                    state.CartData.price += prod.product.price;
                    console.log("state 1", state.CartData);
                } else {
                    //the product is not yet added to the cart
                    action.payload.price = action.payload.itemCount * action.payload.product.price;
                    state.CartData.Items.push(action.payload);
                    //update item count in the cart
                    state.CartData.itemCount += 1;
                    //update the total price in the cart
                    state.CartData.price += action.payload.product.price;
                    console.log("state 2", state.CartData);
                }
            }

        },
        removeItem: (state, action: PayloadAction<ICartItem>) => {
            //get product
            let prod = state.CartData.Items.find(i => i.product.id === action.payload.product.id);
            let count = prod?.itemCount;
            if (count === 1) {
                //There is only one item of that type in the cart
                //get product index
                let index = state.CartData.Items.findIndex(i => i.product.id === action.payload.product.id);
                state.CartData.Items.splice(index, 1);
                //update item count in the cart
                state.CartData.itemCount -= 1;
                //update the total price in the cart
                state.CartData.price -= action.payload.price;
            } else {
                if (prod) {
                    prod.itemCount -= 1;
                    prod.price = prod.product.price * prod.itemCount;
                    //get product index
                    let index = state.CartData.Items.findIndex(i => i.product.id === action.payload.product.id);
                    state.CartData.Items[index] = prod;
                    //update item count in the cart
                    state.CartData.itemCount -= 1;
                    //update the total price in the cart
                    state.CartData.price -= action.payload.price;
                }
            }


        }
    }
});


export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;