import React from 'react';

const LoginForm = () => {
  return (
    <div className="h-100 d-flex text-black">
      <div className="w-75 m-auto p-3">
        <div className="align-middle text-center">
          <h2>Sign up</h2>
          Sign up to discover unforgettable dates in Seoul
        </div>
        <div className="mt-5">
          <label htmlFor="EmailInput" className="form-label">Email</label>
          <input type="email" className="form-control" id="EmailInput" placeholder="name@example.com" />
        </div>
        <div className="mt-3">
          <label htmlFor="Nickname" className="form-label">닉네임</label>
          <input type="text" className="form-control" id="Nickname" />
        </div>
        <div className="mt-3">
          <label htmlFor="Password" className="form-label">비밀번호</label>
          <input type="password" className="form-control" id="Password" />
        </div>
        <div className="mt-3">
          <label htmlFor="PasswordCheck" className="form-label">비밀번호 확인</label>
          <input type="password" className="form-control" id="PasswordCheck" />
        </div>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Checked checkbox
        </label>
      </div>
    </div>
  )
}

export default LoginForm