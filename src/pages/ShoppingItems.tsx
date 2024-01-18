import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store/store";
import Product from "../models/Product";
import { NavLink } from "react-router-dom";
import { remove_Item, empty_Item } from "../redux/slices/CartDatacopy";
import { useContext } from "react";
import CheckoutModal from "./CheckoutModal";
import { showModal } from "./CheckoutModal";
import cartDataContext from "../components/DataContext";
import ICartItem from "../interfaces/ICartItem";
import Cart from "../models/Cart";

function ShoppingItems() {
  const dispatch = useDispatch<AppDispatch>();
  //const list_ = useSelector((state: RootState) => state.shopItems.testItem);

  let list: ICartItem[];
  let totalprice: number = 0;
  const cartData = useContext(cartDataContext);
  if (cartData !== undefined) {
    list = cartData?.data.Items;
    totalprice = cartData?.data.price;
  }

  console.table(cartData);
  totalprice = Number.parseFloat(totalprice.toFixed(2));
  function GenerateRows() {
    let i = 0;
    return (
      <>
        {list.map((data: ICartItem) => {
          i++;

          return (
            <>
              <tr key={i}>
                <th scope="row">{i}</th>
                <td>
                  <img
                    width={90}
                    height={90}
                    src={data.product.image}
                    alt="item"
                  />
                </td>
                <th scope="row">{data.product.title}</th>
                <td>{data.itemCount}</td>
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
            </>
          );
        })}
      </>
    );
  }

  function deleteData_(item: Product) {
    dispatch(remove_Item(item));
  }

  function deleteData(item: ICartItem) {
    let prod = cartData?.data.Items.find(
      (i) => i.product.id === item.product.id
    );
    let count = prod?.itemCount;
    if (count === 1) {
      //There is only one item of that type in the cart
      //get product index
      let index = cartData?.data.Items.findIndex(
        (i) => i.product.id === item.product.id
      );
      if (cartData !== undefined) {
        if (index !== undefined) cartData.data.Items.splice(index, 1);
        //update item count in the cart
        cartData.data.itemCount -= 1;
        cartData.count = cartData.data.itemCount;
        //update the total price in the cart
        cartData.data.price -= item.product.price;

        cartData.setValue(cartData.data);
        cartData.setCountValue(cartData.count);
      }
    } else {
      if (prod) {
        prod.itemCount -= 1;
        prod.price = prod.product.price * prod.itemCount;
        //get product index
        let index = cartData?.data.Items.findIndex(
          (i) => i.product.id === item.product.id
        );
        if (cartData !== undefined) {
          if (index !== undefined) cartData.data.Items[index] = prod;
          //update item count in the cart
          cartData.data.itemCount -= 1;
          cartData.count = cartData.data.itemCount;
          //update the total price in the cart
          cartData.data.price -= item.product.price;

          cartData.setValue(cartData.data);
          cartData.setCountValue(cartData.count);
        }
      }
    }
  }

  function emptyCart_() {
    dispatch(empty_Item());
  }

  function emptyCart() {
    cartData?.setValue(new Cart());
    cartData?.setCountValue(0);
  }

  return (
    <>
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
          className="btn btn-warning"
          onClick={() => {
            emptyCart();
          }}
        >
          <i className="bi bi-cart-x"></i>
          <span className="fs-4 ms-2">Empty</span>
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            showModal();
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

        <tbody>
          <GenerateRows />
        </tbody>
        <tr>
          <td
            colSpan={5}
            className="text-md-end pe-5 fs-2 fw-bold text-decoration-underline"
          >
            {totalprice}
          </td>
        </tr>
      </table>
      <div>{/* <Loading /> */}</div>
      <CheckoutModal total={totalprice} />
    </>
  );
}

export default ShoppingItems;
