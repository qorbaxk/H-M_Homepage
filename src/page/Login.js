import React from 'react'

const Login = () => {
  return (
    <div className='login-area'>
        <div>이메일</div>
        <input type="email" placeholder="이메일을 입력하세요"/>
        <div>비밀번호</div>
        <input type="password" placeholder="비밀번호를 입력하세요"/>
        <button type="submit">로그인</button>

    </div>
  )
}

export default Login