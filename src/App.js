import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  //값이 true면 로그인됨 false면 로그인 안됨
  useEffect(() => {
    console.log("로그인됐니?", authenticate);
  }, [authenticate]);

  const [searchProduct, setSearchProduct] = useState("");

  return (
    <div>
      <Navbar
        authenticate={authenticate}
        setSearchProduct={setSearchProduct}
        setAuthenticate={setAuthenticate}
      />
      <Routes>
        <Route
          path="/"
          element={
            <ProductAll
              authenticate={authenticate}
              searchProduct={searchProduct}
            />
          }
        />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
