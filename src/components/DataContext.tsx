import { Dispatch, SetStateAction, createContext } from "react";
import Cart from "../models/Cart";
import Product from "../models/Product";


type ContextType = {
  data: Cart;
  count: number;
  setValue: Dispatch<SetStateAction<Cart>>;
  setCountValue: Dispatch<SetStateAction<number>>;
};
const cartDataContext = createContext<ContextType | undefined>(undefined);

export default cartDataContext;
