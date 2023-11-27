import ICartItem from "../interfaces/ICartItem";
import Product from "./Product";

class Cart  {
    price: number=0;
    itemCount: number=0;
    products: ICartItem[] | undefined;
    total: number = 0;

}

export default Cart;