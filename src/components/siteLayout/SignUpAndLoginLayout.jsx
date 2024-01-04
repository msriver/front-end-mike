import LoginStyles from '@/styles/LoginStyles.module.css';
import Image from '@/components/common/Image';
import { Outlet } from "react-router-dom";

const styles = {
  imageStyle: {
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%'
  }
}

const SignUpLayout = () => {
  return (
    <>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignUpLayout