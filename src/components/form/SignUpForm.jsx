import Button from './Button.jsx';
import Picklist from './Picklist';
import { Link } from 'react-router-dom';

import { useContext, useEffect, useRef } from 'react';
import { UserInfoStateConext, UserInfoDispatchConext } from '../../contexts/UserInfoContext.jsx';
import { mbtiOptions, genderOptions } from '../../constants/Constants.js';

import DaumAddress from '../common/DaumAddress.jsx';

const SignUpForm = () => {
  const userInfo = useContext(UserInfoStateConext);
  const dispatchUserInfo = useContext(UserInfoDispatchConext);

  let isTermsAgreed = useRef(false);

  useEffect(() => {
    return () => {
      dispatchUserInfo({type: 'CLEAR_SIGNUP_INFO'})
    };
  }, []);

  const onChangeEventHandler = (e) => {
    const fieldName = e.target.dataset.fieldName;
    const fieldValue = e.target.value;
    dispatchUserInfo({type: 'SET_SIGNUP_INFO', fieldName, fieldValue});
  };

  const setIsTermsAgreed = (e) => {
    isTermsAgreed.current = e.target.value;
  };

  function validateFormBeforeSubmitting() {
    const userInputValues = userInfo;
  }

  function openDaumAddress() {
    console.log('I am clicking the address');
    return (<DaumAddress modalMode={true} />)
  }

  return (
    <form className="h-100 d-flex text-black pt-3">
      <div className="w-75 m-auto p-3">

        <div className="align-middle text-center">
          <h2>회원 가입</h2>
        </div>

        <div className="mt-5">
          <label htmlFor="EmailInput" className="form-label">Email</label>
          <div className="input-group mb-3">
            <input 
              type="email" 
              className="form-control" 
              id="EmailInput" 
              placeholder="name@example.com" 
              data-field-name="email"
              onChange={onChangeEventHandler}
              required
            />
            <button 
              className="btn btn-light" 
              type="button" 
              id="email-dup-check"
            >
              중복 체크
            </button>
          </div>
        </div>

        <div className="mt-3">
          <label htmlFor="Nickname" className="form-label">닉네임</label>
          <div className="input-group mb-3">
            <input 
              type="text" 
              className="form-control" 
              id="Nickname" 
              data-field-name="nickName"
              onChange={onChangeEventHandler}
              required
            />
            <button 
              className="btn btn-light" 
              type="button" 
              id="nickname-dup-check"
            >
              중복 체크
            </button>
          </div>
        </div>

        <div className="mt-3">
          <label htmlFor="Password" className="form-label">비밀번호</label>
          <input 
            type="password" 
            className="form-control" 
            id="Password" 
            data-field-name="password"
            onChange={onChangeEventHandler}
            required
          />
        </div>

        <div className="mt-3">
          <label htmlFor="PasswordCheck" className="form-label">비밀번호 확인</label>
          <input 
            type="password" 
            className="form-control" 
            id="PasswordCheck" 
            data-field-name="passwordCheck"
            onChange={onChangeEventHandler}
            required
          />
        </div>

        <div className="row">
          <div className="col-md-6 mt-3">
            <label htmlFor="inputZip" className="form-label">우편번호</label>
            <input 
              type="text" 
              className="form-control" 
              id="inputZip" 
              data-field-name="zipCode"
              onChange={onChangeEventHandler}
              onClick={openDaumAddress}
            />
          </div>
          <div className="col-md-6 mt-3">
            <label htmlFor="inputCity" className="form-label">도시</label>
            <input 
              type="text" 
              className="form-control" 
              id="inputCity" 
              data-field-name="city"
              onChange={onChangeEventHandler}
              disabled
            />
          </div>
          <div className="col-12 mt-3">
            <label htmlFor="inputAddress" className="form-label">상세주소</label>
            <input 
              type="text" 
              className="form-control" 
              id="inputAddress" 
              data-field-name="street"
              onChange={onChangeEventHandler}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-6 mt-3">
            <Picklist 
              options={mbtiOptions}
              label="MBTI"
              placeholder="당신의 MBTI를 선택해주세요."
              inputId="MBTI"
              data-field-name="mbti"
              required
            />
          </div>

          <div className="col-6 mt-3">
            <Picklist 
              options={genderOptions}
              label="성별"
              placeholder="성별을 선택해주세요"
              inputId="Gender"
              data-field-name="gender"
              required
            />
          </div>
        </div>

        <div className="form-check mt-5">
          <input 
            className="form-check-input" 
            type="checkbox" 
            value={isTermsAgreed} 
            id="flexCheckChecked" 
            onChange={setIsTermsAgreed} 
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            회원 가입을 위한 개인정보 수집 이용에 동의합니다.
          </label>
        </div>

        <div className="text-center mt-3">
          <Button clickAction={validateFormBeforeSubmitting} />
        </div>

        <div className="text-center mt-3">
          이미 회원이신가요? <Link to="/login">로그인 페이지로 이동</Link>
        </div>
      </div>
    </form>
  )
}

export default SignUpForm