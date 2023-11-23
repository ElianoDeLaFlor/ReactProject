import React from "react";
import ProductCard from "../components/ProductCard";
import Product from "../models/Product";

import { getProductListAsync } from "../slices/ProductFetcher";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";

class ProductComp extends React.Component {
  url = "https://fakestoreapi.com/products";
  

  generateCard(productList: Product[]) {
    return productList.map((p) => {
      return (
        <div key={p.id} className="col mb-3">
          <ProductCard data={p} />
        </div>
      );
    });
  }

  productList(url: string) {
    // this.dispatch(getProductListAsync(url));
  }

  log() {
    // console.table(this.list);
  }

  componentDidMount(): void {
    this.productList(this.url);
  }

  render(): React.ReactNode {
    return (
      <>
        <p className="fs-1 text-center">Product list</p>
        <div className="container">
          <div className="container text-center">
            {/* <div className="row row-cols-4">{this.generateCard(this.list)}</div> */}
          </div>
        </div>
        <button
          className="btn btn-danger"
          onClick={() => {
            // this.productList("https://fakestoreapi.com/products");
          }}
        >
          test
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            // this.log();
          }}
        >
          log
        </button>
      </>
    );
  }
}

function Products() {
  const dispatch = useDispatch<AppDispatch>();
   const list = useSelector((state: RootState) => state.productList.list);

  function productList(url: string) {
    dispatch(getProductListAsync("https://fakestoreapi.com/products"));
  }
  function log() {
    console.table(list);
  }
  
  function generateCard(productList:Product[]) {
    
    return productList.map(p => {
      return (
        <div key={p.id} className="col mb-3">
          <ProductCard data={p}/>
        </div>
      );
    })
  }

  return (
    <>
      <p className="fs-1 text-center">Product list</p>
      <div className="container">
        <div className="container text-center">
          <div className="row row-cols-4">
            {generateCard(list)}
          </div>
        </div>
      </div>
      <button
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
      </button>
    </>
  );
}
export default ProductComp;
