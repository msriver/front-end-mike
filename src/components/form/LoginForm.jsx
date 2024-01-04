import React from 'react'

const LoginForm = () => {
  

  return (
    <form>
      {/* Email input */}
      <div className="form-outline mb-4">
        <input
          type="email"
          id="form1Example13"
          className="form-control form-control-lg"
        />
        <label className="form-label" htmlFor="form1Example13">
          Email
        </label>
      </div>
      {/* Password input */}
      <div className="form-outline mb-4">
        <input
          type="password"
          id="form1Example23"
          className="form-control form-control-lg"
        />
        <label className="form-label" htmlFor="form1Example23">
          Password
        </label>
      </div>
      <div className="d-flex justify-content-around align-items-center mb-4">
        {/* Checkbox */}
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue=""
            id="form1Example3"
            defaultChecked=""
          />
          <label className="form-check-label" htmlFor="form1Example3">
            {" "}
            자동로그인{" "}
          </label>
        </div>
        <a href="#!">패스워드 찾기</a>
      </div>
      {/* Submit button */}
      <button type="submit" className="btn btn-primary btn-lg btn-block">
        로그인
      </button>
      <div className="divider d-flex align-items-center my-4">
        <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
      </div>
        <button
          className="btn btn-primary btn-lg btn-block"
          style={{ 
              backgroundColor: "#FEE500", 
              backgroundImage: 'url(/src/assets/kakao_login_medium_wide.png)',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat'
            }}
        >
          <span style={{visibility: 'hidden'}}>Kakao Login</span>
        </button>
        {/* <a
          className="btn btn-primary btn-lg btn-block"
          style={{ backgroundColor: "#55acee" }}
          href="#!"
          role="button"
        >
          <i className="fab fa-twitter me-2" />
        Continue with Twitter
      </a> */}
    </form>
  )
}

export default LoginForm