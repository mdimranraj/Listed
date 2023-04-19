import React from 'react'
import style from './login.module.css';
import LoginForm from '../components/loginForm';

const Login = () => {
  return (
    <>
        <div className={style.mainContainer}>
            <div className={style.leftSide}>
                <h2 className={style.headingLeft}>Board.</h2>
            </div>
            <div className={style.rightSide}>
                <div className={style.loginForm}> 
                    <LoginForm/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login

