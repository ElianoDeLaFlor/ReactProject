import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Product from "../models/Product";

import { getProductListAsync } from "../redux/slices/ProductFetcher";
import { AppDispatch, RootState } from "../redux/store/store";
import { useDispatch, useSelector } from "react-redux";

import LoadingSpin from "react-loading-spin";
import Loading from "../components/Loading";
import { useParams } from "react-router";

interface ProductProps {
  search: string;
}

function Products() {
  const serachData = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const list = useSelector(
    (state: RootState) => state.productList.data.data
  ) as Product[];
  let listData = new Array<Product>();
  function search() {
    if (serachData.search) {
      const data = serachData.search as string;
      if (data.length > 0) {
        listData = list.filter((i) =>
          i.title.toLowerCase().includes(data.toLowerCase())
        );
      } else {
        listData = list;
      }
    } else {
      listData = list;
    }
  }

  const url = "https://fakestoreapi.com/products";

  function productList(url: string) {
    dispatch(getProductListAsync(url));
  }

  useEffect(() => {
    productList(url);
  }, []);

  function GenerateCard({productList }:{productList: Product[] | null | undefined}) {
    if (productList?.length === 0) {
      return (
        <>
          <p className="fs-3 text-center">
            No result found for the search criteria
          </p>
        </>
      );
    } else {
      return (
        <>
          {productList?.map((p) => {
            return (
              <div key={p.id} className="col mb-3">
                <ProductCard data={p} />
              </div>
            );
          })}
        </>
      );
    }
  }

  function ShowSpin() {
    if (!list) 
      return <Loading />;
    return <></>;
  }

  return (
    <>
      {search()}
      <p className="fs-1 text-center">Product list</p>
      <div className="container py-5">
        <div className="container text-center">
          <div className="row row-cols-4">
            <GenerateCard productList={listData}/>
          </div>
        </div>
      </div>
      <div>
        <ShowSpin/>
      </div>
    </>
  );
}
export default Products;
