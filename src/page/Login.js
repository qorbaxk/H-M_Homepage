import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authenticateAction } from "../redux/actions/authenticateAction";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginUser = (event) => {
    event.preventDefault(); //form을 쓸때 새로고침을 막아줌
    console.log("로그인클릭했다!");
    dispatch(authenticateAction.login(id, password));
    navigate("/");
  };

  return (
    <Container>
      <Form className="login-area" onSubmit={(event) => loginUser(event)}>
        <Form.Label>이메일</Form.Label>
        <Form.Control
          type="email"
          placeholder="이메일을 입력하세요"
          onChange={(event) => setId(event.target.value)}
        />
        <Form.Label>비밀번호</Form.Label>
        <Form.Control
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button type="submit">로그인</Button>
      </Form>
    </Container>
  );
};

export default Login;
