import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import Navbar from "./component/Navbar";
import { useEffect, useState } from "react";
import PrivateRoute from "./Route/PrivateRoute";

function App() {
  const [searchProduct, setSearchProduct] = useState("");

  return (
    <div>
      <Navbar setSearchProduct={setSearchProduct} />
      <Routes>
        <Route
          path="/"
          element={<ProductAll searchProduct={searchProduct} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
