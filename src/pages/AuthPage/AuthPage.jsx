import AuthForm from '../../components/AuthForm/AuthForm';
import styles from './AuthPage.module.css';

const AuthPage = () => {
  return (
    <div className={styles.box}>
      <div className={styles.wrapper}>
        <h1 className={styles.visuallyHidden}>Kapu$ta</h1>
        <div className={styles.logo}></div>
        <p className={styles.text}>Smart Finance</p>
      </div>
      <AuthForm />
    </div>
  );
};

export default AuthPage;
