import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Product from "../models/Product";

import { getProductListAsync } from "../redux/slices/ProductFetcher";
import { AppDispatch, RootState } from "../redux/store/store";
import { useDispatch, useSelector } from "react-redux";

import LoadingSpin from "react-loading-spin";
import Loading from "../components/Loading";

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

  const ExampleOfUsingDefaultLoadingSpin = () => (
    <div className={"ExampleOfUsage"}>
      <LoadingSpin />
    </div>
  );

  function generateCard(productList: Product[] | null | undefined) {
    return productList?.map((p) => {
      return (
        <div key={p.id} className="col mb-3">
          <ProductCard data={p} />
        </div>
      );
    });
  }

  function showSpin() {
    if (!list) {
      return <Loading />;
    } else {
      return "";
    }
  }

  return (
    <>
      <p className="fs-1 text-center">Product list</p>
      <div className="container py-5">
        <div className="container text-center">
          <div className="row row-cols-4">{generateCard(list)}</div>
        </div>
      </div>
      <div>{showSpin()}</div>
    </>
  );
}
export default Products;
