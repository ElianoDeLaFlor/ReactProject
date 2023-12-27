import ICartItem from "../interfaces/ICartItem";
import Product from "./Product";

class CartItem implements ICartItem {
<<<<<<< Updated upstream
    price: number=0;
    itemCount: number=0;
    product: Product=new Product();
    name: string="";
=======
    price: number = 0;
    itemCount: number = 0;
    product: Product = new Product();

>>>>>>> Stashed changes
}

export default CartItem;