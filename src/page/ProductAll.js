import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import ProductCard from "../component/ProductCard";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductAll = ({ searchProduct }) => {
  //리듀서를 합치면 state가 어떤건지 지정해줘야 불러올 수 있음
  const productList = useSelector((state) => state.product.productList);
  const dispatch = useDispatch();

  const getProducts = async () => {
    dispatch(productAction.getProducts()); //미들웨어 거쳐서 스토어감
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {productList
            .filter((val) => {
              if (searchProduct == "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchProduct.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item) => (
              <Col lg={3}>
                <ProductCard item={item} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
