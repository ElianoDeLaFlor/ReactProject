import Product from "../models/Product";

import { getProductListAsync } from "../slices/ProductFetcher";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";

function Products() {
  const dispatch = useDispatch<AppDispatch>();
   const list = useSelector((state: RootState) => state.productList.list);

  function productList(url: string) {
    dispatch(getProductListAsync(url));
  }
  function log() {
    console.table(list);
   }

  return (
    <>
      <p className="fs-1 text-center">Product list</p>
      <button className="btn btn-danger" onClick={()=>{productList("https://fakestoreapi.com/products");}}>test</button>
      <button className="btn btn-danger" onClick={()=>{log()}}>log</button>
    </>
  );
}
export default Products;
