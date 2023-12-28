import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store/store";
import Product from "../models/Product";
import { NavLink } from "react-router-dom";
import { remove_Item } from "../redux/slices/CartDatacopy";
import { useState } from "react";
import CheckoutModal from "./CheckoutModal";
import ReactDOM from "react-dom";

function ShoppingItems() {
  const dispatch = useDispatch<AppDispatch>();
  const list = useSelector((state: RootState) => state.shopItems.testItem);
  let [total, setatotal] = useState(0);
  let totalprice = 0;
  function generateRows() {
    return list.map((data) => {
      let i = 0;
      totalprice += data.price;
      totalprice=Number.parseFloat(totalprice.toFixed(2));
      i++;

      return (
        <tr key={data.id}>
          <th scope="row">{i}</th>
          <td>
            <img width={90} height={90} src={data.image} alt="item" />
          </td>
          <th scope="row">{data.title}</th>
          <td>{1}</td>
          <td>{data.price}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                deleteData(data);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  function deleteData(item: Product) {
    dispatch(remove_Item(item));
  }

  return (
    <>
      <CheckoutModal />
      <p className="fs-1 text-center">Shopping list</p>

      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <NavLink
          to="/products"
          className="btn btn-danger ms-2"
          aria-current="page"
        >
          <i className="bi bi-arrow-90deg-left"></i>
          <span className="fs-4 ms-2">Products</span>
        </NavLink>

        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
          }}
        >
          <i className="bi bi-credit-card-fill"></i>
          <span className="fs-4 ms-2">pay</span>
        </button>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Picture</th>
            <th scope="col">Product</th>
            <th scope="col">Quantity</th>
            <th scope="col">Unit Price</th>
          </tr>
        </thead>

        <tbody>{generateRows()}</tbody>
        <tr>
          <td
            colSpan={5}
            className="text-md-end pe-5 fs-2 fw-bold text-decoration-underline"
          >
            {totalprice}
          </td>
        </tr>
      </table>
    </>
  );
}

export default ShoppingItems;
