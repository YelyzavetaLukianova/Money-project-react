import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { registerNewUser, logInUser } from '../../redux/auth/authOperations';
import { getErrorMessage } from '../../redux/auth/authSelectors';

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
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);

  const errorMessage = useSelector(getErrorMessage);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!errorMessage) return;
    if (errorMessage === 'Password is wrong') {
      return toast.error('Email or password is wrong');
    }
    toast.error(errorMessage);
  }, [errorMessage]);

  useEffect(() => {
    setErrorEmail(null);
    setErrorPassword(null);
  }, [email, password]);

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const isEmailValid = () => {
    const index = email.indexOf('@');
    const sliceEmail = email.slice(0, index);

    if (email.trim().length === 0) {
      setErrorEmail('это обязательное поле');
      return false;
    }
    if (email.length < 10 || email.length > 63) {
      setErrorEmail('email должен содержать минимум 10 и максимум 63 символа');
      return false;
    }
    if (!email.includes('@')) {
      setErrorEmail('email должен обязательно содержать @');
      return false;
    }
    if (sliceEmail.length < 3) {
      setErrorEmail('перед @ должно стоять минимум 2 символа');
      return false;
    }
    if (!email.includes('.')) {
      setErrorEmail('email должен обязательно содержать .');
      return false;
    }

    return true;
  };

  const isPasswordValid = () => {
    if (password.trim().length === 0) {
      setErrorPassword('это обязательное поле');
      return false;
    }

    return true;
  };

  const registerHandleClick = e => {
    if (isEmailValid() === false && isPasswordValid() === false) return;
    if (isEmailValid() === false) return;
    if (isPasswordValid() === false) return;

    const credentials = { email, password };
    dispatch(registerNewUser(credentials));
    reset();
    setErrorEmail(null);
    setErrorPassword(null);
  };

  const loginHandleClick = e => {
    if (email.trim().length === 0 && password.trim().length === 0) {
      setErrorEmail('это обязательное поле');
      setErrorPassword('это обязательное поле');
      return;
    }
    if (email.trim().length === 0) {
      return setErrorEmail('это обязательное поле');
    }
    if (password.trim().length === 0) {
      return setErrorPassword('это обязательное поле');
    }

    const credentials = { email, password };
    dispatch(logInUser(credentials));
    reset();
    setErrorEmail(null);
    setErrorPassword(null);
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

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
            <span>
              {errorEmail && <span className={styles.spanError}>*</span>}{' '}
              Электронная почта:
            </span>

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
          {errorEmail && <p className={styles.textError}>{errorEmail}</p>}

          <label className={`${styles.label} ${styles.secondLabel}`}>
            <span>
              {errorPassword && <span className={styles.spanError}>*</span>}{' '}
              Пароль:
            </span>
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
          {errorPassword && <p className={styles.textError}>{errorPassword}</p>}

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
