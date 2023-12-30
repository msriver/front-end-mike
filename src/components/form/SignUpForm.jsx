import Button from './Button';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  return (
    <div className="h-100 d-flex text-black">
      <div className="w-75 m-auto p-3">

        <div className="align-middle text-center">
          <h2>회원 가입</h2>
          Sign up to discover unforgettable dates in Seoul
        </div>

        <div className="mt-5">
          <label htmlFor="EmailInput" className="form-label">Email</label>
          <div className="input-group mb-3">
            <input 
              type="email" 
              className="form-control" 
              id="EmailInput" 
              placeholder="name@example.com" 
            />
            <button className="btn btn-light" type="button" id="button-addon2">중복 체크</button>
          </div>
        </div>

        <div className="mt-3">
          <label htmlFor="Nickname" className="form-label">닉네임</label>
          <div className="input-group mb-3">
            <input 
              type="text" 
              className="form-control" 
              id="Nickname" 
              placeholder="name@example.com" 
            />
            <button className="btn btn-light" type="button" id="button-addon2">중복 체크</button>
          </div>
        </div>

        <div className="mt-3">
          <label htmlFor="Password" className="form-label">비밀번호</label>
          <input type="password" className="form-control" id="Password" />
        </div>

        <div className="mt-3">
          <label htmlFor="PasswordCheck" className="form-label">비밀번호 확인</label>
          <input type="password" className="form-control" id="PasswordCheck" />
        </div>

        <div className="form-check mt-5">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            회원 가입을 위한 개인정보 수집 이용에 동의합니다.
          </label>
        </div>

        <div className="text-center mt-3">
          <Button />
        </div>

        <div className="text-center mt-5">
          이미 회원이신가요? <Link to="/sign-in">로그인 페이지로 이동</Link>
        </div>
      </div>
    </div>
  )
}

export default SignUpForm