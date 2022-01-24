import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleLogin } from 'react-google-login';

import {
  registerNewUser,
  logInUser,
  logInGoogle,
} from '../../redux/auth/authOperations';
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

  /*Логинизаци через GOOGLE аккаунт без библеотеки*/

  // const location = useLocation();
  // const accessToken = new URLSearchParams(location.search).get('accessToken');
  // const refreshToken = new URLSearchParams(location.search).get('refreshToken');
  // const sid = new URLSearchParams(location.search).get('sid');

  // useEffect(() => {
  //   if (!accessToken || !refreshToken || !sid) return;
  //   const credentials = { accessToken, refreshToken, sid };
  //   dispatch(logInGoogle(credentials));
  // }, [accessToken, dispatch, refreshToken, sid]);

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

  const alphanumericEmail = () => {
    const regex = /^[a-zA-Z0-9@_.-]*$/;
    // готовая валидация для email
    // const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(regex)) {
      return;
    } else {
      return false;
    }
  };

  const alphanumericPassword = () => {
    const regex = '^[A-Za-z0-9]*$';
    if (password.match(regex)) {
      return;
    } else {
      return false;
    }
  };

  const isEmailValid = () => {
    const emailLength = email.length;
    const index = email.indexOf('@');
    const sliceEmail = email.slice(0, index);

    if (alphanumericEmail() === false) {
      setErrorEmail(
        'Электронная почта может включать в себя только латинские буквы, цифры и знаки: "@", "-", "_", "."',
      );
      return false;
    }

    if (email.indexOf('-') === 0 || email.indexOf('-') === emailLength - 1) {
      setErrorEmail(
        'знак "-" не должен бить в начале или конце электронной почты',
      );
      return false;
    }

    if (email.trim().length === 0) {
      setErrorEmail('это обязательное поле');
      return false;
    }
    if (email.length < 10 || email.length > 63) {
      setErrorEmail(
        'Электронная почта должна содержать минимум 10 и максимум 63 символа',
      );
      return false;
    }
    if (!email.includes('@')) {
      setErrorEmail('Электронная почта должна обязательно содержать @');
      return false;
    }
    if (sliceEmail.length < 2) {
      setErrorEmail('перед @ должно стоять минимум 2 символа');
      return false;
    }
    if (!email.includes('.')) {
      setErrorEmail('Электронная почта должна обязательно содержать .');
      return false;
    }

    return true;
  };

  const isPasswordValid = () => {
    if (password.trim().length === 0) {
      setErrorPassword('это обязательное поле');
      return false;
    }

    if (alphanumericPassword() === false) {
      setErrorPassword(
        'пароль может включать в себя только латинские буквы и цифры',
      );
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

  const clientId =
    '272069178330-662p6alb34mualmhoibqe3cjgm4opf50.apps.googleusercontent.com';

  const responseGoogle = response => {
    const email = response.profileObj.email;
    const password = response.profileObj.googleId;
    dispatch(logInGoogle({ email, password }));
    //   dispatch(registerNewUser({ email, password }));
    //   dispatch(logInUser({ email, password }));
  };

  return (
    <>
      <ToastContainer />
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <p className={`${styles.text} ${styles.firstText}`}>
            Вы можете авторизоваться с помощью Google Account:
          </p>

          <div className={''}>
            <GoogleLogin
              clientId={clientId}
              render={renderProps => (
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className={styles.btn}
                  type="button"
                >
                  <img
                    src={symbol}
                    alt="googleSymbol"
                    width="18px"
                    height="18px"
                    className={styles.img}
                  />
                  Google
                </button>
              )}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              // cookiePolicy={'single_host_origin'}
            />
          </div>

          {/* 
            Логинизаци через GOOGLE аккаунт без библеотеки

            <button type="button" className={styles.btn}>
            <img
              src={symbol}
              alt="Google symbol"
              width="18px"
              height="18px"
              className={styles.img}
            />
            <a
              href="https://kapusta-backend.goit.global/auth/google"
              className={styles.link}
            >
              Google
            </a>
            // Google 
          </button> */}

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
