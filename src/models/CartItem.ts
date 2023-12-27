import ICartItem from "../interfaces/ICartItem";
import Product from "./Product";

class CartItem implements ICartItem {
    price: number=0;
    itemCount: number=0;
    product: Product=new Product();
    name: string="";
}

export default CartItem;