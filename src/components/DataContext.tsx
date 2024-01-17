import { Dispatch, SetStateAction, createContext } from "react";
import Cart from "../models/Cart";
import Product from "../models/Product";


type ContextType={
    data: Product[];
    count: number;
    setValue: Dispatch<SetStateAction<Product[]>>;
    setCountValue: Dispatch<SetStateAction<number>>;
}
const cartDataContext = createContext<ContextType | undefined>(undefined);

export default cartDataContext;
