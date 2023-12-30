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
      <div className={LoginStyles.pageContainer}>
        <div className={LoginStyles.leftSide}>
          <Image styles={styles.imageStyle} />
        </div>

        <div className={LoginStyles.rightSide}>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default SignUpLayout