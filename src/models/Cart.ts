
import CartItem from "./CartItem";

class Cart  {
    price: number=0;
    itemCount: number=0;
    products: CartItem[] | undefined;
    total: number = 0;

}

export default Cart;