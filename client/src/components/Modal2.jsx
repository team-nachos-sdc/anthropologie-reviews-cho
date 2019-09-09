import React, { Component } from 'react';

const Modal2 = (props) => {
  if(!props.show) {
    return null
  } else {
    return (
        <div className="fullscreen-container">
          <div className="login-modal">
            <div>
              <img src={'./images/XHover.png'} onClick={props.onClose} className="X"></img> : <img className="X" src={'./images/X.png'} onClick={props.onClose}></img>
              <p className="sign-in"> Sign In</p>
            </div>
            <form className="login" action="/action_page.php">
              <div className="login-container">

                <label className="login-input-label" >EMAIL*</label>
                <input type="email" name="uname" className="login-input-box" required></input>
              </div>
              <div className="login-container">

                <label className="login-input-label" >PASSWORD*</label>
                <input type="password" className="login-input-label" className="login-input-box" required></input>
              </div>
              <div className="psw">Forgot your password?</div>
              <div id="sumbit-container">
                <span>
                  <button type="submit" id="submit">SIGN IN</button>
                  <p id="cancel">Cancel</p>
                </span>
              </div>
            </form>
            <div className="sign-up-border"></div>
            <p className="sign-up">Sign Up</p>
            <button id="create-account">CREATE AN ACCOUNT</button>
          </div>
        </div>
    )
  } 
}


export default Modal2