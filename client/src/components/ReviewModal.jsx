import React, { Component } from 'react';

const ReviewModal = (props) => {
  if(!props.show) {
    return null
  } else {
    return(
      <div className="modal-back">
        <div className="modal">
          <div className="modal-button">
            <button onClick={props.onClose}>
              X
            </button>
          <div className="modalTitle center">Sign In</div>
          <div className="modalDivider"></div>
          <div className="modalLabel">EMAIL *</div>
          <div className="center"><input type="text"></input></div>
          <div className="modalLabel">PASSWORD *</div>
          <input type="password"></input>
          <div className="greenLinks verticalPadding">Forgot Your Password?</div>
          <div className="center verticalPadding"><button className="dark_button button">SIGN IN</button></div>
          <div className="greenLinks center verticalPadding">Cancel</div>
          <div className="modalDivider"></div>
          <div className="modalTitle center">Sign Up</div>
          <div className="center verticalPadding"><button className="light2_button button">CREATE AN ACCOUNT</button></div>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewModal