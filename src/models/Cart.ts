
import ICartItem from "../interfaces/ICartItem";
import CartItem from "./CartItem";

class Cart {
    itemCount: number = 0;
    Items = new Array<ICartItem>();
    price: number = 0;
}

export default Cart;