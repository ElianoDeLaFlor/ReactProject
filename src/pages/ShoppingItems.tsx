import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store/store";
import Product from "../models/Product";
import { NavLink } from "react-router-dom";
import { remove_Item } from "../redux/slices/CartDatacopy";

function ShoppingItems() {
  const dispatch = useDispatch<AppDispatch>();
  const list = useSelector((state: RootState) => state.shopItems.testItem);

  function generateRows() {
    return list.map((data) => {
      let i = 0;
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
      <p className="fs-1 text-center">Shopping list</p>
      <NavLink
        to="/products"
        className="btn btn-light ms-2 mb-2"
        aria-current="page"
      >
        <i className="bi bi-arrow-90deg-left"></i>
        <span className="fs-5 ms-2">Products</span>
      </NavLink>

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
      </table>
    </>
  );
}

export default ShoppingItems;
