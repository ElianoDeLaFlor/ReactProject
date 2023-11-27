import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../redux/store/store";
import { getProductListByIdAsync } from "../redux/slices/ProductByIdFetcher";
import { useEffect } from "react";
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

function ProductDetail() {
  const id = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const item = useSelector((state: RootState) => state.product.item);
  const url = `https://fakestoreapi.com/products/${id.id}`;
  function productItem() {
    dispatch(getProductListByIdAsync(url));
  }

  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);

    // other logic
  };
  // Optinal callback functions
  const onPointerEnter = () => {};
  const onPointerLeave = () => {};
  const onPointerMove = (value: number, index: number) =>
    console.log(value, index);

  useEffect(() => {
    productItem();
  }, []);

  return (
    <>
      {}
      <p className="fs-1 text-center">{item.data?.title}</p>
      <div className="container py-5">
        <a className="btn btn-light ms-2 mb-2" href="/products">
          <i className="bi bi-arrow-90deg-left"></i>
          <span className="fs-5 ms-2">Products</span>
        </a>
        <div className="container text-center">
          <div className="card">
            <div className="card-body">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4 border-end">
                    <img
                      src={item.data?.image}
                      className="img-fluid rounded-start"
                      alt={item.data?.title}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <h5 className="card-title fs-4">
                            {item.data?.title}
                          </h5>
                        </li>
                        <li className="list-group-item">
                          {item.data?.category}
                        </li>
                        <li className="list-group-item">
                          <p className="card-text">{item.data?.description}</p>
                        </li>

                        <li className="list-group-item fs-2">
                          <span className="fs-5">Rating:</span>
                          <Rating
                            initialValue={item.data?.rating?.rate}
                            /* Available Props */
                          />
                        </li>
                        <li className="list-group-item fs-2">
                          {`MUR ${item.data?.price}`}
                        </li>
                      </ul>
                      <button title="add to cart" className="btn btn-success">
                        <i className="bi bi-cart fs-3"></i>
                        <span className="fs-3 ms-2">add to cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;