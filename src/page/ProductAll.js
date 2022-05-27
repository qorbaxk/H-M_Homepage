import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';


const ProductAll = ({authenticate, searchProduct}) => {

  const [productList,setProductList] = useState([]);

  const getProducts = async() => {
    let url = `http://localhost:5000/products`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }
  useEffect(()=>{
    getProducts();
  },[])

  

  return (
    <div>
      <Container>
        <Row>
          {productList.filter((val)=>{
            if(searchProduct == ""){
              return val;
            }else if(val.title.toLowerCase().includes(searchProduct.toLowerCase())){
              return val;
            }
          }).map((item)=> (
              <Col lg={3}><ProductCard item={item} authenticate={authenticate}/></Col>
          ))}
        </Row>
      </Container>
      
    </div>
  )
}

export default ProductAll