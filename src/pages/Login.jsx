import LoginStyles from '@/styles/LoginStyles.module.css';
import Image from '@/components/common/Image';
import LoginForm from '../components/form/LoginForm';

const styles = {
  imageStyle: {
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%'
  }
}

const Login = () => {
  return (
    <div className={LoginStyles.pageContainer}>
      <div className={LoginStyles.leftSide}>
        <Image styles={styles.imageStyle} />
      </div>

      <div className={LoginStyles.rightSide}>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login;