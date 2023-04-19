import React from 'react'
import style from './loginForm.module.css'
import { useState } from 'react'
import {provider} from '../firebase/firebase';
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const LoginForm = () => {
 
  // Sign in with google
  const navigate = useNavigate();
  const auth = getAuth();
  const signin = () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    toast.success("Login Successful");
    // console.log(user);
    // console.log(user.displayName)
    localStorage.setItem('user', JSON.stringify(user));

    navigate("/dashboard");
    
  }).catch((error) => {
    // Handle Errors here.
    toast.error("Login Failed");
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
    // ...
  });
}

  function handleOtherLogin(){
    toast('Log in through Google only', {
      icon: '😅',
    });
  }

  return (
    <div className={style.mainContainer}>
        <h3 className={style.heading}>Sign In</h3>
        <h5 className={style.subheading}>Sign in to your account</h5>
        <div className={style.topButtons}>
            <button className={style.loginButtons} onClick={signin} style={{cursor:"pointer"}}><img src='./google.png'/> <div>Sign in with Google</div></button>
            <button className={style.loginButtons} style={{cursor:"pointer"}} onClick={handleOtherLogin}><img src='./apple.png'/> <div>Sign in with Apple</div></button>
        </div>
        <div className={style.formContainer}>
            <form>
                <label>Email</label>
                <input type="text"></input>
                <label>Password</label>
                <input type="password"></input>
                <a style={{cursor:"pointer"}} onClick={handleOtherLogin}>Forgot Password ?</a>
                <div className={style.signIn} onClick={handleOtherLogin} style={{cursor:"pointer"}}>Sign In</div>
            </form>
        </div>

        <div className={style.noAccount}>Don't have an account? <a style={{cursor:"pointer"}} onClick={handleOtherLogin}>Register here</a></div>
    </div>
  )
}

export default LoginForm