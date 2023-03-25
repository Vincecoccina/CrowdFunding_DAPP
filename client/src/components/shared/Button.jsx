import React from 'react';
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button type={props.btnType} onClick={props.handleClick} className={`${classes.button} ${props.lg ? classes.lg : ""}`}>
      {props.children}
    </button>
  )
}

export default Button
