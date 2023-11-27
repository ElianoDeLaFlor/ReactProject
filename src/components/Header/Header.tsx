import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky">
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
            <button
              className="btn btn-success position-relative me-5"
              type="button"
            >
              <i className="bi bi-bag-fill fs-5"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                99+
                <span className="visually-hidden">cart item</span>
              </span>
            </button>
            
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
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
