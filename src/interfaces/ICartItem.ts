import Product from "../models/Product";

interface ICartItem{
    price: number;
    itemCount: number;
    product: Product;
}

export default ICartItem;