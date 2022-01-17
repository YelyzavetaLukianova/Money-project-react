import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { registerNewUser, logInUser } from '../../redux/auth/aauthOperations';
import { getErrorMessage } from '../../redux/auth/aauthSelectors';

import symbol from '../../images/google-symbol.png';
import styles from './AuthForm.module.css';

<ToastContainer
  position="bottom-right"
  autoClose={2000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
/>;

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const errorMessage = useSelector(getErrorMessage);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!errorMessage) return;
    if (errorMessage === 'Password is wrong') {
      return toast.error('Email or password is wrong');
    }
    toast.error(errorMessage);
  }, [errorMessage]);

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const registerHandleClick = e => {
    const credentials = { email, password };
    dispatch(registerNewUser(credentials));
    reset();
  };

  const loginHandleClick = e => {
    const credentials = { email, password };
    dispatch(logInUser(credentials));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  // const isBtnDisabled = !email || !password;

  return (
    <>
      <ToastContainer />
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <p className={`${styles.text} ${styles.firstText}`}>
            Вы можете авторизоваться с помощью Google Account:
          </p>

          <button type="button" className={styles.btn}>
            <img
              src={symbol}
              alt="Google symbol"
              width="18px"
              height="18px"
              className={styles.img}
            />
            Google
          </button>

          <p className={`${styles.text} ${styles.secondText}`}>
            Или зайти с помощью e-mail и пароля, предварительно
            зарегистрировавшись:
          </p>

          <label className={`${styles.label} ${styles.firstLabel}`}>
            Электронная почта:
            <input
              className={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </label>
          <label className={`${styles.label} ${styles.secondLabel}`}>
            Пароль:
            <input
              className={styles.input}
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Пароль"
              required
            />
          </label>

          <div className={styles.box}>
            <button
              type="button"
              className={`${styles.logInBtn} ${styles.authBtn}`}
              onClick={loginHandleClick}
            >
              Войти
            </button>
            <button
              type="button"
              className={`${styles.registerBtn} ${styles.authBtn}`}
              onClick={registerHandleClick}
            >
              Регистрация
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AuthForm;
