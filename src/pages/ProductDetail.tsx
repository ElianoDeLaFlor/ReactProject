import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../redux/store/store";
import { getProductListByIdAsync } from "../redux/slices/ProductByIdFetcher";
import { addItem, removeItem } from "../redux/slices/CartData";
import { add_Item } from "../redux/slices/CartDatacopy";
import { useEffect } from "react";
import { Rating } from "react-simple-star-rating";
import Product from "../models/Product";
import CartItem from "../models/CartItem";

function ProductDetail() {
  const id = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const item = useSelector((state: RootState) => state.product.item);

  const url = `https://fakestoreapi.com/products/${id.id}`;
  function productItem() {
    dispatch(getProductListByIdAsync(url));
  }

  useEffect(() => {
    productItem();
  }, []);

  // function generateSelectItem() {
  //   let list: any[] = [];
  //   for (let index = 1; index <= 100; index++) {
  //     list.push(
  //       <option title={index.toString()} key={index} value={index}>
  //         {index}
  //       </option>
  //     );
  //   }
  //   return list;
  // }
  function addToCart(product: Product | null | undefined) {
    if (product) {
      let item = new CartItem();
      item.itemCount = 1;
      item.product = product;
      dispatch(addItem(item));
    }
  }

  function add_ToCart(product: Product | null | undefined) {
    if (product) {
      dispatch(add_Item(product));
    }
  }

  // function generateSelectItem() {
  //   let list: any[] = [];
  //   for (let index = 1; index <= 100; index++) {
  //     list.push(
  //       <option title={index.toString()} key={index} value={index}>
  //         {index}
  //       </option>
  //     );
  //   }
  //   return list;
  // }

  return (
    <>
      {console.log("cart")}
      <p className="fs-1 text-center">{item.data?.title}</p>
      <div className="container py-5">
        <NavLink
          to="/products"
          className="btn btn-light ms-2 mb-2"
          aria-current="page"
        >
          <i className="bi bi-arrow-90deg-left"></i>
          <span className="fs-5 ms-2">Products</span>
        </NavLink>
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
