import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/styles/style.css";

import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import ProductComp from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import ShoppingItems from "./pages/ShoppingItems";
import { createContext, useState } from "react";
import Cart from "./models/Cart";
import cartDataContext from "./components/DataContext";
import Product from "./models/Product";

function App() {
  const [cartData, setCartData] = useState(new Array<Product>());
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <cartDataContext.Provider
        value={{
          data: cartData,
          count: cartCount,
          setValue: setCartData,
          setCountValue: setCartCount,
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductComp />} />
          <Route path="/products/search/:search" element={<ProductComp />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<ShoppingItems />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </cartDataContext.Provider>
    </>
  );
}

export default App;
