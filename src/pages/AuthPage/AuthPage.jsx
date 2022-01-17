import AuthForm from '../../components/AuthForm/AuthForm';
import { useContext } from 'react';
import { ThemeContext, themes } from '../../components/Context/themeContext';
import styles from './AuthPage.module.css';

const AuthPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.box}>
      <div className={styles.wrapper}>
        <h1 className={styles.visuallyHidden}>Kapu$ta</h1>
        {/* <div className={styles.logo}></div> */}
        <div
          className={
            theme === themes.light ? styles.lightTheme : styles.darkTheme
          }
        ></div>

        <p className={styles.text}>Smart Finance</p>
      </div>
      <AuthForm />
    </div>
  );
};

export default AuthPage;
