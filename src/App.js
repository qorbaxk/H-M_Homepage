import './App.css';
import { Routes, Route } from "react-router-dom";
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from 'react';

//1. 전체상품페이지, 로그인페이지, 상품상세페이지
//1-1. 내비게이션바 만들기
//2. 전체상품페이지에서는 전체상품을 볼 수 있다
//3. 로그인버튼을 누르면 로그인페이지가 나온다
//4. 상품디테일을 눌렀으나, 로그인이 안되어있으면 로그인페이지가 먼저나온다. 로그인이 되어있으면 상품디테일 페이지를 볼 수 있다
//5. 로그아웃버튼을 누르면 로그아웃이 된다. 되면 디테일페이지를 볼 수 없다, 다시 로그인 페이지가 보인다
//6. 로그인을 하면 로그아웃이보이고 로그아웃을 하면 로그인이 보인다
//7. 상품을 검색할 수 있다

function App() {

  const[authenticate,setAuthenticate]=useState(false);
  //값이 true면 로그인됨 false면 로그인 안됨
  useEffect(()=>{
    console.log("로그인됐니?",authenticate);
  },[authenticate]);

  const [searchProduct,setSearchProduct] = useState("");


  return (
    <div>
      <Navbar authenticate={authenticate} setSearchProduct={setSearchProduct}/>
      <Routes>
        <Route path='/' element={<ProductAll authenticate={authenticate}
        searchProduct={searchProduct}/>}/>
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route path='/product/:id' element={<ProductDetail />}/>

      </Routes>
    </div>
  );
}

export default App;
