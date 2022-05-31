import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Dropdown } from "react-bootstrap";

const ProductDetail = () => {
  let { id } = useParams();

  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col className="product-ex">
          <div>{product?.title}</div>
          <div>₩ {product?.price}</div>
          <Dropdown>
            <Dropdown.Toggle className="size-select" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>S</Dropdown.Item>
              <Dropdown.Item>M</Dropdown.Item>
              <Dropdown.Item>L</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <button className="product-add">추가</button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
