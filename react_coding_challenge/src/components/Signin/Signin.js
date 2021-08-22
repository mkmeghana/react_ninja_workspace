import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import classes from './Signin.module.css'; 

const Signin = () => {
  const [ creds, setCreds ] = useState({
    email: '',
    password: ''
  });
  const [ toggleVisibility, setToggleVisibility ] = useState(false)

  const onChangeHandler = (event) => {
    const { name, value } = event.target
    setCreds({
      ...creds,
      [name]: value
    })
  }

  const signIn = () => {
    if(!creds.email || !creds.password) return;
    let data = {
      email: creds.email,
      password: creds.password
    }
    axios({
      method: 'post',
      url: 'https://reqres.in/api/login',
      data: data
    })
    .then(response => {
      window.location.href = '/home'
    })
    .catch(response => {
      console.log(response, 'response')
    })
  }

  return (
    <div className={classes.loginPage}>
      <div className={classes.loginWrap}>
        <div className={classes.contentWrapper}>
          <div className={classes.loginFormBlock}>
            <header>
              <div className={classes.logo}>logo</div>
            </header>
            <main className="mt-3">
              <div className={classes.signin}>sign in using email</div>
              <div className="form-group">
                <label>Email address</label>
                <input 
                  type='text'
                  name='email'
                  className='form-control'
                  placeholder='eg, abc@salestable.com'
                  value={creds.email}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="form-group">
                <label>Enter Password</label>
                <input 
                  type={`${toggleVisibility ? 'text' : 'password'}`}
                  name='password'
                  className={`form-control ${classes.passwordInput}`}
                  value={creds.password}
                  onChange={onChangeHandler}
                />
                <div className={classes.passwordVisibility} onClick={() => setToggleVisibility(!toggleVisibility)}></div>
              </div>
              <div className={classes.signinBtn} onClick={signIn}>Sign in</div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin;