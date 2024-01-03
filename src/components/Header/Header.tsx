import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store/store";
import { ChangeEvent, FormEvent, useState } from "react";

interface HeaderPropos {
  sendSearchData: (data: string) => void;
}

function Header() {
  const shoppingCart = useSelector(
    (state: RootState) => state.shopItems.testItem
  );

  let [data, setData] = useState<string>("");
  const navigate = useNavigate();

  function userSearchInput(e: ChangeEvent<HTMLInputElement>) {
    setData(e.target.value);
  }

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    //filter the product list if the serch criteria is greter than 3
    if (data.length > 3) {
      const url = `/products/search/${data}`;
      return navigate(url);
    } else {
      //other wise retur the list
      return navigate("/products");
    }
  }

  return (
    <>
      {}
      <nav
        className="navbar mb-5 navbar-expand-lg sticky-top shadow headerbackground fs-4"
        
      >
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/home" className="nav-link" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/detail" className="nav-link" aria-current="page">
                  Product detail
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/products"
                  className="nav-link"
                  aria-current="page"
                >
                  Products
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
            </ul>
            <NavLink
              to="/cart"
              className="btn btn-success position-relative me-5 mt-1"
              aria-current="page"
            >
              <i className="bi bi-bag-fill fs-5"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {shoppingCart.length}
                <span className="visually-hidden">cart item</span>
              </span>
            </NavLink>
            {/* <button
              className="btn btn-success position-relative me-5 mt-1"
              type="button"
            >
              <i className="bi bi-bag-fill fs-5"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {shoppingCart.length}
                <span className="visually-hidden">cart item</span>
              </span>
            </button> */}

            <form className="d-flex" role="search" onSubmit={submit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={userSearchInput}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;
