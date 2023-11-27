import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Product from "../models/Product";

import { getProductListAsync } from "../redux/slices/ProductFetcher";
import { AppDispatch, RootState } from "../redux/store/store";
import { useDispatch, useSelector } from "react-redux";

function Products() {
  const dispatch = useDispatch<AppDispatch>();
  const list = useSelector((state: RootState) => state.productList.data.data);

  const url = "https://fakestoreapi.com/products";

  function productList(url: string) {
    dispatch(getProductListAsync(url));
  }

  useEffect(() => {
    productList(url);
  }, []);

  function generateCard(productList: Product[] | null | undefined) {
    return productList?.map((p) => {
      return (
        <div key={p.id} className="col mb-3">
          <ProductCard data={p} />
        </div>
      );
    });
  }

  return (
    <>
      <p className="fs-1 text-center">Product list</p>
      <div className="container py-5">
        <div className="container text-center">
          <div className="row row-cols-4">{generateCard(list)}</div>
        </div>
      </div>
    </>
  );
}
export default Products;
