import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Login.module.css';
import Image from 'next/image';
import classNames from 'classNames/bind';

const Login = () => {
  const [remember, setRemember] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [idFocused, setIdFocused] = useState<boolean>(false);
  const [pwdFocused, setPwdFocused] = useState<boolean>(false);

  const cs = classNames.bind(styles);

  const onSubmit = (event): void => {
    event.preventDefault();
    console.log(remember);
  };

  return (
    <>
      <Head>
        <title>login</title>
      </Head>
      <div className={cs('container')}>
        <div className={cs('contentContainer')}>
          <div className={cs('contentHeader')}>
            <Image src="/lock.png" alt="lock" width={45} height={45} />{' '}
            <h1 className={cs('contentHeaderTitle')}>Sign in</h1>
          </div>
          <form className={cs('loginForm')}>
            <div className={cs('loginItem')}>
              <label
                className={cs(
                  `${styles.inputLabel} ${
                    idFocused
                      ? styles.inputLabelFocused
                      : userId.length > 0
                      ? styles.isTextLength
                      : ''
                  }`,
                )}
              >
                User ID<span className={cs('inputSpan')}>*</span>
              </label>
              <input
                className={cs('loginInput')}
                onFocus={() => setIdFocused(true)}
                onBlur={() => setIdFocused(false)}
                value={userId}
                onChange={(event) => setUserId(event.target.value)}
                type="text"
              />
            </div>
            <div className={cs('loginItem')}>
              <label
                className={cs(
                  `${styles.inputLabel} ${
                    pwdFocused
                      ? styles.inputLabelFocused
                      : password.length > 0
                      ? styles.isTextLength
                      : ''
                  }`,
                )}
              >
                Password<span className={cs('inputSpan')}>*</span>
              </label>
              <input
                className={cs('loginInput')}
                onFocus={() => setPwdFocused(true)}
                onBlur={() => setPwdFocused(false)}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="text"
              />
            </div>
            <div className={cs('loginItem')}>
              <label className={cs('checkBoxLabel')}>
                <Image
                  src={remember ? '/checked.svg' : '/noChecked.svg'}
                  alt="noChecked"
                  width={27}
                  height={27}
                />
                <input
                  className={cs(
                    `${styles.loginCheckbox} {checkedLoginCheckbox: remember}`,
                  )}
                  type="checkbox"
                  checked={remember}
                  onChange={(event) => setRemember(event.target.checked)}
                />
                <span className={cs('checkboxSpan')}>Remember me</span>
              </label>
              <button
                className={cs('loginButton')}
                type="submit"
                onClick={onSubmit}
              >
                Sign in
              </button>
              <div className={cs('loginHelper')}>
                <a href="#">Forgot password?</a>
                <a href="#">Don't have an account? SignUp</a>
              </div>
            </div>
          </form>
          <div className={cs('contentFooter')}>
            <span>Copyright © Your Website 2020.</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
