import React from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();

  const loginUser = (event) => {
    event.preventDefault(); //form을 쓸때 새로고침을 막아줌
    console.log("로그인클릭했다!");
    setAuthenticate(true);
    navigate("/");
  };

  return (
    <Container>
      <Form className="login-area" onSubmit={(event) => loginUser(event)}>
        <label>이메일</label>
        <input type="email" placeholder="이메일을 입력하세요" />
        <label>비밀번호</label>
        <input type="password" placeholder="비밀번호를 입력하세요" />
        <button type="submit">로그인</button>
      </Form>
    </Container>
  );
};

export default Login;
