import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const LoginForm = () => {
  return (
    <div className="h-100 d-flex text-black">
      <div className="w-75 m-auto p-3">
        <div className="align-middle text-center">
          <h2>Login</h2>
          Discover unforgettable dates in Seoul
        </div>

        <div className="mt-5">
          <label htmlFor="EmailInput" className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="EmailInput" 
            placeholder="name@example.com" 
          />
        </div>

        <div className="mt-3">
          <label htmlFor="Password" className="form-label">비밀번호</label>
          <input type="password" className="form-control" id="Password" />
        </div>

        <div className="mt-3 d-flex justify-content-between">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              자동 로그인
            </label>
          </div>
          <div>
            아이디/비밀번호 찾기
          </div>
        </div>

        <div className="text-center mt-3">
          <Button />
        </div>

        <div className="hr-sect mt-3">or</div>

        <div className="text-center mt-5">
          Social Login buttons will be here. In development...
        </div>

        <div className="text-center mt-5">
          회원이 아니신가요? <Link to="/sign-up">회원가입 페이지로 이동</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginForm