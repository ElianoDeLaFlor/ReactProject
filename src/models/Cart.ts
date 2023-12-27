
import CartItem from "./CartItem";

<<<<<<< Updated upstream
class Cart  {
    price: number=0;
    itemCount: number=0;
    products: CartItem[] | undefined;
    total: number = 0;

=======
class Cart {
    itemCount: number = 0;
    Items = new Array<ICartItem>();
    price: number = 0;
>>>>>>> Stashed changes
}

export default Cart;