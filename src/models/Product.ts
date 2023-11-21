
import Rating from "./Rating";

class Product {
    id: string = "";
    title: string = "";
    price: number = 0;
    image: string = "";
    description: string = "";
    category: string = "";
    rating?: Rating;

}

export default Product;