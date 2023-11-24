import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Product from "../models/Product";

import { getProductListAsync } from "../slices/ProductFetcher";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";

function Products() {
  const dispatch = useDispatch<AppDispatch>();
  const list = useSelector((state: RootState) => state.productList.data.data);

  function productList(url: string) {
    dispatch(getProductListAsync("https://fakestoreapi.com/products"));
  }

  function getData() {
    
  }

  function log() {
    console.table(list);
  }

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
      
      {/* {productList("https://fakestoreapi.com/products")} */
        useEffect(() => { productList("https://fakestoreapi.com/products"); })
      }
      <p className="fs-1 text-center">Product list</p>
      <div className="container py-5">
        <div className="container text-center">
          <div className="row row-cols-4">{generateCard(list)}</div>
        </div>
      </div>
      {/* <button
        className="btn btn-danger"
        onClick={() => {
          productList("https://fakestoreapi.com/products");
        }}
      >
        test
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          log();
        }}
      >
        log
      </button> */}
    </>
  );
}
export default Products;

